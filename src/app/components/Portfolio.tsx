import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = ['All', 'Branding', 'Video Editing', 'SEO', 'Marketing'];

const projects = [
  {
    title: 'Tech Startup Branding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    description: 'Complete brand identity for innovative tech company'
  },
  {
    title: 'E-commerce Social Media Ads',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    description: 'Modern online shopping experience'
  },
  {
    title: 'video Editing for Brand Campaign',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
    description: 'Engaging video content for brand promotion'
  },
  {
    title: 'Social Media Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    description: 'Viral marketing campaign strategy'
  },
  {
    title: 'Restaurant Rebranding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    description: 'Fresh identity for local restaurant chain'
  },
  {
    title: 'SEO Analytics',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'Intuitive analytics dashboard design'
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-pink-900/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#fe6d12] tracking-wide uppercase">OUR WORK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured Projects &amp; Creative Case Studies
          </h2>
          <p className="text-xl text-gray-400">
            Explore our curated portfolio of successful brand identities, commercial video edits, and digital campaigns.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? 'default' : 'outline'}
              className={activeCategory === category 
                ? 'bg-[#fe6d12] hover:bg-[#e85f00] text-white cursor-pointer' 
                : 'border-gray-700 text-[#fe6d12] hover:bg-gray-800 hover:text-white cursor-pointer'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-800"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.title} - Brandmic Media ${project.category} project`}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href="#contact">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="gap-2 cursor-pointer"
                        aria-label={`Discuss a project like ${project.title}`}
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#fe6d12] font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}