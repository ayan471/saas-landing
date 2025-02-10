import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center font-sans">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logo || "/placeholder.svg"}
            height={40}
            width={40}
            alt="SaaS logo"
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="#" className="hover:text-white transition-all">
            About
          </Link>
          <Link href="#" className="hover:text-white transition-all">
            Features
          </Link>
          <Link href="#" className="hover:text-white transition-all">
            Customers
          </Link>
          <Link href="#" className="hover:text-white transition-all">
            Pricing
          </Link>
          <Link href="#" className="hover:text-white transition-all">
            Help
          </Link>
          <Link href="#" className="hover:text-white transition-all">
            Careers
          </Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX className="w-6 h-6" />
          <SocialInsta className="w-6 h-6" />
          <SocialLinkedIn className="w-6 h-6" />
          <SocialPin className="w-6 h-6" />
          <SocialYoutube className="w-6 h-6" />
        </div>
        <p className="mt-6">
          &copy; 2025 All rights reserved.
          <br />
          <Link
            className="hover:text-white transition-all"
            href="https://github.com/ayan471/saas-landing"
          >
            Made with ❤️ by Ayan
          </Link>
        </p>
      </div>
    </footer>
  );
};
