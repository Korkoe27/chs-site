import React from 'react';
import { Shield, Heart, Recycle, AlertTriangle, Download, FileText } from 'lucide-react';

const Policies: React.FC = () => {
  const healthPolicies = [
    'Copies of each child\'s birth certificate, weighing book, immunization records, are requirements for admission.',
    'Veronica buckets are placed at vantage points for use.',
    'Water is connected to the school. To avert water shortage, the school has provided a number of polytanks to conserve water.',
    'Fumigation exercises are carried out in the school every term.',
    'Teachers receive training on the administration of basic first aid in the school.',
    'When a child is injured and it is beyond the administration of first aid, the child is sent to a recognized health facility for treatment.',
    'Pupils who are sick are required to fully recover before reporting to school.',
    'Parents are to provide snack, lunch and adequate drinking water to learners every school day.',
    'Wednesdays and Thursdays are set aside as fruit days. Children are to bring natural fruits of their choice to school as snack.',
    'The school also provides canteen services. All the caterers are declared medically fit to cook and serve meals.',
    'Each class has a time allocated for break, nature walk and physical exercises.',
    'Toilets and bathrooms are kept clean at regular intervals.',
    'Weighing and Immunization are done for children in the school premises.'
  ];

  const childProtectionPolicies = [
    'Children are picked from the school only by parents or individuals known by the school.',
    'The school does not discuss issues of the child with non-biological parents.',
    'Parents/Visitors are not allowed into the classrooms except during Open Days and the beginning of the Academic Year.',
    'Children are picked from the school on daily basis.',
    'Aside the marking of class register, children are registered at the school entrance on daily basis.',
    'In an event where a pupil is the cause of an injury to another child, the parents of both pupils are not supposed to know each other. Management meets the parents with their children separately.'
  ];

  const wasteManagementPolicies = [
    'Provision of Dust Bins: Each classroom has a dustbin. Waste is separated into paper and plastics. Children are educated to put the waste into the appropriate waste bins.',
    'We have trained waste supervisors, (Domestic Executives), who, at the end of each school day, collect waste from the classrooms to Waste Assembly Points.',
    'We have toilets and urinals. We have separate toilets for boys and girls on each floor for every level. There are toilets exclusively for visitors and Staff.',
    'Educational flyers are posted at vantage points to remind all about our Waste Management Policies. Littering is disallowed.',
    'Children are trained on the use and re-use of plastic waste'
  ];

  const handleDownloadCodeOfConduct = () => {
    // This would typically trigger a download of the actual PDF file
    alert('Code of Conduct document will be downloaded. (This is a demo - actual file would be downloaded in production)');
  };

  return (
    <div className="py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Policies</h1>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive policies ensuring the safety, health, and well-being of all our students
            </p>
          </div>
        </div>
      </section>

      {/* Code of Conduct Download Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-600 p-4 rounded-full">
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Code of Discipline for Pupils</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive Code of Discipline provides guidance for maintaining a positive learning environment. 
              Download the complete document to understand our disciplinary guidelines and procedures.
            </p>
            <button
              onClick={handleDownloadCodeOfConduct}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Download Code of Conduct (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Health and Safety Policies */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Shield className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Health and Safety Policies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              School Health Policies are actions we take to improve the overall health, hygiene, and nutrition of school children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthPolicies.map((policy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{policy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Child Protection Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Heart className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Child Protection and Safeguarding Policies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Our comprehensive safeguarding policies ensure the protection and well-being of every child in our care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {childProtectionPolicies.map((policy, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">{policy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste Management Plan */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Recycle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Waste Management Plan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              The Waste Management Plan (WMP) addresses management of all solid and liquid waste produced in the school. 
              Our plan aims to provide guidelines on waste reduction, segregation, collection, and disposal practices in accordance with best practices.
            </p>
          </div>

          <div className="space-y-6">
            {wasteManagementPolicies.map((policy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <Recycle className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{policy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Note</h3>
                <p className="text-gray-700">
                  As a policy, open defecation and urination are disallowed in and around the school. 
                  All members of the school community are expected to adhere to our waste management guidelines 
                  to maintain a clean and healthy environment for learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;