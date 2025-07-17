import React, { useState } from 'react';
import { Clock, BookOpen, Award, Calendar, Plus, FileText, Target } from 'lucide-react';

const MyCPD: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const cpdActivities = [
    {
      id: 1,
      title: "Advanced Financial Analysis Workshop",
      provider: "IAMA",
      date: "2024-12-15",
      hours: 8,
      category: "Technical",
      status: "Completed",
      certificate: true
    },
    {
      id: 2,
      title: "Ethics in Management Accounting",
      provider: "IMA",
      date: "2024-11-20",
      hours: 4,
      category: "Ethics",
      status: "Completed",
      certificate: true
    },
    {
      id: 3,
      title: "Strategic Cost Management",
      provider: "IAMA",
      date: "2024-10-10",
      hours: 6,
      category: "Technical",
      status: "Completed",
      certificate: false
    },
    {
      id: 4,
      title: "Leadership in Finance",
      provider: "External",
      date: "2024-09-05",
      hours: 12,
      category: "Leadership",
      status: "Pending Approval",
      certificate: true
    }
  ];

  const cpdSummary = {
    required: 30,
    completed: 30,
    technical: 20,
    ethics: 4,
    leadership: 6,
    deadline: "2025-12-31"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-fuchsia-950/20" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              My <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">CPD</span> Tracker
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Track your Continuing Professional Development hours and stay compliant with CMA requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CPD Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Progress Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-8 h-8 text-fuchsia-400" />
                <span className="text-2xl font-bold text-fuchsia-400">{cpdSummary.completed}/{cpdSummary.required}</span>
              </div>
              <h3 className="font-semibold mb-1">Total Hours</h3>
              <p className="text-gray-400 text-sm">Required annually</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                <div 
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-600 h-2 rounded-full"
                  style={{ width: `${(cpdSummary.completed / cpdSummary.required) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-blue-400">{cpdSummary.technical}</span>
              </div>
              <h3 className="font-semibold mb-1">Technical</h3>
              <p className="text-gray-400 text-sm">Minimum 20 hours</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-2xl font-bold text-yellow-400">{cpdSummary.ethics}</span>
              </div>
              <h3 className="font-semibold mb-1">Ethics</h3>
              <p className="text-gray-400 text-sm">Minimum 2 hours</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-8 h-8 text-green-400" />
                <span className="text-sm font-bold text-green-400">{cpdSummary.deadline}</span>
              </div>
              <h3 className="font-semibold mb-1">Deadline</h3>
              <p className="text-gray-400 text-sm">CPD year end</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'overview'
                    ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('activities')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'activities'
                    ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Activities
              </button>
              <button
                onClick={() => setActiveTab('add')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'add'
                    ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Add Activity
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Progress Chart */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">CPD Progress by Category</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Technical Skills</span>
                      <span className="text-fuchsia-400">{cpdSummary.technical}/20 hours</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                        style={{ width: `${(cpdSummary.technical / 20) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Ethics</span>
                      <span className="text-fuchsia-400">{cpdSummary.ethics}/2 hours</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full"
                        style={{ width: `${(cpdSummary.ethics / 2) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Leadership</span>
                      <span className="text-fuchsia-400">{cpdSummary.leadership}/8 hours</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                        style={{ width: `${(cpdSummary.leadership / 8) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Status */}
              <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 rounded-xl p-8 border border-green-500/30">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-green-400">Compliance Status: On Track</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  You have successfully completed all required CPD hours for this period. Keep up the excellent work!
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">Next deadline: {cpdSummary.deadline}</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">CPD Activities</h3>
                <button 
                  onClick={() => setActiveTab('add')}
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add Activity
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-fuchsia-500 to-purple-600">
                        <th className="px-6 py-4 text-left font-semibold">Activity</th>
                        <th className="px-6 py-4 text-left font-semibold">Provider</th>
                        <th className="px-6 py-4 text-left font-semibold">Date</th>
                        <th className="px-6 py-4 text-left font-semibold">Hours</th>
                        <th className="px-6 py-4 text-left font-semibold">Category</th>
                        <th className="px-6 py-4 text-left font-semibold">Status</th>
                        <th className="px-6 py-4 text-left font-semibold">Certificate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cpdActivities.map((activity) => (
                        <tr key={activity.id} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors duration-200">
                          <td className="px-6 py-4 font-semibold">{activity.title}</td>
                          <td className="px-6 py-4 text-gray-300">{activity.provider}</td>
                          <td className="px-6 py-4 text-gray-300">{activity.date}</td>
                          <td className="px-6 py-4 text-fuchsia-400 font-semibold">{activity.hours}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              activity.category === 'Technical' ? 'bg-blue-900 text-blue-300' :
                              activity.category === 'Ethics' ? 'bg-yellow-900 text-yellow-300' :
                              'bg-green-900 text-green-300'
                            }`}>
                              {activity.category}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              activity.status === 'Completed' ? 'bg-green-900 text-green-300' :
                              'bg-yellow-900 text-yellow-300'
                            }`}>
                              {activity.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {activity.certificate ? (
                              <button className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-200">
                                <FileText className="w-5 h-5" />
                              </button>
                            ) : (
                              <span className="text-gray-500">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'add' && (
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Add CPD Activity</h3>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Activity Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white placeholder-gray-400 transition-colors duration-200"
                      placeholder="Enter activity title"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Provider</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white placeholder-gray-400 transition-colors duration-200"
                        placeholder="e.g., IAMA, IMA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Date Completed</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Hours</label>
                      <input
                        type="number"
                        min="0"
                        step="0.5"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white placeholder-gray-400 transition-colors duration-200"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                      <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white transition-colors duration-200">
                        <option value="">Select category</option>
                        <option value="Technical">Technical</option>
                        <option value="Ethics">Ethics</option>
                        <option value="Leadership">Leadership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white placeholder-gray-400 transition-colors duration-200"
                      placeholder="Brief description of the activity"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="certificate"
                      className="w-4 h-4 text-fuchsia-400 bg-gray-700 border-gray-600 rounded focus:ring-fuchsia-400 focus:ring-2"
                    />
                    <label htmlFor="certificate" className="ml-2 text-sm text-gray-300">
                      I have a certificate for this activity
                    </label>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Add Activity
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('activities')}
                      className="border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyCPD;