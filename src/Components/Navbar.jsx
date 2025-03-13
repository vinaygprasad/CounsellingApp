import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../Assets/NKLogo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#E8DDC6] text-[#1D3C34] shadow-lg py-2 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-[#3A4D39]">
          <img src={logo} alt="NK" className="h-18 w-18 object-contain" />
          <span>Nandhana Krishna</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-lg text-[#5B5438] font-medium">
          <Link to="/" className="hover:text-[#1D3C34]">Home</Link>
          <Link to="/about" className="hover:text-[#1D3C34]">About</Link>
          <Link to="/book" className="hover:text-[#1D3C34]">Book a Session</Link>
          <Link to="/contact" className="hover:text-[#1D3C34]">Contact</Link>
          <Link to="/" className="hover:text-[#1D3C34]">Admin</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#3A4D39]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 py-6 text-lg font-medium text-[#5B5438] bg-[#E8DDC6] w-full px-8">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/book" onClick={() => setIsOpen(false)}>Book a Session</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/" onClick={() => setIsOpen(false)}>Admin</Link>
        </div>
      )}
    </nav>
  );
}
