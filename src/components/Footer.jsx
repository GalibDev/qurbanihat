import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">QurbaniHat</h2>
          <p className="text-green-100">
            A modern livestock booking platform for finding healthy Qurbani
            animals easily and safely.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
          <p>Email: support@qurbanihat.com</p>
          <p>Phone: +880 1700-000000</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-green-200 mt-8 text-sm">
        © 2026 QurbaniHat. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;