
import chatHeartSticker from "../assets/chat_heart.png"; // Import the provided sticker image
import likeHeartSticker from "../assets/like_heart.png"; // Import the provided like/heart image

// Placeholder avatar and icon images (replace with actual assets as needed)
const avatars = [
  { src: "https://randomuser.me/api/portraits/men/1.jpg", alt: "User 1", style: "top-6 left-[30%]" },
  { src: "https://randomuser.me/api/portraits/men/2.jpg", alt: "User 2", style: "top-6 right-[30%]" },
  { src: "https://randomuser.me/api/portraits/men/3.jpg", alt: "User 3", style: "left-16 top-1/2 -translate-y-1/2" },
  { src: "https://randomuser.me/api/portraits/men/4.jpg", alt: "User 4", style: "right-16 top-1/2 -translate-y-1/2" },
  { src: "https://randomuser.me/api/portraits/men/5.jpg", alt: "User 5", style: "bottom-6 left-[30%]" },
  { src: "https://randomuser.me/api/portraits/men/6.jpg", alt: "User 6", style: "bottom-6 right-[30%]" },
];

const icons = [
  { icon: "⭐️👍", style: "top-16 left-1/2 -translate-x-1/2" },
  { icon: <img src={likeHeartSticker} alt="Like Heart Sticker" className="w-14 h-14" />, style: "absolute right-[24%] bottom-32" },
  { icon: "🏆", style: "bottom-16 left-1/2 -translate-x-1/2" },
  { icon: <img src={chatHeartSticker} alt="Chat Heart Sticker" className="w-14 h-14" />, style: "absolute left-[24%] bottom-32" },
];

const Task1 = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-gradient-to-br from-white to-green-50 rounded-2xl overflow-hidden">
      {/* Avatars */}
      {avatars.map((avatar, idx) => (
        <img
          key={idx}
          src={avatar.src}
          alt={avatar.alt}
          className={`absolute w-20 h-20 rounded-xl object-cover shadow-lg ${avatar.style}`}
        />
      ))}
      {/* Icons */}
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className={`absolute text-3xl md:text-4xl select-none ${icon.style}`}
        >
          {icon.icon}
        </div>
      ))}
      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-lg md:text-xl text-gray-700 mb-2">Hear How They Level Up Their Game!</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-1">
          Skill <span className="text-green-600">Masters</span> Unite! <span className="inline-block">🤝</span>
        </h2>
        <button className="mt-2 px-6 py-2 bg-white text-black font-semibold rounded-full shadow border border-gray-200 hover:bg-gray-50 transition">
          View all Testimonials <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
};

export default Task1; 