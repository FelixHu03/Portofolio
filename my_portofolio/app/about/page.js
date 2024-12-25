"use client";

import HoverText from "../componest/hoverText";
import SkillBar from "../componest/skillBar";

const ABOUT_TEXT = `I am Felix, a third semester Informatics Engineering student at Multi Data University Palembang. 
I have a great interest in software development, especially in web programming and other technologies. 
I enjoy solving problems, and exploring new things.`;

const SKILLS_DATA = [
  { skillName: "HTML", percentage: 97 },
  { skillName: "CSS", percentage: 90 },
  { skillName: "JavaScript", percentage: 80 },
  { skillName: "PHP", percentage: 79 },
  { skillName: "Figma", percentage: 70 },
];

export default function About() {
  return (
    <main className="flex flex-col items-center mt-24 min-h-screen font-serif">
      <div className="w-full max-w-6xl px-8 relative">
        <h1 className="text-6xl text-center mb-12">
          WHO AM I?
        </h1>
        
        <div className="flex flex-row justify-between gap-12">
          {/* Left side - About text */}
          <div className="w-1/2">
            <HoverText text={ABOUT_TEXT} />
          </div>

          {/* Right side - Skills */}
          <div className="w-1/2 bg-gray-800 p-6 rounded-lg">
            {SKILLS_DATA.map((skill, index) => (
              <SkillBar
                key={index}
                skillName={skill.skillName}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}