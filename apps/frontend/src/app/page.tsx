import {
  Github,
  Layers,
  LucideProps,
  Palette,
  Pencil,
  Share2,
  Sparkles,
  Twitter,
  Users,
} from "lucide-react";
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Doodleverse</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#showcase"
              className="hover:text-blue-400 transition-colors"
            >
              Showcase
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-400 transition-colors"
            >
              Pricing
            </a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition-colors">
            Start Drawing
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Draw & Create with
          <br />
          unlimited possibilities
        </h1>
        <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
          Express your creativity with our powerful web-based drawing tool.
          Create, collaborate, and share your artwork with the world.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition-colors">
            Try Now - It's Free
          </button>
          <button className="border border-gray-700 hover:border-gray-600 px-8 py-3 rounded-full font-medium transition-colors">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Pencil className="w-6 h-6 text-blue-500" />}
            title="Intuitive Drawing Tools"
            description="Professional-grade drawing tools designed for both beginners and experts."
          />
          <FeatureCard
            icon={<Share2 className="w-6 h-6 text-purple-500" />}
            title="Real-time Collaboration"
            description="Work together with your team in real-time, anywhere in the world."
          />
          <FeatureCard
            icon={<Layers className="w-6 h-6 text-green-500" />}
            title="Unlimited Layers"
            description="Create complex artwork with unlimited layers and advanced blending modes."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6 text-yellow-500" />}
            title="Community Features"
            description="Share your work and get inspired by other artists in our community."
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6 text-pink-500" />}
            title="AI-Powered Effects"
            description="Enhance your artwork with AI-generated effects and suggestions."
          />
        </div>
      </section>

      {/* Showcase Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Made with Doodleverse
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400"
            alt="Digital Art Example 1"
            className="rounded-lg hover:opacity-75 transition-opacity"
          />
          <img
            src="https://images.unsplash.com/photo-1633186710895-309db2eca9e4?auto=format&fit=crop&w=400"
            alt="Digital Art Example 2"
            className="rounded-lg hover:opacity-75 transition-opacity"
          />
          <img
            src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=400"
            alt="Digital Art Example 3"
            className="rounded-lg hover:opacity-75 transition-opacity"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 Doodleverse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement<LucideProps>;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;
