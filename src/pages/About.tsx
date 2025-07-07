import React from 'react';
import { Calendar, MapPin, Users, Target, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const aims = [
    'To provide enabling environment where children are challenged and motivated to acquire knowledge',
    'To provide the needed foundation in the life of the child particularly in today\'s dynamic social changes',
    'To provide a carefully planned education that will meet the needs of every child',
    'To provide successful early childhood care and stimulation programmes that lay the foundation for creativity, imagination, self reliance and survival',
    'To allow children to apply themselves to work and become confident and self disciplined learners',
    'To develop the pupils sense of responsibility for the School and the Community at large',
    'To provide systematically planned quality educational programmes for the child up to the Junior High School level',
    'To develop the awareness of the child which will enable him or her to easily adapt to situations',
    'To co-operate with parents and stake holders to develop the child socially, morally, physically and spiritually'
  ];

  const headteachers = [
    { year: '1999 - 2002', name: 'DEDINA V. GADZEKPO (MRS)' },
    { year: '2002 - 2004', name: 'MARY AKOREE (MS)' },
    { year: '2004 - 2006', name: 'GIFTY AKOSUA ANYONAM KODZI (MRS)' },
    { year: '2006 - 2007', name: 'JULIANA BEDIAKO (MRS) (deceased)' },
    { year: '2007 - To Date', name: 'PAUL KOBINA ESSANDOH (MR.)' }
  ];

  const programs = {
    basic: [
      'Science', 'Mathematics', 'English Language', 'Environmental Studies', 
      'Creative Arts', 'Religious And Moral Education', 'Ghanaian Language (Fanti)',
      'Information Communication Technology', 'French', 'Citizenship Education/Social Studies',
      'BDT (Home Economics and Pre-Technical Drawing)'
    ],
    creche: [
      'Rhymes', 'Colour Identification', 'Toilet Training', 'Self Feeding', 'Singing'
    ],
    preschool: [
      'Picture Reading', 'Environmental Studies', 'French', 'Number Game',
      'Language Activity', 'Science', 'Story Telling', 'Creativity',
      'Mathematics', 'Number Recognition'
    ],
    cocurricular: [
      'School Based Projects - Spelling \'B\', Essay Writing Competitions',
      'Library', 'Physical Education', 'Music Lessons', 'UCMAS'
    ]
  };

  return (
    <div className="py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Calvary Hillcrest Schools</h1>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Learn about our rich history, mission, and commitment to educational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our School</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Calvary Hillcrest Schools is a private co-educational complex made up of a Day Care, 
                  Pre-School, Primary and a Junior High School. It is registered by the Ghana Education 
                  Service and gazetted.
                </p>
                <p className="mb-4">
                  The complex is situated on the Cape Coast-Takoradi Highway opposite the University of 
                  Cape Coast Grounds and Gardens and adjacent to the Centre for National Culture, (CNC) 
                  Cape Coast, Ghana.
                </p>
                <div className="flex items-center space-x-2 text-green-600 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Located opposite UCC Campus</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">Over 800 students enrolled</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="School building"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1999 - Foundation</h3>
                  <p className="text-gray-600">
                    Founded by Mrs. Dedina V. Gadzekpo as a Day Care Centre on October 5, 1999 
                    in the then University Residents' Church (URC), now University Inter-denominational Church (UIC). 
                    Initially called UIC Day Care Centre.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2000 - Relocation</h3>
                  <p className="text-gray-600">
                    Relocated to its present site and properly named Hillcrest Day Care Centre in January, 2000. 
                    Registered with Social Welfare.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2007-2008 - Official Registration</h3>
                  <p className="text-gray-600">
                    In 2007, the school registered officially with GES to run a basic system and became known as Hillcrest Schools. 
                    In 2008, the name was changed to Calvary Hillcrest Schools due to naming conflicts and was duly registered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To raise God fearing, knowledgeable, patriotic and well educated children for Ghana and the world at Large.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                We are committed to provide successful Early Childhood Care and stimulating educational programmes 
                that lay the foundation for creativity, imagination, self reliance and survival.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700">
                Creativity, imagination, self reliance and survival
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Aims */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our School Aims</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aims.map((aim, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{aim}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Level Subjects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {programs.basic.map((subject, index) => (
                  <div key={index} className="bg-white/60 px-3 py-2 rounded-lg text-sm">
                    {subject}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creche Activities</h3>
              <div className="space-y-2">
                {programs.creche.map((activity, index) => (
                  <div key={index} className="bg-white/60 px-3 py-2 rounded-lg text-sm">
                    {activity}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-School (N1-KG2)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {programs.preschool.map((subject, index) => (
                  <div key={index} className="bg-white/60 px-3 py-2 rounded-lg text-sm">
                    {subject}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Co-Curricular Activities</h3>
              <div className="space-y-2">
                {programs.cocurricular.map((activity, index) => (
                  <div key={index} className="bg-white/60 px-3 py-2 rounded-lg text-sm">
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headteachers */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Headteachers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {headteachers.map((headteacher, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-lg font-semibold text-gray-900">{headteacher.name}</h3>
                  </div>
                  <div className="text-green-600 font-medium">{headteacher.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;