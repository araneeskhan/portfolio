interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <p
        className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
        data-aos="fade-up"
      >
        {label}
      </p>
      <h2
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {title}
      </h2>
      <div
        className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
        data-aos="fade-up"
        data-aos-delay="200"
      />
      {description && (
        <p
          className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {description}
        </p>
      )}
    </div>
  );
}
