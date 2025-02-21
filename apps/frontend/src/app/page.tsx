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
import { secondaryFont } from "./layout";

function App() {
  return (
    <div className={`min-h-screen ${secondaryFont.className} text-gray-700`}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">SketchFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="hover:text-gray-950 hover:underline underline-offset-[3px] transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#showcase"
              className="hover:text-gray-950 hover:underline underline-offset-[3px] transition-colors duration-300"
            >
              Showcase
            </a>
            <a
              href="#pricing"
              className="hover:text-gray-950 hover:underline underline-offset-[3px] transition-colors duration-300"
            >
              Pricing
            </a>
          </div>
          <button className="brand-gradient px-6 py-2 rounded-full font-medium ">
            Start Drawing
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 brand-gradient-text ">
          Draw & Create with
          <br />
          unlimited possibilities
        </h1>
        <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
          Express your creativity with our powerful web-based drawing tool.
          Create, collaborate, and share your artwork with the world.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="brand-gradient hover:shadow-lg px-8 py-3 rounded-full font-medium transition-all duration-300">
            Try Now - It's Free
          </button>
          <button className="border border-gray-600 hover:border-gray-950 hover:shadow-md px-8 py-3 rounded-full font-medium transition-all duration-300">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
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
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-400">
            <p>© 2025 SketchFlow. All rights reserved.</p>
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
    <div className=" p-6 rounded-xl border border-gray-400 hover:border-gray-700 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;
