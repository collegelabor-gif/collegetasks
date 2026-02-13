import { Briefcase, GraduationCap, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to CollegeTasks</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A private job board for vetted college students seeking quick, flexible work.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect Students with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Work Opportunities
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Connecting college students seeking flexible work and customers needing reliable, affordable services.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              <a href="https://forms.gle/HDXUn2J3cXkStYN49" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-[250px]">
                  <Briefcase className="mr-3 h-5 w-5" />
                  Request a Job
                </button>
              </a>
              <a href="https://forms.gle/5f7Fhu3kFi6KsuEA6" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-[250px]">
                  <GraduationCap className="mr-3 h-5 w-5" />
                  Bring CollegeTasks to Your Campus
                </button>
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">For Households</h3>
                <p className="text-gray-600">
                  Get help with dorm/house move-in/out services, cleaning, and other household tasks from reliable college students at affordable rates.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">For Businesses</h3>
                <p className="text-gray-600">
                  Connect with motivated students for any one-off jobs your business needs completed quickly and efficiently.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">For Students</h3>
                <p className="text-gray-600">
                  Make money in college, gain leadership opportunities, and request dorm/apartment cleaning services through our student network.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
