import React from 'react';
import { FileText, Calendar, Users, CheckCircle, Download, AlertCircle, DollarSign, Clock } from 'lucide-react';

const Admissions: React.FC = () => {
  const entryPoints = [
    {
      title: 'PreSchool',
      description: 'Creche, Nursery 1, Nursery 2, and Kindergarten levels',
      icon: Users,
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      title: 'Primary',
      description: 'Primary 1 through Primary 6',
      icon: FileText,
      color: 'from-green-600 to-green-700',
      image: 'https://images.pexels.com/photos/8471668/pexels-photo-8471668.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      title: 'Junior High School',
      description: 'JHS 1, JHS 2, and JHS 3',
      icon: Calendar,
      color: 'from-green-700 to-green-800',
      image: 'https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    }
  ];

  const requirements = [
    {
      item: 'Photocopy of birth certificate',
      description: 'Official birth certificate copy required for all applicants'
    },
    {
      item: 'Two passport sized photographs',
      description: 'Recent passport photos of the prospective student'
    },
    {
      item: 'Transcripts of most recent school reports',
      description: 'Required for JHS Applicants only - previous academic records'
    }
  ];

  const assessmentSubjects = [
    { subject: 'Mathematics', description: 'Basic mathematical concepts and problem-solving' },
    { subject: 'English Language', description: 'Reading comprehension, writing, and communication skills' },
    { subject: 'General Science', description: 'Basic scientific knowledge and reasoning' }
  ];

  const paymentPlan = [
    {
      step: '1',
      percentage: '40%',
      timing: 'On or before re-opening day',
      description: 'Initial payment required on each new term'
    },
    {
      step: '2',
      percentage: '30%',
      timing: 'Before end of second month',
      description: 'Second installment payment'
    },
    {
      step: '3',
      percentage: '30%',
      timing: 'Latest by end of 2nd week of third month',
      description: 'Final payment to complete fee payment'
    }
  ];

  return (
    <div className="py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Complete information about our admission process and financial policies
            </p>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Join our school family through our comprehensive and fair admission process
            </p>
          </div>

          {/* Entry Points */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Admission Entry Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {entryPoints.map((entry, index) => {
                const IconComponent = entry.icon;
                return (
                  <div key={index} className="bg-white border-2 border-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={entry.image}
                        alt={entry.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className={`bg-gradient-to-r ${entry.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{entry.title}</h3>
                      <p className="text-gray-600">{entry.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Admission Procedure */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Admission Procedure</h3>
            
            {/* Important Notice */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Notice</h3>
                  <p className="text-gray-700">
                    All admissions are preceded by a compulsory competitive entrance examination and interviews. 
                    Only successful candidates are placed.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1: Application Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Purchase Application Form</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">In-Person Purchase</h4>
                      <p className="text-gray-700 mb-3">Visit the school to purchase application form</p>
                      <div className="bg-white p-3 rounded-lg">
                        <span className="font-bold text-green-600">Cost: GHC 20</span>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Download Option</h4>
                      <p className="text-gray-700 mb-3">Download form and pay on submission</p>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download Form</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Required Documents */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h3>
                  <p className="text-gray-600 mb-6">
                    Application forms should be submitted before the deadline and must be accompanied by:
                  </p>
                  <div className="space-y-4">
                    {requirements.map((req, index) => (
                      <div key={index} className="bg-green-50 p-4 rounded-lg flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{req.item}</h4>
                          <p className="text-gray-600 text-sm">{req.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Assessment */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrance Assessment</h3>
                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Assessment Period</h4>
                    <p className="text-gray-700">All prospective students are assessed between April and May each year.</p>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-4">Assessment Subjects:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {assessmentSubjects.map((subject, index) => (
                      <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                        <h5 className="font-semibold text-gray-900 mb-2">{subject.subject}</h5>
                        <p className="text-gray-600 text-sm">{subject.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Results */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Results Notification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                      <p className="text-gray-700">All applicants are notified within 14 days after submission of application forms.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Special Note</h4>
                      <p className="text-gray-700">Pupils are admitted to the creche all year round.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Information Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <DollarSign className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Information</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Calvary Hillcrest School complex is a private school and therefore paying of school fees on schedule 
              is very important. The complex is made up of the pre-school, the kindergarten, the primary and the Junior Secondary School.
            </p>
          </div>

          {/* Pre-School and Basic School Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Pre-School */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Pre-School</h3>
                <p className="text-gray-600">Crèche, Nurseries, and Kindergarten</p>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Schedule</h4>
                  <p className="text-gray-700">Fees are paid termly (every four months) with arrangements available for monthly payments.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Deadline</h4>
                  <p className="text-gray-700">All fees must be paid in full between the 1st and 14th of every month.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Important Notice</h4>
                      <p className="text-gray-700 text-sm">
                        When a parent fails to settle fees in full beyond two months, 
                        the child is sent home until fees are paid in full.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic School */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Basic School</h3>
                <p className="text-gray-600">Primary and Junior High School</p>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Schedule</h4>
                  <p className="text-gray-700">Fees are paid termly (every four months).</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Deadline</h4>
                  <p className="text-gray-700">Fees must be paid in full within the first month after re-opening.</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Late Payment Policy</h4>
                      <p className="text-gray-700 text-sm">
                        Children are sent home after the first month of re-opening when fees are not paid in full.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Fee Adjustments</h4>
                  <p className="text-gray-700 text-sm">
                    Depending on economic situations, fees may be increased before a new academic year begins. 
                    The increase will usually affect both tuition and miscellaneous items.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Acceptable Payment Plan */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptable Payment Plan</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                For families who prefer to spread payments across the term, we offer the following structured payment plan:
              </p>
            </div>

            <div className="space-y-6">
              {paymentPlan.map((step, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="bg-white px-4 py-2 rounded-full">
                        <span className="text-2xl font-bold text-gray-900">{step.percentage}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.timing}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin the Application Process?</h2>
          <p className="text-xl mb-8">
            Take the first step towards your child's bright future at Calvary Hillcrest Schools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Download Application Form
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Contact Admissions Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;