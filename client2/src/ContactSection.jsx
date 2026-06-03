import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-[#eaf4fb] flex flex-col items-center justify-center py-12 px-4">

      {/* Card with orange left border accent */}
      <div className="w-full max-w-lg relative mb-10">
        {/* Orange left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-2xl bg-[#e8472d]" />

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Card header */}
          <div className="px-8 pt-8 pb-4 border-b border-gray-100">
            <h2 className="text-[28px] font-bold text-[#5046e5]">Get in Touch</h2>
          </div>

          {/* Form */}
          <div className="px-8 py-6">
            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#5046e5] transition-colors"
              />
            </div>

            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#5046e5] transition-colors"
              />
            </div>

            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">Phone No.</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#5046e5] transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#5046e5] transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#5046e5] hover:bg-[#3f36c4] active:scale-[0.98] text-white text-[15px] font-semibold py-3.5 rounded-xl border-2 border-[#e8472d] transition-all duration-150"
            >
              {submitted ? "Message Sent!" : "Submit Message"}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom text block */}
      <div className="w-full max-w-2xl text-center px-4">
        <p className="text-[13px] text-gray-500 mb-2 tracking-wide">Contact With Us</p>
        <h3 className="text-[28px] md:text-[34px] font-extrabold text-gray-900 leading-tight mb-4">
          Get In Touch With Us And We'll Assist You ASAP
        </h3>
        <p className="text-[15px] text-gray-400 leading-relaxed">
          Our experts and developers would love to contribute their expertise and insights and help
          you today. Contact us to help you plan your next transaction, either buying or selling a home.
        </p>
      </div>

    </section>
  );
}
