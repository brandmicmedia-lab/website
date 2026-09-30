import { Card } from './ui/card';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Sairam Srinivasan',
    role: 'Founder, Three Dots Software Development',
    image: 'https://cdn-icons-png.flaticon.com/512/8345/8345328.png?w=200&h=200&fit=crop',
    content: 'Brandmic media transformed our brand identity completely. Their creative approach and attention to detail exceeded all our expectations. Highly recommended!',
    rating: 5
  },
  {
    name: 'Lokesh S',
    role: 'Founder',
    image: 'https://cdn-icons-png.flaticon.com/512/8345/8345328.png?w=200&h=200&fit=crop',
    content: 'Working with Brandmic media was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and the results have been outstanding.',
    rating: 5
  },
  {
    name: 'Ramesh Kumar',
    role: 'Marketing Director',
    image: 'https://cdn-icons-png.flaticon.com/512/8345/8345328.png?w=200&h=200&fit=crop',
    content: 'The team at Brandmic media is incredibly talented and professional. Our app launch was a huge success thanks to their innovative design and marketing strategy.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gray-800 rounded-full mb-4 shadow-sm border border-gray-700">
            <span className="text-sm font-semibold text-[#fe6d12] tracking-wide uppercase">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Our Clients Say: Real Feedback &amp; Reviews
          </h2>
          <p className="text-xl text-gray-400">
            Don't just take our word for it — explore verified feedback from brands we've helped launch and grow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label={`${testimonial.rating} star rating`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fe6d12] text-[#fe6d12]" aria-hidden="true" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={`Client review by ${testimonial.name}, ${testimonial.role}`}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}