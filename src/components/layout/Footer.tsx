
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Golam-Tawhid" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/g-t-fahad" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Email", icon: Mail, href: "mailto:contact@example.com" },
  ];

  return (
    <footer className="bg-secondary py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Golam Tawhid</h3>
            <p className="text-muted-foreground">
              Passionate software developer creating elegant solutions to complex problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Golam Tawhid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
