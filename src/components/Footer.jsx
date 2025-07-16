import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-90 " />

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h3 className="text-2xl font-bold mb-2">AI.Risezonic</h3>
            <p className="text-sm text-gray-200">
              Shaping the future with AI-driven learning and innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/ai-solution-and-product"
                  className="hover:text-white transition"
                >
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-300">📧 info@risezonic.com</p>
            <p className="text-sm text-gray-300">📞 +91 8178857250</p>
            <p className="text-sm text-gray-300">
              📍 Risezonic : RZ11/D, Upper Ground Floor Opposite Palam Metro
              Station Gate No 3, Palam Dwarka Road, Delhi, 110045
            </p>
            <p className="text-sm text-gray-300">
              📍 Risezonic - Awfis, 07th Floor, Gate No 3 & 4, Ambience Island
              DLF Phase 3, NH-8, Gurugram, Haryana 122002
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                to="https://www.facebook.com/risezonicofficial/"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                target="_blank"
                to="https://in.pinterest.com/risezonicllp/"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <FaPinterest />
              </Link>
              <Link
                target="_blank"
                to="https://www.instagram.com/risezonicofficial/"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <FaInstagram />
              </Link>
              <Link
                target="_blank"
                to="https://in.linkedin.com/company/risezonic"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Risezonic Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
