import React from 'react';
import { ExternalLink, Book, Users, Award, FileText, Globe, Calculator } from 'lucide-react';

const UsefulLinks: React.FC = () => {
  const linkCategories = [
    {
      title: "Official CMA Resources",
      icon: <Award className="w-6 h-6" />,
      color: "from-fuchsia-500 to-purple-600",
      links: [
        {
          name: "Institute of Management Accountants (IMA)",
          url: "https://www.imanet.org",
          description: "Official CMA certification body and global association"
        },
        {
          name: "CMA Exam Information",
          url: "https://www.imanet.org/cma-certification",
          description: "Complete guide to CMA certification process"
        },
        {
          name: "CMA Candidate Resources",
          url: "https://www.imanet.org/cma-certification/getting-started",
          description: "Study guides, exam tips, and preparation materials"
        },
        {
          name: "Prometric Testing Centers",
          url: "https://www.prometric.com/en-us/clients/ima",
          description: "Find testing locations and schedule your CMA exam"
        }
      ]
    },
    {
      title: "Professional Development",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-teal-600",
      links: [
        {
          name: "CPA Journal",
          url: "https://www.cpajournal.com",
          description: "Leading accounting publication with industry insights"
        },
        {
          name: "Management Accounting Quarterly",
          url: "https://www.imanet.org/insights-and-trends/management-accounting-quarterly",
          description: "Quarterly publication on management accounting trends"
        },
        {
          name: "Strategic Finance Magazine",
          url: "https://sfmagazine.com",
          description: "IMA's flagship publication for finance professionals"
        },
        {
          name: "CFO.com",
          url: "https://www.cfo.com",
          description: "News and insights for senior finance executives"
        }
      ]
    },
    {
      title: "Industry Standards & Frameworks",
      icon: <FileText className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      links: [
        {
          name: "International Financial Reporting Standards (IFRS)",
          url: "https://www.ifrs.org",
          description: "Global accounting standards and interpretations"
        },
        {
          name: "Financial Accounting Standards Board (FASB)",
          url: "https://www.fasb.org",
          description: "US accounting standards and guidance"
        },
        {
          name: "Committee of Sponsoring Organizations (COSO)",
          url: "https://www.coso.org",
          description: "Internal control and risk management frameworks"
        },
        {
          name: "International Integrated Reporting Council (IIRC)",
          url: "https://www.integratedreporting.org",
          description: "Integrated reporting framework and guidelines"
        }
      ]
    },
    {
      title: "Learning & Training",
      icon: <Book className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600",
      links: [
        {
          name: "Coursera Business Courses",
          url: "https://www.coursera.org/browse/business",
          description: "Online courses from top universities and companies"
        },
        {
          name: "LinkedIn Learning",
          url: "https://www.linkedin.com/learning",
          description: "Professional development courses and certifications"
        },
        {
          name: "edX Business & Management",
          url: "https://www.edx.org/course/subject/business-management",
          description: "University-level courses in business and finance"
        },
        {
          name: "Khan Academy Finance",
          url: "https://www.khanacademy.org/economics-finance-domain",
          description: "Free finance and economics courses"
        }
      ]
    },
    {
      title: "Professional Organizations",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      links: [
        {
          name: "American Institute of CPAs (AICPA)",
          url: "https://www.aicpa.org",
          description: "Leading CPA organization in the United States"
        },
        {
          name: "Chartered Institute of Management Accountants (CIMA)",
          url: "https://www.cimaglobal.com",
          description: "Global management accounting professional body"
        },
        {
          name: "Association of Chartered Certified Accountants (ACCA)",
          url: "https://www.accaglobal.com",
          description: "Global accounting body for professional accountants"
        },
        {
          name: "International Federation of Accountants (IFAC)",
          url: "https://www.ifac.org",
          description: "Global organization for the accountancy profession"
        }
      ]
    },
    {
      title: "Tools & Software",
      icon: <Calculator className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600",
      links: [
        {
          name: "Microsoft Excel Templates",
          url: "https://templates.office.com/en-us/budgets",
          description: "Financial templates and budgeting tools"
        },
        {
          name: "QuickBooks",
          url: "https://quickbooks.intuit.com",
          description: "Small business accounting software"
        },
        {
          name: "Tableau Public",
          url: "https://public.tableau.com",
          description: "Free data visualization and analytics platform"
        },
        {
          name: "Power BI",
          url: "https://powerbi.microsoft.com",
          description: "Business analytics and visualization tools"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-fuchsia-950/20" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Useful <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Links</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Essential resources, tools, and professional organizations to support your CMA journey and career growth.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Resource Directory</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Carefully curated links to help you excel in your CMA studies and professional development.
            </p>
          </div>

          <div className="space-y-12">
            {linkCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-fuchsia-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors duration-200">
                            {link.name}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-fuchsia-400 transition-colors duration-200 ml-3 flex-shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quick Access</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Frequently accessed resources for CMA professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://www.imanet.org/cma-certification"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 text-center group"
            >
              <Award className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 group-hover:text-fuchsia-400 transition-colors duration-200">
                CMA Certification
              </h3>
              <p className="text-gray-400 text-sm">Official certification info</p>
            </a>

            <a
              href="https://www.prometric.com/en-us/clients/ima"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 text-center group"
            >
              <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 group-hover:text-fuchsia-400 transition-colors duration-200">
                Schedule Exam
              </h3>
              <p className="text-gray-400 text-sm">Prometric testing centers</p>
            </a>

            <a
              href="https://www.imanet.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 text-center group"
            >
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 group-hover:text-fuchsia-400 transition-colors duration-200">
                IMA Website
              </h3>
              <p className="text-gray-400 text-sm">Official IMA portal</p>
            </a>

            <a
              href="https://sfmagazine.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 text-center group"
            >
              <Book className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 group-hover:text-fuchsia-400 transition-colors duration-200">
                Strategic Finance
              </h3>
              <p className="text-gray-400 text-sm">IMA's flagship magazine</p>
            </a>
          </div>
        </div>
      </section>

      {/* Submit Link */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-fuchsia-900/50 to-purple-900/50 rounded-2xl p-12 border border-fuchsia-500/20 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Know a Great Resource?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Help us expand our resource directory by suggesting useful links for the CMA community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Suggest a Link
              </button>
              <button className="border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong>Disclaimer:</strong> The external links provided are for informational purposes only. 
              IAMA does not endorse or guarantee the content, accuracy, or reliability of external websites. 
              Users access these resources at their own discretion and risk. Please verify information 
              independently and ensure compatibility with your specific needs and circumstances.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsefulLinks;