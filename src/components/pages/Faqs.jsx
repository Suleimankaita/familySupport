const faqs = [
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply online through the admission form on the admissions page.",
  },

  {
    question: "Do you provide ICT classes?",
    answer:
      "Yes. We provide advanced ICT and coding programs for students.",
  },

  {
    question: "What levels does the school offer?",
    answer:
      "We offer Nursery, Primary, and Secondary education.",
  },

  {
    question: "Do you provide sports activities?",
    answer:
      "Yes. Students participate in football, athletics, fitness programs, and competitions.",
  },
];

function FAQ() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24">

      <div className="max-w-5xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center">

          <p className="uppercase tracking-widest text-sky-500 font-bold">
            Frequently Asked Questions
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-black text-blue-950 leading-tight">
            Need Help?
          </h1>

        </div>

        {/* FAQ */}
        <div className="mt-20 space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[30px]
                p-8
                shadow-lg
              "
            >

              <h2 className="text-2xl font-black text-blue-950">
                {faq.question}
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                {faq.answer}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;