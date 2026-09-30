import { Users, Award, Target, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'We focus on achieving measurable results that drive your business forward.'
  },
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'Your success is our priority. We build lasting partnerships based on trust.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in every project we undertake.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Great things happen when creative minds work together seamlessly.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc3Mjc4NzA5MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Brandmic Media creative team collaborating in studio on client visual identity and marketing campaigns"
                width={1080}
                height={720}
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#fe6d12]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-pink-900/30 rounded-full">
              <span className="text-sm font-semibold text-[#fe6d12] tracking-wide uppercase">ABOUT US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              We're A Creative Branding Studio Built on Direction &amp; Craft
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Brandmic Media is a creative media and advertising agency focused on helping brands grow through impactful visual content and digital storytelling.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Founded by passionate Visual Communication graduates, we specialize in creating engaging ads, promotional videos, reels, social media content, voice ads, and creative campaigns that connect brands with the right audience.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="text-4xl font-bold text-[#fe6d12] mb-2">1+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#fe6d12] mb-2">5+</div>
                <div className="text-gray-400">Team Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow bg-gray-800 border-gray-800"
                >
                  <div className="w-14 h-14 bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#fe6d12]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}