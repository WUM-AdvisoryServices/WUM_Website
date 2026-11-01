import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import wumLogo from '../assets/images/wum_logo.png';

interface NavLinkItem {
  name: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Programmes', href: '/programmes' },
  { name: 'Projects & CRIT', href: '/projects' },
  { name: 'Knowledge', href: '/knowledge' },
  { name: 'Partnerships', href: '/partnerships' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E2E8F0]'
          : 'bg-white border-b border-[#E2E8F0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Official Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group shrink-0"
            aria-label="WUM Advisory Services Home"
          >
            <div className="h-12 w-auto flex items-center justify-center p-0.5 bg-white rounded-lg">
              <img
                src={wumLogo}
                alt="WUM Advisory Services Official Logo"
                className="h-11 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-bold text-lg text-[#10243A] tracking-tight group-hover:text-[#087F8C] transition-colors leading-none">
                WUM Advisory
              </span>
              <span className="text-[10px] font-medium tracking-wide uppercase text-[#64748B] mt-1">
                Services (SMC-Private) Limited
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-[#172B3A]"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap shrink-0 relative ${
                    active
                      ? 'text-[#087F8C] font-semibold bg-[#087F8C]/5'
                      : 'text-[#172B3A] hover:text-[#087F8C] hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#087F8C]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] transition-colors shadow-xs"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#10243A] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-20 z-50 bg-[#10243A]/40 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 top-20 w-full max-w-sm bg-white p-6 shadow-xl border-l border-[#E2E8F0] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100">
              <img
                src={wumLogo}
                alt="WUM Advisory Services Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <p className="font-heading font-bold text-sm text-[#10243A]">WUM Advisory Services</p>
                <p className="text-[10px] text-[#64748B]">(SMC-Private) Limited</p>
              </div>
            </div>

            <div className="space-y-1 mb-6">
              {navLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? 'text-[#087F8C] bg-[#087F8C]/10 font-semibold'
                        : 'text-[#172B3A] hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
              <Link
                to="/partnerships"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#10243A] hover:bg-[#087F8C] transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/crit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#087F8C] bg-[#087F8C]/10 hover:bg-[#087F8C]/20 transition-colors"
              >
                <span>Explore CRIT Toolkit</span>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-xs text-[#64748B]">
              <p className="font-medium text-[#10243A]">Founder & Director: Waqas Umer Malik</p>
              <p className="mt-1">Empowering through sustainable practices</p>
              <p className="mt-2 text-[11px] text-slate-400">Headquartered in Pakistan · Global Cause Support</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
