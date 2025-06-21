import { Facebook, Linkedin, Youtube, X } from 'lucide-react';
import { Link } from 'react-router';
import ProFastLogo from '../ProFastLogo/ProFastLogo';

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-white px-4 py-10 rounded-3xl">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                {/* Logo and Description */}
                <div className='flex flex-col items-center'>
                    <div><ProFastLogo></ProFastLogo></div>
                    <p className="text-sm mt-2 text-gray-300">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br />
                        business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <Link to="/services" className="hover:text-white">Services</Link>
                    <Link to="/coverage" className="hover:text-white">Coverage</Link>
                    <Link to="/about" className="hover:text-white">About Us</Link>
                    <Link to="/pricing" className="hover:text-white">Pricing</Link>
                    <Link to="/blog" className="hover:text-white">Blog</Link>
                    <Link to="/contact" className="hover:text-white">Contact</Link>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 text-white">
                    <a href="#" className="bg-[#1d1d1d] p-2 rounded-full hover:bg-blue-600 transition">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="bg-[#1d1d1d] p-2 rounded-full hover:bg-gray-700 transition">
                        <X size={20} />
                    </a>
                    <a href="#" className="bg-[#1d1d1d] p-2 rounded-full hover:bg-blue-500 transition">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="bg-[#1d1d1d] p-2 rounded-full hover:bg-red-600 transition">
                        <Youtube size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
