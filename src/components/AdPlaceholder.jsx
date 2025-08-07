import React from "react";

export default function AdPlaceholder({ label = "Ad Placeholder" }) {
  return (
    <div className="w-full h-32 bg-gray-200 border border-dashed border-gray-400 flex items-center justify-center rounded-xl text-gray-600 text-sm my-8">
      {label}
    </div>
  );
}
