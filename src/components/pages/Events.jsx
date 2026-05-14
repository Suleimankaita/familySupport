import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

const events = [
  {
    title: "Annual Inter-House Sports",
    date: "June 20, 2026",
    time: "10:00 AM",
    location: "School Stadium",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Science Exhibition",
    date: "July 12, 2026",
    time: "12:00 PM",
    location: "Science Hall",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Graduation Ceremony",
    date: "August 30, 2026",
    time: "9:00 AM",
    location: "Main Auditorium",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop",
  },
];

function Events() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-widest text-sky-500 font-bold">
            School Events
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-black text-blue-950 leading-tight">
            Discover Upcoming School Activities
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Stay updated with our educational programs,
            sports competitions, science fairs, leadership programs,
            and graduation ceremonies.
          </p>

        </div>

        {/* EVENTS */}
        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {events.map((event, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[35px]
                overflow-hidden
                shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="
                    h-[300px]
                    w-full
                    object-cover
                    hover:scale-110
                    transition-all
                    duration-700
                  "
                />
              </div>

              <div className="p-8">

                <h2 className="text-3xl font-black text-blue-950">
                  {event.title}
                </h2>

                <div className="mt-7 space-y-5">

                  <div className="flex items-center gap-4 text-gray-600">
                    <CalendarDays className="text-sky-500" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-600">
                    <Clock3 className="text-[#ff6347]" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-600">
                    <MapPin className="text-blue-950" />
                    <span>{event.location}</span>
                  </div>

                </div>

                <button
                  className="
                    mt-8
                    w-full
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-sky-500
                    to-blue-950
                    text-white
                    font-bold
                    hover:scale-[1.02]
                    transition-all
                  "
                >
                  Register Event
                </button>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;