import { Heart, Target, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About CollegeTasks
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empowering students and communities through meaningful work connections
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            CollegeTasks bridges the gap between motivated college students seeking flexible work opportunities
            and community members who need reliable, affordable services. We believe in creating mutually beneficial
            relationships that help students gain valuable experience while providing quality services to our customers.
          </p>
        </div>

        {/* About the Company */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Company</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            CollegeTasks, formerly College Labor Connect (CLC), was founded at the University of Tennessee in 2025 to solve a real-world problem with a simple, sustainable solution. In the summer of 2025, our rebrand to CollegeTasks began with the inception of our new website. The platform was built after recognizing how often students needed flexible work and neighbors needed help. No middlemen. No fluff. Just jobs done right.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Community First</h3>
            </div>
            <p className="text-gray-700">
              We prioritize building strong, lasting relationships between students and community members,
              fostering trust and mutual respect in every interaction.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Quality & Care</h3>
            </div>
            <p className="text-gray-700">
              Every job is an opportunity for students to showcase their skills and dedication while
              providing exceptional service that exceeds customer expectations.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Post or Find Jobs</h4>
              <p className="text-gray-600 text-sm">
                Customers post jobs they need help with, students browse and apply for opportunities that match their skills.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Connect & Coordinate</h4>
              <p className="text-gray-600 text-sm">
                Our platform facilitates communication between customers and students to discuss details and expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Complete & Review</h4>
              <p className="text-gray-600 text-sm">
                Students complete the work professionally, and both parties can leave reviews to build trust in the community.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <a href="https://forms.gle/HDXUn2J3cXkStYN49" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Request a Job
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
