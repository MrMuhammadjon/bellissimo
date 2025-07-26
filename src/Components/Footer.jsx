import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#262a2c] text-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo & Call Section */}
        <div className="border-b border-gray-700 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            className="w-48 md:w-64"
            src="https://bellissimo.uz/_next/image?url=%2Fimages%2Flogo-footer-new.png&w=640&q=75" 
            alt="Bellissimo Logo" 
          />
          <div className="text-center md:text-right">
            <p className="text-sm md:text-base text-gray-300">Raqamga qo‘ng‘iroq qiling</p>
            <a 
              href="tel:1174" 
              className="inline-block mt-2 text-2xl font-bold text-white hover:text-red-400 transition duration-200"
            >
              1174
            </a>
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">Biz haqimizda</h3>
            <ul className="space-y-2">
              {["Ommaviy oferta", "Maxfiylik siyosati", "Halol sertifikati"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">Biz bilan bog‘lanish</h3>
            <ul className="space-y-2">
              {["Bizning ish o‘rinlarimiz", "Franshiza", "Bizni kuzatib boring"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
          <p>© {new Date().getFullYear()} Bellissimo Pizza. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
