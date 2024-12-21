import React from "react";

const Features = () => {
  const features = [
    {
      title: "Gamified Learning Experience",
      description:
        "Earn points, badges, calling card, and more while competing with friends to stay motivated while tracking your success",
      icon: "🏆",
    },

    {
      title: "AI-Generated Questions",
      description: "Personalized questions tailored to your learning needs.",
      icon: "❓",
    },
    {
      title: "Real-Time Feedback",
      description: "Understand your mistakes and improve instantly.",
      icon: "⚡",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your improvement over time with detailed stats and acheivements",
      icon: "📊",
    },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-500 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card shadow-lg bg-gradient-to-t from-gray-400 to-gray-500 p-6 text-center border border-gray-700 rounded-xl"
            >
              <div className="text-5xl mb-4 text-yellow-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
