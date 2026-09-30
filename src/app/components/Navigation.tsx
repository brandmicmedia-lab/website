import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/b7a953c6c59406e55ecfa581d7896ceedbc69903.png';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2" aria-label="Brandmic Media Home">
            <img
              src={logo}
              alt="Brandmic Media - Creative Branding Studio Logo"
              width="150"
              height="36"
              className="h-9 w-auto object-contain"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[#fe6d12] transition-colors font-medium text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact">
              <Button 
                className="bg-[#fe6d12] hover:bg-[#e85f00] text-white cursor-pointer"
              >
                Get Started
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <nav aria-label="Mobile Navigation" className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-[#fe6d12] hover:bg-gray-800 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block">
                <Button 
                  className="w-full bg-[#fe6d12] hover:bg-[#e85f00] text-white"
                >
                  Get Started
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}