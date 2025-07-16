import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className=" mx-auto bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 py-16 px-6 md:px-12 rounded-lg shadow-lg">
      <h2
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        data-aos="fade-up"
      >
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
          <p className="italic text-gray-700 mb-4">
            “AI.Risezonic's GenAI Bootcamp was a game-changer. I built my own
            chatbot in 4 weeks!”
          </p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
              R
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Ritika Sharma
              </p>
              <p className="text-xs text-gray-500">BCA Student</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
          <p className="italic text-gray-700 mb-4">
            “We partnered with AI.Risezonic for a 2-day AI workshop. The
            students were amazed.”
          </p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
              A
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Prof. Ajay Kumar
              </p>
              <p className="text-xs text-gray-500">HOD, CSE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
