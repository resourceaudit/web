import React from "react";

export default function SectionHeader({ title, subtitle, align = "center" }) {
  return (
    <div className={`text-${align} mb-10`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="uppercase tracking-widest text-gray-500 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
