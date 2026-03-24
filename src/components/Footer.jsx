import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: 'home' },
        { name: 'About', href: 'about' },
        { name: 'Skills', href: 'skills' },
        { name: 'Projects', href: 'projects' },
      ],
    },
    {
      title: 'More',
      links: [
        { name: 'Experience', href: 'experience' },
        { name: 'Achievements', href: 'achievements' },
        { name: 'Contact', href: 'contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/VinaySinghal1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vinay-singhal-b122a8241/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:vinaysinghal7976@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (href) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-dark border-t border-gray-800">
      <div className="container-custom px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-2xl font-display font-bold text-white inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Vinay Singhal<span className="text-accent">.</span>
            </motion.a>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Aspiring Data Analyst and Machine Learning enthusiast passionate about 
              transforming data into actionable insights. Let's build something amazing together.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} Vinay Singhal. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
              and lots of coffee
            </p>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
