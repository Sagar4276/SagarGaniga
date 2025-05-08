import React, { useState } from "react";

export default function TabContent({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="tab-titles flex space-x-6 mt-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-links px-3 py-1 font-semibold relative ${
              activeTab === tab.id ? "text-red-500 active-link" : "text-gray-300"
            } hover:text-white transition-colors duration-300`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div 
          key={tab.id} 
          id={tab.id}
          className={`tab-contents ${activeTab === tab.id ? "block mt-6" : "hidden"}`}
        >
          <ul className="space-y-6">
            {tab.content.map((item, idx) => (
              <li key={idx} className="mb-4">
                <span className="font-bold text-red-400">{item.title}</span>
                <br />
                <p className="text-gray-300 whitespace-pre-line">{item.details}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}