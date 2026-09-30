import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import logo from 'figma:asset/b7a953c6c59406e55ecfa581d7896ceedbc69903.png';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Client FAQs', href: '#faq' }
  ],
  support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Direct Email', href: 'mailto:brandmicmedia@gmail.com' },
    { label: 'Call Studio', href: 'tel:+918940830052' },
    { label: 'Padappai, Tamil Nadu', href: '#contact' }
  ],
  services: [
    { label: 'Brand Design', href: '#services' },
    { label: 'Logo Design', href: '#services' },
    { label: 'Video Editing', href: '#services' },
    { label: 'Digital Marketing', href: '#services' }
  ]
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/brandmic_media/', label: 'Brandmic Media on Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" aria-label="Brandmic Media Home">
              <img
                src={logo}
                alt="Brandmic Media - Creative Branding Studio Logo"
                width="150"
                height="36"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
            </a>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-sm">
              Brandmic Media is a creative branding studio and digital marketing agency based in Padappai, Tamil Nadu, helping ambitious brands grow through compelling visual storytelling.
            </p>
            <div className="text-sm text-gray-400 mb-6 space-y-1">
              <p>📍 Padappai, Tamil Nadu 601301, India</p>
              <p>📞 <a href="tel:+918940830052" className="hover:text-[#fe6d12] transition-colors">+91 89408 30052</a></p>
              <p>✉️ <a href="mailto:brandmicmedia@gmail.com" className="hover:text-[#fe6d12] transition-colors">brandmicmedia@gmail.com</a></p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#fe6d12] text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#fe6d12] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#fe6d12] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#fe6d12] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Brandmic Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="text-gray-400 hover:text-[#fe6d12] transition-colors">
                About Studio
              </a>
              <a href="#services" className="text-gray-400 hover:text-[#fe6d12] transition-colors">
                Our Services
              </a>
              <a href="#faq" className="text-gray-400 hover:text-[#fe6d12] transition-colors">
                FAQs
              </a>
              <a href="#contact" className="text-gray-400 hover:text-[#fe6d12] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
