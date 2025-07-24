import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#262a2c] text-white pt-15 pb-6 px-4 md:px-8">
      {/* Top Section */}
      <div className="w-[80%] mx-auto">
        <div className="border-b border-gray-700 pb-6 mb-6">
          <img className='w-[100%] m-auto' src="https://bellissimo.uz/_next/image?url=%2Fimages%2Flogo-footer-new.png&w=640&q=75" alt="" />
          <div className="mt-4">
            <p className="text-sm md:text-base text-gray-300">RAGAMGA GO'NG'IROG QILING</p>
            <a 
              href="tel:1174" 
              className="inline-block mt-2 text-xl md:text-2xl font-semibold hover:text-red-400 transition-colors"
            >
              1174
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* First Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Biz haqimizda</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Ommaviy oferta
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Maxfiylik siyosati
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Halol sertifikati
                </a>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Biz bilan bog'lanish</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Bizning ish o'rinlarimiz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Franshiza
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Bizni kuzatib boring
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400 pt-4 border-t border-gray-700">
          <p>© {new Date().getFullYear()} Bellissimo Pizza. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;