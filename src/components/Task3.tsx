

const courseIcons = [
  // Replace these with your actual course icon imports
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
  { src: "https://img.icons8.com/color/48/000000/hashtag-large.png", alt: "Hashtag" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", alt: "VueJS" },
  { src: "https://img.icons8.com/color/48/000000/ball-point-pen.png", alt: "Pen" },
];

const Task3 = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 bg-white">
      {/* Top Text Section */}
      <div className="w-full max-w-5xl mb-8 px-4">
        <p className="text-lg md:text-xl text-gray-700">Explore our classes and master trending skills!</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          <span className="text-black">Dive Into </span>
          <span className="text-green-600">What’s Hot Right Now!</span>
          <span className="ml-1">🔥</span>
        </h2>
      </div>
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl px-4">
        {/* All Courses Card */}
        <div className="flex-1 bg-[#D13B4A] rounded-3xl p-4 md:p-8 relative flex flex-col min-h-[340px] justify-between w-full">
          {/* Floating Course Icons */}
          <div className="flex flex-row gap-4 absolute left-4 md:left-8 top-4 md:top-8">
            {courseIcons.map((icon, idx) => (
              <img key={idx} src={icon.src} alt={icon.alt} className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/20 p-2" />
            ))}
          </div>
          {/* View all Courses */}
          <div className="absolute top-4 md:top-8 right-4 md:right-8 text-white/90 font-semibold cursor-pointer text-xs md:text-sm flex items-center gap-1">
            View all Courses <span className="ml-1">→</span>
          </div>
          {/* Main Content */}
          <div className="flex flex-col justify-end h-full pt-20">
            <div className="flex items-end gap-2">
              <span className="text-[56px] md:text-[90px] leading-none font-extrabold text-white">23</span>
              <sup className="text-xl md:text-3xl font-bold text-white mb-3 ml-1 align-super">+</sup>
            </div>
            <div className="text-xl md:text-2xl font-bold text-white">All Courses</div>
            <div className="text-white/90 mt-2 text-sm md:text-base">courses you're powering through right now.</div>
          </div>
        </div>
        {/* Upcoming Courses Card */}
        <div className="w-full md:w-56 bg-[#FCEBED] rounded-3xl flex flex-col items-center justify-end py-5 relative h-[340px] overflow-hidden">
          {/* Vertical text above the number */}
          <div className="flex flex-col items-center rotate-[-90deg] mb-4 px-2 max-w-[120px]">
            <div className="text-[#D13B4A] text-2xl font-bold  mr-4">Upcoming Courses</div>
            <div className="text-[#D13B4A] text-base font-normal text-center mt-0.5 break-words">
              exciting new courses waiting to boost your skills.
            </div>
          </div>
          {/* Number and plus at the bottom */}
          <div className="flex flex-row items-end justify-center  flex-1 mb-2">
            <span className="text-[56px] md:text-[70px] leading-none font-extrabold text-[#D13B4A]">05</span>
            <sup className="text-xl font-bold text-[#D13B4A] mb-3 ml-1 align-super">+</sup>
          </div>
        </div>
        {/* Ongoing Courses Card */}
        <div className="w-full md:w-56 bg-[#FCEBED] rounded-3xl flex flex-col items-center justify-end py-5 relative h-[340px] overflow-hidden">
          {/* Vertical text above the number */}
          <div className="flex flex-col items-center rotate-[-90deg] mb-4 px-2 max-w-[120px]">
            <div className="text-[#D13B4A] text-2xl font-bold  mr-4">Ongoing Courses</div>
            <div className="text-[#D13B4A] text-base font-normal text-center mt-0.5 break-words">
              currently happening—don't miss out on the action!
            </div>
          </div>
          {/* Number and plus at the bottom */}
          <div className="flex flex-row items-end justify-center  flex-1 mb-2">
            <span className="text-[56px] md:text-[70px] leading-none font-extrabold text-[#D13B4A]">10</span>
            <sup className="text-xl font-bold text-[#D13B4A] mb-3 ml-1 align-super">+</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task3; 