// Initial itinerary data for the application
export const itineraryData = [
  {
    day: 1,
    activities: [
      {
        id: 'day1-activity1',
        name: 'India Gate',
        rating: 4.6,
        reviews: 281124,
        description:
          'India Gate is a war memorial located in New Delhi, along the Rajpath. It is dedicated to the 82,000 soldiers, both Indian and British.',
        image: '/images/india_gate.jpg',
        hasMap: true,
      },
      {
        id: 'day1-activity2',
        name: 'Red Fort',
        rating: 4.5,
        reviews: 168739,
        description:
          'The Red Fort is a historical fort in the old Delhi area, on the banks of Yamuna.',
        image: '/images/red_fort.jpg',
        hasMap: true,
      },
      {
        id: 'day1-activity3',
        name: 'Qutub Minar',
        rating: 4.2,
        reviews: 191556,
        description:
          "Qutub Minar is a minaret or a victory tower located in the Qutub complex, a UNESCO World Heritage Site in Delhi's Mehrauli area.",
        image: '/images/qutub_minar.jpg',
        hasMap: true,
      },
    ],
  },
  {
    day: 2,
    activities: [
      {
        id: 'day2-activity1',
        name: 'Lotus Temple',
        rating: 4.6,
        reviews: 97772,
        description:
          "Located in the national capital of New Delhi, the Lotus Temple is an edifice dedicated to the Baha'i faith.",
        image: '/images/lotus_temple.jpg',
        hasMap: true,
      },
      {
        id: 'day2-activity2',
        name: "Humayun's Tomb",
        rating: 4.5,
        reviews: 46024,
        description:
          "Humayun's tomb is the final resting place of the Mughal Emperor Humayun.",
        image: '/images/humayun_tomb.jpg',
        hasMap: true,
      },
      {
        id: 'day2-activity3',
        name: 'Akshardham Temple',
        rating: 4.7,
        reviews: 125000000,
        description:
          'Akshardham is a Hindu temple complex in Delhi, showcasing millennia of traditional and modern Hindu culture.',
        image: '/images/akshardham.jpg',
        hasMap: true,
      },
    ],
  },
];

// Format number for display (e.g., 1000 -> 1K, 1000000 -> 1M)
export function formatNumber(num) {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
}
