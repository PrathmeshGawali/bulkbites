'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md shadow-lg rounded-xl w-[90%] max-w-4xl px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <div className=" rounded-lg">
            <Image src="/logo.png" alt="Logo" width={70} height={70} />
          </div>
        </Link>

        {/* Middle: Links */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link href="/#features" className="hover:text-black transition">Features</Link>
          <Link href="/#how" className="hover:text-black transition">How it Works</Link>
          <Link href="/#contact" className="hover:text-black transition">Contact</Link>
        </div>

        {/* Right: Download button */}
        <Link
          href=" https://expo.dev/artifacts/eas/m1YfrsowqtzqPTQMergtoo.apk"
          className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          Download
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;