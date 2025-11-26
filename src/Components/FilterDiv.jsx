import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function FilterDiv() {
  const [showBrand, setShowBrand] = useState(true);
  const [showRam, setShowRam] = useState(true);
  const [brandSearch, setBrandSearch] = useState("");

  const brands = ["Apple", "Google", "MOTOROLA", "vivo", "OPPO", "Infinix"];
  const ramOptions = ["4 GB", "3 GB", "2 GB", "1GB and Below"];

  return (
    <section className="m-2 basis-1/4 bg-white shadow-sm h-fit sticky top-20">
      {/* Header */}
      <div className="flex justify-between items-center py-3 px-4 border-b border-gray-300">
        <span className="font-semibold text-lg">Filters</span>
        <span className="text-sm font-semibold text-pink-500 cursor-pointer">CLEAR ALL</span>
      </div>

      {/* Category */}
      <div className="px-4 py-3 border-b border-gray-300">
        <span className="font-semibold text-sm text-gray-700">CATEGORIES</span>
        <div className="flex flex-col mt-2 text-sm">
          <span className="text-gray-500 text-sm">{'<'} Mobiles & Accessories</span>
          <span className="ml-3 font-medium">Mobiles</span>
        </div>
      </div>

      {/* BRAND SECTION */}
      <div className="px-4 py-3 border-b border-gray-300">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShowBrand(!showBrand)}
        >
          <span className="font-semibold">BRAND</span>
          <FontAwesomeIcon icon={showBrand ? faChevronUp : faChevronDown} />
        </div>

        {showBrand && (
          <>
            {/* Search Box */}
            <div className="relative mt-3">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search Brand"
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
                className="w-full border-b pl-8 pb-1 outline-none"
              />
            </div>

            {/* Brand options */}
            <div className="mt-3 flex flex-col gap-2 text-sm">
              {brands
                .filter((b) =>
                  b.toLowerCase().includes(brandSearch.toLowerCase())
                )
                .map((brand, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{brand}</span>
                  </label>
                ))}
              <span className="text-pink-500 text-sm cursor-pointer">
                136 MORE
              </span>
            </div>
          </>
        )}
      </div>

      {/* RAM SECTION */}
      <div className="px-4 py-3 border-b border-gray-300">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShowRam(!showRam)}
        >
          <span className="font-semibold">Sort</span>
          <FontAwesomeIcon icon={showRam ? faChevronUp : faChevronDown} />
        </div>

        {showRam && (
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {ramOptions.map((ram, index) => (
              <label key={index} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="h-4 w-4" />
                <span>{ram}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}






























