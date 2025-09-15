import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzabbja");

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <p className="section-subtitle text-center" data-aos="fade-up">
          Get In Touch
        </p>
        <h2
          className="section-title text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Contact Me
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-xl group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Email
                    </p>
                    <a
                      href="mailto:aneesurrehman1358@gmail.com"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      aneesurrehman1358@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-xl group-hover:scale-110 transition-transform">
                    <i className="fab fa-linkedin text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      LinkedIn
                    </p>
                    <a
                      href="https://linkedin.com/in/araneeskhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/araneeskhan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-xl group-hover:scale-110 transition-transform">
                    <i className="fab fa-github text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/araneeskhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      github.com/araneeskhan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-xl group-hover:scale-110 transition-transform">
                    <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Location
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      Paris, France.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full">
                    <i className="fas fa-check text-2xl text-green-600 dark:text-green-400"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Send Me a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                        placeholder="Enter your Full Name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                        placeholder="email@example.com"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                        placeholder="Project Inquiry"
                      />
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {state.submitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i> Send
                          Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
