import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: "fa-globe",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications — interactive React/Next.js frontends wired to robust Node.js backends and REST APIs, deployed to production.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500",
    bg: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    border: "border-blue-200 dark:border-blue-800",
    hoverBorder: "group-hover:border-blue-400 dark:group-hover:border-blue-500",
  },
  {
    icon: "fa-mobile-alt",
    title: "Mobile App Development",
    description:
      "Cross-platform iOS & Android apps with React Native — native performance, smooth UX, offline support, and real-time backend integration.",
    tags: ["React Native", "Expo", "Firebase", "Zustand"],
    gradient: "from-purple-500 to-violet-500",
    bg: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    border: "border-purple-200 dark:border-purple-800",
    hoverBorder:
      "group-hover:border-purple-400 dark:group-hover:border-purple-500",
  },
  {
    icon: "fa-brain",
    title: "AI & ML Integration",
    description:
      "Add intelligence to your product — recommendation engines, NLP pipelines, or computer vision models served via Python/Flask microservices.",
    tags: ["Python", "TensorFlow", "Flask", "NLP"],
    gradient: "from-pink-500 to-rose-500",
    bg: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    border: "border-pink-200 dark:border-pink-800",
    hoverBorder: "group-hover:border-pink-400 dark:group-hover:border-pink-500",
  },
  {
    icon: "fa-server",
    title: "Backend & API Development",
    description:
      "Scalable REST APIs, database architecture, and server-side services built for production — with auth, validation, and cloud deployment.",
    tags: ["Express.js", "MongoDB", "MySQL", "Supabase"],
    gradient: "from-green-500 to-emerald-500",
    bg: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    border: "border-green-200 dark:border-green-800",
    hoverBorder:
      "group-hover:border-green-400 dark:group-hover:border-green-500",
  },
  {
    icon: "fa-layer-group",
    title: "UI/UX to Code",
    description:
      "Pixel-perfect implementation of Figma or XD designs into responsive, accessible, animated interfaces — fast and cross-browser.",
    tags: ["Tailwind CSS", "Framer Motion", "AOS", "Responsive"],
    gradient: "from-orange-500 to-amber-500",
    bg: "from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
    border: "border-orange-200 dark:border-orange-800",
    hoverBorder:
      "group-hover:border-orange-400 dark:group-hover:border-orange-500",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-full blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-900 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          label="What I Offer"
          title="Services"
          description="From idea to production — I cover the full stack so you don't have to manage multiple specialists."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-gradient-to-br ${service.bg} p-8 rounded-2xl border ${service.border} ${service.hoverBorder} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${service.gradient} rounded-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <i className={`fas ${service.icon} text-white text-xl`}></i>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5 text-sm">
                {service.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="group relative bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center"
            data-aos="fade-up"
            data-aos-delay={services.length * 80}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-handshake text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Have a project in mind?
            </h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              Let&apos;s talk about your idea and build something great
              together.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300 hover:scale-105"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
