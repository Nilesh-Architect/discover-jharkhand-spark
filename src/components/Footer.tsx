import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "About Jharkhand", path: "/" },
      { name: "Destinations", path: "/attractions" },
      { name: "Plan Your Trip", path: "/itinerary" },
      { name: "Events & Festivals", path: "/events" },
    ],
    "Travel Info": [
      { name: "Where to Stay", path: "/accommodation" },
      { name: "Transportation", path: "/" },
      { name: "Travel Guidelines", path: "/" },
      { name: "Emergency Services", path: "/" },
    ],
    Resources: [
      { name: "Travel Stories", path: "/" },
      { name: "Photo Gallery", path: "/" },
      { name: "Virtual Tours", path: "/" },
      { name: "Download Brochure", path: "/" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Youtube, url: "#", label: "YouTube" },
    { icon: Twitter, url: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Discover <span className="text-primary">Jharkhand</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Explore the natural beauty, rich culture, and vibrant heritage of Jharkhand. 
              Your gateway to unforgettable experiences.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                tourism@jharkhand.gov.in
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 1800-XXX-XXXX
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jharkhand Tourism. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
