import React, { useState } from "react";
import throwindustbin from "../Images/throwing notes.png";
import aboutimage from "../Images/best-about-us-pages-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Why shouldn't I throw my subject notes in the dustbin?",
      answer:
        " There are several good reasons. First, your notes can be a valuable resource for future reference and studying. Second, they might be useful to others, like your siblings or friends. Third, throwing away paper notes contributes to environmental waste.",
    },
    {
      question: "What is an offline notes distribution system?",
      answer:
        "An offline notes distribution system is a platform or service that provides access to educational or informational materials in a physical format, such as printed notes or books, without requiring an internet connection.",
    },
    {
      question: "What subjects or topics do your offline notes cover?",
      answer:
        "We offer a wide range of offline notes covering various subjects and topics, from academic subjects to professional development materials.",
    },
    {
      question:
        "Can I request custom notes or materials not listed on your platform?",
      answer:
        "We do our best to accommodate custom requests. Feel free to reach out to us with your specific requirements, and we'll see if we can provide the materials you need.",
    },
    {
      question:
        "How can I get in touch with your customer support for inquiries or assistance?",
      answer:
        "You can contact our customer support team through the contact information provided on our website. We're here to help with any questions or concerns you may have.",
    },
    // Add more FAQ items as needed
  ];
  const services = [
    {
      title: "Quality Notes",
      description:
        "We collaborate with top educators and subject experts to curate high-quality study materials that cover a wide range of topics and subjects.",
    },
    {
      title: "Convenience",
      description:
        "Say goodbye to the stress of downloading, printing, or worrying about a weak Wi-Fi signal. With our offline notes, your study materials are always within arms reach.",
    },
    {
      title: "Environmental Responsibility",
      description:
        "We are committed to sustainability. By distributing printed notes, we reduce the environmental impact associated with excessive paper waste.",
    },
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <section className="bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-10 flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 ">
            <img
              src={throwindustbin}
              alt="Welcome"
              className="h-64 lg:h-5/6 lg:pl-20 lg:pt-20 sm:pl-0 sm:mt-8 bg-gray-100 "
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-12 lg:mt-20 sm:mt-20 sm:pb-0">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              Welcome to NoteBuddy!...
            </h2>
            <div className="mt-6 text-xl text-black">
              <p>
                Your subject notes may seem useless once the semester/year ends,
                but before you toss them in the trash, consider this: those
                notes can actually be quite valuable.They can help you study,
                assist others, and even save the planet a tiny bit. Keep them
                organized, and you'll thank yourself in the future.
              </p>
              <div className="buttons my-4">
                <Link to="/signup">
                  <button className="bg-blue-700 px-4 py-2 rounded-2xl text-white font-bold  hover:text-black hover:bg-white hover:border-blue-950 mr-2 hover:border-2">
                    SignUp
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-blue-700 px-4 py-2 rounded-2xl text-white font-bold hover:text-black hover:bg-white  hover:border-blue-950 mr-2 hover:border-2">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-700 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white font-extrabold mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-amber-500 p-6 rounded-lg shadow-md hover:scale-110 cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-950">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="bg-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row">
          <div className="lg:w-2/3 lg:order-last">
            <img src={aboutimage} alt="About Us" className="lg:h-96" />
          </div>
          <div className="lg:w-2/3 lg:pl-8 mt-6 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About Us
            </h2>
            <div className="mt-6 pr-4 text-xl text-white">
              <p>
                Welcome to NoteBuddy, your trusted partner in making knowledge
                accessible through offline notes distribution. We're passionate
                about helping students, professionals, and lifelong learners
                gain access to valuable educational resources anytime, anywhere.
              </p>
              <p className="mt-4">
                At NoteBuddy, our mission is simple: to bridge the gap between
                digital convenience and the tangible benefits of offline
                learning. We understand the importance of having physical notes
                that you can highlight, annotate, and carry with you without
                relying on an internet connection.
              </p>
              {/* <p className="mt-4">
                Remember, your notes are more than just pieces of paper; they're
                a valuable part of your education journey!
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-green-400 py-10">
        <div className="container px-4  m-auto  w-4/5 py-8 bg-green-200  object-cover rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-6">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="p-4 rounded-lg text-black font-semibold"
              >
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-medium">{faq.question}</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:col-span-1 ml-10">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Contact Us
              </h2>
              <h3 className="text-lg font-medium text-white mt-4">
                Get in Touch
              </h3>
              <p className="mt-1 text-white">
                Got questions or feedback? We'd love to hear from you! Reach out
                to our friendly team at below contact details, and we'll be
                happy to assist you.
              </p>
              <div className="mt-6 flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-yellow-500 text-2xl mr-2"
                />
                <h4 className="text-md font-medium text-white inline-block">
                  Email
                </h4>
                <p className="mt-1 text-white ml-2">NoteBuddy@gmail.com</p>
              </div>
              <div className="mt-6 flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-yellow-500 text-2xl mr-2"
                />
                <h4 className="text-md font-medium text-white inline-block">
                  Phone
                </h4>
                <p className="mt-1 text-white ml-2">+91-98xx58xx26</p>
              </div>
            </div>
            <div className="md:col-span-1 lg:pr-10">
              <h3 className="text-3xl  font-extrabold text-white">
                Send Us a Message
              </h3>
              <form className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="Your message here"
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-bold rounded-md text-black bg-amber-500 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
