
import {
  Rocket,
  
} from "lucide-react";
import clarityImage from "../assets/thinking.png"; // Adjust the path to your image
import learnImage from "../assets/learn.png"; // Import the image for the second box
import thirdImage from "../assets/third.png"; // Import the image for the third box
import lastImage from "../assets/last.png"; // Import the image for the fourth box

const Task2 = () => {
  return (
    <div className=" bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Your SkillShikshya Journey
        <br />
        <span className="text-green-600 font-bold">Step In.</span>{" "}
        <span className="text-gray-800 font-bold">Skill Up.</span>{" "}
        <span className="text-green-700 font-bold">Stand Out.</span>{" "}
        <Rocket className="inline w-5 h-5 text-purple-500 ml-1" />
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Start with Clarity - Updated with image on the left, overflowing the card */}
        <div className="bg-red-400 rounded-xl text-white p-6 pl-32 flex items-center relative overflow-visible min-h-[200px]">
          {/* Illustration on the left, overflowing the card */}
          <img
            src={clarityImage}
            alt="Clear learning path"
            className="absolute left-[-56px] top-1/2 -translate-y-1/2 w-36 md:w-44 drop-shadow-lg"
            style={{ zIndex: 2 }}
          />
          {/* Content on the right */}
          <div className="flex flex-col z-10 text-left w-full">
            {/* Heading and subtitle stacked and aligned left */}
            <div className="mb-2">
              <h3 className="text-3xl font-extrabold leading-tight">Start with Clarity</h3>
              <p className="text-xl font-semibold leading-snug mt-1">Step into a better learning path.</p>
            </div>
            <p className="text-base leading-relaxed font-normal">
              Overwhelmed by too many learning options? SkillShikshya provides a
              clear, curated roadmap from the start. Whether you're a beginner or
              upskilling, we have a path tailored to your growth.
            </p>
          </div>
        </div>

        {/* Learn by Doing - with image on the right, inside the card */}
        <div className="bg-sky-600 rounded-xl text-white p-6 flex flex-row items-center relative min-h-[200px]">
          {/* Content on the left */}
          <div className="flex flex-col z-10 text-left w-full pr-6">
            <div className="mb-2">
              <h3 className="text-2xl font-bold mb-1">Learn by Doing</h3>
              <p className="text-lg font-semibold mb-2">Practical skills, real projects.</p>
            </div>
            <p className="text-sm leading-relaxed">
              Theory is great, but action is better. At SkillShikshya, you learn
              by doing. Hands-on projects and real-world scenarios help you build,
              break, and create—leading to true mastery.
            </p>
          </div>
          {/* Illustration on the right, inside the card */}
          <img
            src={learnImage}
            alt="Learn by Doing"
            className="w-28 md:w-32 drop-shadow-lg"
            style={{ zIndex: 2 }}
          />
        </div>

        {/* Get Mentored & Supported - with image on the left, elbow and lower part slightly outside the card */}
        <div className="bg-violet-700 rounded-xl text-white p-6 pl-40 flex items-center relative overflow-visible min-h-[200px]">
          {/* Illustration on the left, elbow and lower part slightly outside the card */}
          <img
            src={thirdImage}
            alt="Get Mentored & Supported"
            className="absolute left-[-48px] bottom-[-16px] w-40 md:w-52 drop-shadow-lg"
            style={{ zIndex: 2 }}
          />
          {/* Content on the right */}
          <div className="flex flex-col z-10 text-left w-full">
            <div className="mb-2">
              <h3 className="text-2xl font-bold mb-1">Get Mentored & Supported</h3>
              <p className="text-lg font-semibold mb-2">You're not learning alone.</p>
            </div>
            <p className="text-sm leading-relaxed">
              Stuck or need feedback? SkillShikshya's community of mentors and
              learners has your back with live support, interactive discussions,
              and expert insights. You're never on your own.
            </p>
          </div>
        </div>

        {/* Achieve & Showcase - with image on the right, slightly bigger and elbow slightly out of the box */}
        <div className="bg-yellow-800 rounded-xl text-white p-6 pr-40 flex items-center relative overflow-visible min-h-[200px]">
          {/* Content on the left */}
          <div className="flex flex-col z-10 text-left w-full">
            <div className="mb-2">
              <h3 className="text-2xl font-bold mb-1">Achieve & Showcase</h3>
              <p className="text-lg font-semibold mb-2">Build your portfolio, get job-ready.</p>
            </div>
            <p className="text-sm leading-relaxed">
              Your journey ends with achievement. Each completed project builds a
              portfolio showcasing your skills and job readiness, bringing you
              closer to that dream job, promotion, or your own venture.
            </p>
          </div>
          {/* Illustration on the right, slightly bigger and elbow slightly out of the box */}
          <img
            src={lastImage}
            alt="Achieve & Showcase"
            className="absolute right-[-48px] top-1/2 -translate-y-1/2 w-40 md:w-52 drop-shadow-lg"
            style={{ zIndex: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Task2;