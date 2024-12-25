'use client';

const SkillBar = ({ skillName, percentage }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-white">{skillName}</span>
        <span className="text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-green-400 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;