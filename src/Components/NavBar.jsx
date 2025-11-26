import React from "react";

function Navbar() {
  return (
    
        <nav className="w-full bg-white border-b shadow-sm fixed top-0 left-0">

    
        <div className="w-full flex items-center justify-between py-3 px-6">


        {/* LOGO */}
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-myntra-icon-svg-download-png-2249158.png?f=webp&w=512"
          alt="Logo"
          className="w-12"
        />

        {/* MENU ITEMS */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-sm text-gray-800">
          <li className="hover:text-pink-600 cursor-pointer">MEN</li>
          <li className="hover:text-pink-600 cursor-pointer">WOMEN</li>
          <li className="hover:text-pink-600 cursor-pointer">KIDS</li>
          <li className="hover:text-pink-600 cursor-pointer">HOME</li>
          <li className="hover:text-pink-600 cursor-pointer">BEAUTY</li>
          <li className="hover:text-pink-600 cursor-pointer">GENZ</li>
          <li className="flex items-center gap-1 hover:text-pink-600 cursor-pointer">
            STUDIO 
            <span className="text-xs text-pink-500 font-bold">NEW</span>
          </li>
        </ul>

        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-md w-1/3">
        <img src="https://img.icons8.com/ios-glyphs/50/search.png" className="text-gray-500 w-7 h-7"/>
          
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full bg-transparent outline-none ml-3 text-sm"
          />
        </div>

        {/* PROFILE / WISHLIST / BAG */}
        <div className="hidden md:flex items-center gap-6 text-center">

          <div className="cursor-pointer">
            <img src="https://img.icons8.com/pastel-glyph/100/person-male--v2.png" className="w-7 h-7"/>
            
            <p className="text-xs font-semibold">Profile</p>
          </div>

          <div className="cursor-pointer">
            <img src="https://img.icons8.com/windows/50/hearts.png" className="w-7 h-7"/>
           
            <p className="text-xs font-semibold">Wishlist</p>
          </div>

          <div className="cursor-pointer">
            <img src="https://img.icons8.com/forma-light/50/bag-front-view.png" className="w-7 h-7"/>
        
            <p className="text-xs font-semibold">Bag</p>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;








