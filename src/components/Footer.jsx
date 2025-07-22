import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-white bg-black overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h3 className="text-2xl font-bold mb-3">AI.Risezonic</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Shaping the future with AI-driven learning and innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "AI Solutions", path: "/ai-solution-and-product" },
                { name: "Contact", path: "/contact" },
                { name: "Blog", path: "/blogs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-white/80" />
                <span>info@risezonic.com</span>
              </div>
              <div className="flex items-start gap-2">
                <FaPhone className="mt-1 text-white/80" />
                <span>+91 8178857250</span>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-white/80" />
                <span>
                  RZ11/D, Upper Ground Floor, Opp. Palam Metro Gate 3,<br />
                  Palam Dwarka Road, Delhi, 110045
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-white/80" />
                <span>
                  Awfis, 7th Floor, Gate 3 & 4, Ambience Island,<br />
                  DLF Phase 3, NH-8, Gurugram, Haryana 122002
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
            <div className="flex flex-wrap gap-4">
              <Link
                to="https://www.facebook.com/risezonicofficial/"
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://in.pinterest.com/risezonicllp/"
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaPinterest />
              </Link>
              <Link
                to="https://www.instagram.com/risezonicofficial/"
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://in.linkedin.com/company/risezonic"
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center space-y-1">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Risezonic Group. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Powered by Risezonic & Reviving India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
