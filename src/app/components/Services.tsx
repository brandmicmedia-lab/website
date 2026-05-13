import { Palette, Code, Megaphone, BarChart3, Smartphone, Zap } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Create memorable brand identities that resonate with your audience and stand out in the market.',
    color: 'bg-pink-50 text-[#fe6d12]'
  },
  {
    icon: Code,
    title: 'LOGO Design',
    description: 'Create a memorable logo that represents your brand and resonates with your audience.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Grow your online presence with strategic marketing campaigns that drive real results.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Script Writing',
    description: 'Craft compelling scripts for videos, ads, and presentations that captivate your audience.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Smartphone,
    title: 'Video Editing',
    description: 'Create engaging video content that tells your story and connects with your audience.',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: Zap,
    title: 'Creative Content Strategy',
    description: 'Develop innovative strategies that align with your business goals and market opportunities.',
    color: 'bg-yellow-50 text-yellow-600'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-pink-900/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#fe6d12]">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-400">
            Comprehensive digital solutions tailored to elevate your business and achieve your goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-800 bg-gray-800"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}