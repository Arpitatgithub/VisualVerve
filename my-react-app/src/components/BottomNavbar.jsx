import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const BottomNav = () => {
  const [showButton, setShowButton] = useState(false);

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll-to-top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 left-6 bg-black text-white p-3 rounded-lg shadow-md z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Bottom nav */}
      <div className="fixed bottom-4 right-4 bg-neutral-800 text-white rounded-xl px-4 py-2 flex items-center gap-2 z-50 shadow-md">
        <div className="px-3 py-2 rounded-lg bg-black font-bold">W.</div>
        <Link
          to="/"
          className="px-3 py-2 rounded-lg hover:bg-neutral-700 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="px-3 py-2 rounded-lg hover:bg-neutral-700 transition"
        >
          About
        </Link>
        <Link
          to="/services"
          className="px-3 py-2 rounded-lg hover:bg-neutral-700 transition"
        >
          Services
        </Link>
        <button className="px-3 py-2 bg-gray-200 text-black rounded-lg font-semibold">
          Visit Sotd.
        </button>
      </div>
    </>
  );
};

export default BottomNav;
