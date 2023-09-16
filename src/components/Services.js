import React from 'react'

export default function Services() {

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
            "We are committed to sustainability. By distributing notes, we reduce the environmental impact associated with excessive paper waste.",
        },
      ];
    
  return (
    <section className="bg-blue-700 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl text-white font-extrabold mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-amber-500 p-6 sm:mx-4 rounded-lg shadow-md hover:scale-110 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-950">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
