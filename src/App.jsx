import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";
import "./App.css";

// --- Your Travels Data (unchanged) ---
const travels = [
  {
    id: 1,
    name: "Boracay",
    desc: "White Beach and nightlife.",
    story:
      "Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports Boracay is an island located in the Northwest part of Panay Island and is part of the province Aklan. Along the west coast is a laid back beach filled with restaurants and a calm beach. The east coast on the other hand has strong winds that makes Bulabog beach a hub for water sports.",
    img: "public/sample/boracay.jpg",
    photos: ["public/sample/boracay1.jpg", "public/sample/boracay2.jpg"],
  },
  {
    id: 2,
    name: "Palawan",
    desc: "El Nido’s lagoons and beaches.",
    story:
      "Exploring El Nido’s hidden lagoons was magical — crystal clear waters and towering limestone cliffs.",
    img: "public/sample/palawan.jpg",
    photos: ["public/sample/palawan1.jpg", "public/sample/palawan2.jpg"],
  },
  {
    id: 3,
    name: "Cebu",
    desc: "Whale sharks and Kawasan Falls.",
    story:
      "Swimming with whale sharks and trekking to Kawasan Falls was unforgettable in Cebu.",
    img: "public/sample/cebu.jpg",
    photos: ["public/sample/cebu1.jpg", "public/sample/cebu2.jpg"],
  },
  {
    id: 4,
    name: "Bohol",
    desc: "Chocolate Hills & Panglao Island.",
    story:
      "The Chocolate Hills are a sight to behold, and Panglao’s beaches were peaceful and pristine.",
    img: "public/sample/bohol.jpg",
    photos: ["public/sample/bohol1.jpg", "public/sample/bohol2.jpg"],
  },
  {
    id: 5,
    name: "Siargao",
    desc: "Surfing capital of the Philippines.",
    story:
      "Learning to surf in Siargao was thrilling, and the island vibe was laid-back and welcoming.",
    img: "public/sample/siargao.jpg",
    photos: ["public/sample/siargao1.jpg", "public/sample/siargao2.jpg"],
  },
  {
    id: 6,
    name: "Davao",
    desc: "Mt. Apo and Durian capital.",
    story:
      "Climbing Mt. Apo challenged me physically, and I also tasted durian for the first time!",
    img: "public/sample/davao.jpg",
    photos: ["public/sample/davao1.jpg", "public/sample/davao2.jpg"],
  },
  {
    id: 7,
    name: "Vigan",
    desc: "Spanish colonial streets.",
    story:
      "Walking along Calle Crisologo felt like stepping back in time with its Spanish colonial charm.",
    img: "public/sample/vigan.jpg",
    photos: ["public/sample/vigan1.jpg", "public/sample/vigan2.jpg"],
  },
  {
    id: 8,
    name: "Baguio",
    desc: "Cool highlands and strawberries.",
    story:
      "The cool weather, pine trees, and fresh strawberries made Baguio such a refreshing trip.",
    img: "public/sample/baguio.jpg",
    photos: ["public/sample/baguio1.jpg", "public/sample/baguio2.jpg"],
  },
  {
    id: 9,
    name: "Coron",
    desc: "Shipwreck diving and lagoons.",
    story:
      "Diving among shipwrecks in Coron was surreal, and the lagoons were unbelievably beautiful.",
    img: "public/sample/coron.jpg",
    photos: ["public/sample/coron1.jpg", "public/sample/coron2.jpg"],
  },
  {
    id: 10,
    name: "Camiguin",
    desc: "White Island and hot springs.",
    story:
      "Camiguin offered both relaxation and adventure with its White Island and hot springs.",
    img: "public/sample/camiguin.jpg",
    photos: ["public/sample/camiguin1.jpg", "public/sample/camiguin2.jpg"],
  },
  {
    id: 11,
    name: "Zambales",
    desc: "Anawangin Cove & surfing.",
    story:
      "Camping at Anawangin Cove and catching waves was an amazing Zambales experience.",
    img: "public/sample/zambales.jpg",
    photos: ["public/sample/zambales1.jpg", "public/sample/zambales2.jpg"],
  },
  {
    id: 12,
    name: "Batangas",
    desc: "Diving spots and Taal Volcano.",
    story:
      "Diving in Batangas was breathtaking, and seeing Taal Volcano up close was unforgettable.",
    img: "public/sample/batangas.jpg",
    photos: ["public/sample/batangas1.jpg", "public/sample/batangas2.jpg"],
  },
];

export default function App() {
  // --- State Hooks ---
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Contact Bubble states
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const perPage = 6;

  // --- Filtering + Pagination ---
  const filteredTravels = travels.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredTravels.length / perPage);
  const start = (page - 1) * perPage;
  const paginatedTravels = filteredTravels.slice(start, start + perPage);

  // --- Photo navigation ---
  const nextPhoto = () => {
    if (selectedTravel) {
      setPhotoIndex((i) => (i + 1) % selectedTravel.photos.length);
    }
  };
  const prevPhoto = () => {
    if (selectedTravel) {
      setPhotoIndex(
        (i) =>
          (i - 1 + selectedTravel.photos.length) % selectedTravel.photos.length
      );
    }
  };

  // --- Handle EmailJS form submit ---
  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7clsdel", // Your EmailJS Service ID
        "template_rrxn6k5", // Your EmailJS Template ID
        {
          from_name: name,
          message: message,
        },
        "gyCopgvHSFxdcNkcy" // Your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setName("");
          setMessage("");

          // Clear the status after 5 seconds
          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        () => {
          setStatus("Failed to send message. Try again.");

          // Clear the error message after 3 seconds as well
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };
  // For swipe gesture
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const minSwipeDistance = 50; // adjust sensitivity
  const onTouchStart = (e) => {
    setTouchEnd(0); // reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      nextPhoto(); // swipe left
    } else if (distance < -minSwipeDistance) {
      prevPhoto(); // swipe right
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevPhoto();
      } else if (e.key === "ArrowRight") {
        nextPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photoIndex, selectedTravel]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-300 to-yellow-200 flex flex-col">
      {/* --- Navigation Bar --- */}
      <nav className="fixed top-0 left-0 w-full bg-teal-700 text-white shadow-md z-50">
        <div className="flex justify-between items-center px-6 py-5">
          <div className="flex items-center space-x-3">
            {/* Replace src with your uploaded logo */}
            <img
              src="/public/pilipinas.png"
              alt="Logo"
              className="h-10 w-10 rounded-full shadow-md"
            />
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Philippine Travels
              </span>
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-6 font-medium">
            <a href="#home" className="hover:text-yellow-300 transition">
              Home
            </a>
            <a href="#travels" className="hover:text-yellow-300 transition">
              Travels
            </a>
            <a href="#about" className="hover:text-yellow-300 transition">
              About
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded-md hover:bg-teal-600 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* --- Mobile Menu --- */}
        {menuOpen && (
          <div className="sm:hidden bg-teal-600 text-white flex flex-col space-y-4 py-6 px-6 animate-slideDown">
            <a
              href="#home"
              className="hover:text-yellow-300 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#travels"
              className="hover:text-yellow-300 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Travels
            </a>
            <a
              href="#about"
              className="hover:text-yellow-300 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </div>
        )}
      </nav>
      {/* --- Home Section with Tropical Animated Gradient --- */}
      <section
        id="home"
        className="relative text-center flex items-center justify-center h-[80vh] px-6 tropical-bg"
      >
        {/* Stars */}
        <div className="stars">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Moon Reflection */}
        <div className="moon-reflection"></div>

        {/* Sand layer */}
        <div className="sand"></div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-2xl mx-auto text-white">
          <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Welcome to My Travel Journal
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            Discover my tropical adventures across the{" "}
            <span className="text-yellow-300 font-semibold">Philippines</span>.
          </p>

          <a
            href="#travels"
            className="mt-8 inline-block px-6 py-3 bg-yellow-400 text-teal-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            🌴 Explore My Travels
          </a>
        </div>
      </section>

      {/* --- Travels Section --- */}
      <section
        id="travels"
        className="relative py-16 px-6 bg-gradient-to-b from-sky-100 via-teal-50 to-yellow-50"
      >
        {/* Decorative Background Accents */}
        <div className="absolute top-10 left-10 text-6xl opacity-10">🌴</div>
        <div className="absolute bottom-16 right-12 text-7xl opacity-10">
          🌊
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-800 drop-shadow-md">
            My Tropical Travels
          </h2>
          <p className="mt-3 text-lg text-yellow-500 font-medium">
            Explore sun, sea, and stories from the paradise islands
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-3/4 md:w-1/2">
              <input
                type="text"
                placeholder=" Search destinations..."
                className="w-full py-3 pl-12 pr-4 rounded-full shadow-lg bg-white/90 backdrop-blur 
                     border border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 
                     transition"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
              <span className="absolute left-4 top-3.5 text-teal-500">🔍</span>
            </div>
          </div>
        </div>

        {/* --- Travel Journal Detail Modal with Click-Outside-to-Close --- */}
        {selectedTravel ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
            onClick={() => {
              setSelectedTravel(null);
              setPhotoIndex(0);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gradient-to-br from-white/90 to-yellow-50/90 p-8 rounded-3xl shadow-2xl 
             max-w-6xl w-[95%] text-center border border-teal-200
             max-h-[95vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Destination Title */}
              <h3 className="text-3xl font-extrabold text-teal-700 mb-2">
                {selectedTravel.name}
              </h3>
              <p className="mb-6 text-yellow-600 italic">
                {selectedTravel.desc}
              </p>

              {/* Photo Carousel - Larger Version */}
              <div
                className="relative w-full h-[40rem] sm:h-[46rem] flex items-center justify-center"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <img
                  src={selectedTravel.photos[photoIndex]}
                  alt={`${selectedTravel.name} ${photoIndex + 1}`}
                  className="object-contain max-h-full max-w-full rounded-xl shadow-lg"
                />
              </div>

              {/* Prev / Next Buttons Below the Photo with Maximum Spacing */}
              <div className="mt-6 flex justify-between max-w-6xl mx-auto">
                <button
                  onClick={prevPhoto}
                  className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full shadow-lg 
               hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                  Prev
                </button>
                <button
                  onClick={nextPhoto}
                  className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full shadow-lg 
               hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                  Next
                </button>
              </div>

              {/* Dots */}
              <div className="mt-4 flex justify-center space-x-2">
                {selectedTravel.photos.map((_, i) => (
                  <span
                    key={i}
                    className={`w-3 h-3 rounded-full transition ${
                      i === photoIndex
                        ? "bg-yellow-500 scale-110"
                        : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>

              {/* Story */}
              <div className="mt-8 text-left">
                <h4 className="text-2xl font-bold text-teal-800 mb-3">
                  📖 My Story
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedTravel.story}
                </p>
              </div>

              {/* Back Button */}
              <button
                onClick={() => {
                  setSelectedTravel(null);
                  setPhotoIndex(0);
                }}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-teal-500 to-sky-500 text-white 
               font-semibold rounded-full shadow-lg hover:opacity-90 transition"
              >
                ← Back to Travels
              </button>
            </motion.div>
          </div>
        ) : (
          <>
            {/* Grid of Travel Cards or No Results */}
            {paginatedTravels.length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {paginatedTravels.map((travel) => (
                  <motion.div
                    key={travel.id}
                    className="bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer border border-teal-100"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedTravel(travel)}
                  >
                    <img
                      src={travel.img}
                      alt={travel.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-teal-800">
                        {travel.name}
                      </h2>
                      <p className="text-sm text-gray-600">{travel.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-2xl font-semibold text-gray-500">
                  ❌ No results found
                </p>
                <p className="text-gray-400 mt-2">
                  Try searching with another keyword.
                </p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-teal-600 text-white rounded-xl disabled:opacity-50"
              >
                Prev
              </button>
              <span className="px-4 py-2 font-bold">
                {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-teal-600 text-white rounded-xl disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </section>

      {/* --- About Section --- */}
      <section
        id="about"
        className="py-16 px-6 bg-gradient-to-b from-teal-50 to-teal-100"
      >
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center">
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-teal-900 mb-6">
            About Me
          </h2>

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="public/erwin1.jpg"
              alt="About Me"
              className="w-40 h-40 rounded-full object-cover border-4 border-teal-600 shadow-xl hover:scale-105 transform transition duration-300"
            />
          </div>

          {/* Intro Text */}
          <h3 className="mt-4 text-2xl font-semibold text-teal-800">
            Hi, I’m Erwin 👋
          </h3>
          <p className="text-gray-600 italic">
            Traveler • Explorer • Storyteller
          </p>

          {/* Description */}
          <p className="mt-6 text-gray-700 leading-relaxed">
            I’m a passionate traveler exploring the breathtaking tropical
            paradise of the Philippines. This website is my personal journal
            where I share{" "}
            <span className="font-semibold text-teal-700">
              photos, experiences, and travel stories
            </span>{" "}
            from every adventure. My goal is to inspire others to discover the
            hidden gems of the islands and embrace the journey.
          </p>
        </div>
      </section>

      {/* --- Footer with Social Media Icons --- */}
      <footer className="bg-teal-700 text-white py-6 text-center mt-auto">
        <p className="mb-4">Follow me on social media:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <Instagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <Linkedin />
          </a>
        </div>
        <p className="mt-4 text-sm">
          © 2025 My Travel Journal. All rights reserved.
        </p>
      </footer>
      {/* --- Floating Contact Bubble + Modal --- */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: [1.2, 0.9, 1] }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-6 right-6 bg-white text-black p-4 rounded-full shadow-lg hover:bg-yellow-300 z-[20]"
      >
        <Mail className="w-6 h-6" />
      </motion.button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-[20]">
          <div className="bg-yellow-100 backdrop-blur-md p-6 rounded-2xl shadow-lg w-80">
            <h3 className="text-xl font-bold text-teal-700 mb-4">Contact Me</h3>
            <form onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-lg mb-3 bg-white/80 backdrop-blur-sm"
                required
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border rounded-lg mb-3 bg-white/80 backdrop-blur-sm"
                rows="4"
                required
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg border border-gray-500 hover:bg-teal-800 transition"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-500 text-white bg-teal-600 hover:bg-teal-800 transition shadow-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
            {status && (
              <p className="mt-3 text-sm text-center text-teal-700">{status}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
