import {
  MapPinIcon,
  TrashIcon,
  ArrowUpTrayIcon,
  StarIcon,
  PencilIcon,
} from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { formatNumber } from '../data/itinerary';

export default function ActivityCard({ activity }) {
  return (
    <div className="flex bg-white shadow-md rounded-xl p-4 gap-4 w-full max-w-[680px] font-[Helvetica] text-sm text-[#424242] overflow-hidden relative">
      {/* Drag Handle */}
      <div className="pt-1 text-gray-400 cursor-grab">
        <Bars3Icon className="w-5 h-5" />
      </div>

      {/* Custom map pin icon with number */}
      <div className="absolute top-[50px] left-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ec4899"
          viewBox="0 0 20 20"
          className="w-[26px] h-[37px]"
        >
          <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" />
        </svg>
        <span
          className="absolute"
          style={{
            top: '11px',
            left: '11px',
            width: '8px',
            height: '21px',
            fontFamily: 'Helvetica',
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: '150%',
            color: 'white',
          }}
        >
          {activity.index + 1}
        </span>
      </div>

      {/* Image */}
      <div className="relative flex-shrink-0 w-[112px] h-[112px] rounded-[12px] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow py-1 overflow-hidden">
        {/* Title + Icons */}
        <div className="flex justify-between items-start">
          <h3 className="text-black font-semibold text-base">
            {activity.name}
          </h3>
          <div className="flex gap-2">
            {activity.hasMap && (
              <MapPinIcon className="w-5 h-5 text-green-500 cursor-pointer" />
            )}
            <ArrowUpTrayIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
            <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-[6px] mt-2 px-[12px] w-full max-w-[524px] h-[24px]">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="font-semibold text-sm">
            {activity.rating.toFixed(1)}
          </span>
          <span className="text-xs text-[#757575]">
            ({formatNumber(activity.reviews)})
          </span>
        </div>

        {/* Description */}
        <div className="mt-2 bg-[#F8F9FA] rounded-[12px] p-[12px] max-w-[524px] h-[54px] flex items-start justify-between">
          <p className="text-[#616161] leading-[150%] text-sm line-clamp-3 pr-2">
            {activity.description}
          </p>
          <PencilIcon className="w-4 h-4 text-gray-500 cursor-pointer mt-0.5 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
