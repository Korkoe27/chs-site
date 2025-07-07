import React from 'react';
import { Crown, Star, Users, Award, Shield, Heart } from 'lucide-react';

const Prefects: React.FC = () => {
  const prefectRoles = [
    {
      title: 'Head Boy',
      name: 'Michael Asante',
      class: 'JHS 3A',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Leading school assemblies', 'Representing students in meetings', 'Organizing student activities'],
      icon: Crown,
      color: 'from-green-600 to-green-700'
    },
    {
      title: 'Head Girl',
      name: 'Akosua Mensah',
      class: 'JHS 3B',
      image: 'https://images.pexels.com/photos/8613068/pexels-photo-8613068.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Supporting Head Boy duties', 'Leading girls\' activities', 'Mentoring junior students'],
      icon: Crown,
      color: 'from-green-600 to-green-700'
    },
    {
      title: 'Academic Prefect',
      name: 'Kwame Osei',
      class: 'JHS 2A',
      image: 'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Organizing study groups', 'Academic competitions', 'Library management'],
      icon: Star,
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Sports Prefect',
      name: 'Ama Boateng',
      class: 'JHS 2B',
      image: 'https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Organizing sports events', 'Managing sports equipment', 'Inter-house competitions'],
      icon: Award,
      color: 'from-orange-600 to-orange-700'
    },
    {
      title: 'Discipline Prefect',
      name: 'Kofi Adjei',
      class: 'JHS 3A',
      image: 'https://images.pexels.com/photos/8471668/pexels-photo-8471668.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Maintaining school order', 'Monitoring student behavior', 'Conflict resolution'],
      icon: Shield,
      color: 'from-red-600 to-red-700'
    },
    {
      title: 'Social Prefect',
      name: 'Efua Darko',
      class: 'JHS 2A',
      image: 'https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Planning social events', 'Community service projects', 'Student welfare'],
      icon: Heart,
      color: 'from-purple-600 to-purple-700'
    }
  ];

  const achievements = [
    {
      title: 'Leadership Excellence',
      description: 'Our prefects have successfully organized over 15 school events this academic year',
      icon: Crown
    },
    {
      title: 'Academic Support',
      description: 'Peer tutoring programs have helped improve overall class performance by 20%',
      icon: Star
    },
    {
      title: 'Community Service',
      description: 'Led 8 community outreach programs benefiting local neighborhoods',
      icon: Heart
    },
    {
      title: 'Student Representation',
      description: 'Effectively represented student voices in 12 school management meetings',
      icon: Users
    }
  ];

  return (
    <div className="py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Prefects</h1>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Meet our dedicated student leaders who help make our school a better place for everyone
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Leadership at Calvary Hillcrest</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our prefect system is designed to develop leadership skills, responsibility, and character in our students. 
            These exceptional young leaders serve as role models and bridges between students and faculty, 
            helping to create a positive and supportive school environment for all.
          </p>
        </div>
      </section>

      {/* Prefects Grid */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Prefects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prefectRoles.map((prefect, index) => {
              const IconComponent = prefect.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative">
                    <img
                      src={prefect.image}
                      alt={prefect.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`bg-gradient-to-r ${prefect.color} p-3 rounded-full shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{prefect.name}</h3>
                      <p className="text-white/90">{prefect.class}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className={`bg-gradient-to-r ${prefect.color} w-8 h-8 rounded-full flex items-center justify-center`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{prefect.title}</h4>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h5>
                      <ul className="space-y-1">
                        {prefect.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prefect Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Our prefects have made significant contributions to school life and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center bg-green-50 p-6 rounded-2xl hover:bg-green-100 transition-colors duration-300">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Become a Prefect */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Become a Prefect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Must be in JHS 2 or JHS 3</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Excellent academic performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Good disciplinary record</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Demonstrated leadership potential</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Selection Process</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Teacher nominations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Student peer voting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Interview with school management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Final selection and appointment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Aspiring to Lead?</h2>
          <p className="text-xl mb-8">
            If you're a student with leadership potential, consider applying to become a prefect and make a positive impact on your school community.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Learn More About Leadership Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};

export default Prefects;