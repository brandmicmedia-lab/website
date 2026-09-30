import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from './ui/sonner';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'brandmicmedia@gmail.com',
    link: 'mailto:brandmicmedia@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 89408 30052',
    link: 'tel:+918940830052'
  },
  {
    icon: MapPin,
    title: 'Office',
    content: 'Padappai 601301,Tamilnadu,India.',
    link: '#'
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     try {

    await emailjs.send(
      'service_wp3jddg',
      'template_g2fisen',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject + "Enquiry from Brandmic Website",
        message: formData.message
      },
      'QWdXM8GjveLPTQ09E'
    );

    toast.success('Message sent successfully!', {
      description: "We'll get back to you within 24 hours."
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

  } catch (error) {

    toast.error('Failed to send message', {
      description: 'Please try again later.'
    });

    console.log(error);
  }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <Toaster />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-pink-900/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#fe6d12] tracking-wide uppercase">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Start A Project: Contact Brandmic Media
          </h2>
          <p className="text-xl text-gray-400">
            Ready to bring your brand vision to life? Contact our creative branding and digital marketing team today for a custom proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-gray-800 bg-gray-900 hover:bg-gray-800 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#fe6d12]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{info.title}</div>
                      <a
                        href={info.link}
                        aria-label={`${info.title}: ${info.content}`}
                        className="text-gray-400 hover:text-[#fe6d12] transition-colors text-sm"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* CTA Card */}
            {/* <Card className="p-8 bg-gradient-to-br from-[#fe6d12] to-purple-600 text-white border-none">
              <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6">
                Join 50+ satisfied clients who have transformed their businesses with us.
              </p>
              <Button
                variant="secondary"
                className="w-full bg-white text-[#fe6d12] hover:bg-gray-100"
              >
                Schedule a Call
              </Button>
            </Card> */}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-gray-800 bg-gray-800 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      autoComplete="name"
                      className="h-12 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      autoComplete="email"
                      className="h-12 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="h-12 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#fe6d12] hover:bg-[#e85f00] text-white gap-2 cursor-pointer"
                  aria-label="Send project inquiry message"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}