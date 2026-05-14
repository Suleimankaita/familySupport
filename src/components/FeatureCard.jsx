    function FeatureCard({
  title,
  description,
  icon,
}) {
  return (
    <div
      className="
        bg-white
        rounded-[35px]
        p-10
        shadow-xl
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >

      <div
        className="
          w-20
          h-20
          rounded-3xl
          bg-gradient-to-br
          from-sky-500
          to-blue-950
          flex
          items-center
          justify-center
          text-white
          shadow-xl
        "
      >
        {icon}
      </div>

      <h2 className="mt-8 text-3xl font-black text-blue-950">
        {title}
      </h2>

      <p className="mt-5 text-gray-600 leading-8">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;