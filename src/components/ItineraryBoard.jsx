import React from 'react';
import { itineraryData } from '../data/itinerary';
import ItineraryDay from './ItineraryDay';

export default function ItineraryBoard() {
  return (
    <div className="w-full bg-[#F5F5F5] min-h-screen p-4 md:p-8 flex justify-center">
      {/* One Main Card */}
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden">
        {/* Left Section: Itinerary Content */}
        <div className="w-full md:w-1/2 p-4 md:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 text-white px-3 py-1 rounded text-sm font-bold">
              Y2Z TRAVEL
            </span>
            <div className="flex items-center justify-center text-[#344767] text-2xl font-bold cursor-pointer h-8">
              ☰
            </div>
          </div>

          <h1 className="text-black text-2xl font-bold mb-4">Itinerary</h1>

          {/* Itinerary Days */}
          {itineraryData.map((day) => (
            <ItineraryDay
              key={day.day}
              name={`Day ${day.day}`}
              activities={day.activities}
            />
          ))}
        </div>

        {/* Right Section: Big Map */}
        <div className="hidden md:block md:w-1/2 h-auto min-h-[600px]">
          <iframe
            src="https://maps.google.com/maps?q=28.6129,77.2295&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
