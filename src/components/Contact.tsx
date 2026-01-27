import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzabbja");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
            data-aos="fade-up"
          >
            Get In Touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's Work Together
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <p
            className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Cards - Left Side */}
            <div className="lg:col-span-1 space-y-6" data-aos="fade-right">
              {/* Email Card */}
              <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                      Email
                    </h3>
                    <a
                      href="mailto:aneesurrehman1358@gmail.com"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm break-all"
                    >
                      aneesurrehman1358@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                    <i className="fab fa-linkedin text-white text-xl"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                      LinkedIn
                    </h3>
                    <a
                      href="https://linkedin.com/in/araneeskhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      /in/araneeskhan
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-600 dark:hover:border-gray-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                    <i className="fab fa-github text-white text-xl"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                      GitHub
                    </h3>
                    <a
                      href="https://github.com/araneeskhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      /araneeskhan
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-blue-100 mb-1 uppercase tracking-wide">
                      Location
                    </h3>
                    <p className="text-white font-medium text-lg">
                      Paris, France
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <i className="fas fa-clock text-blue-600 dark:text-blue-400 text-lg"></i>
                  <h4 className="font-bold text-gray-900 dark:text-white">Quick Response</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                {state.succeeded ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg animate-bounce-once">
                      <i className="fas fa-check text-3xl text-white"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                      Thank you for reaching out! I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => window.location.reload()}
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
                    >
                      <span className="relative z-10 flex items-center">
                        <i className="fas fa-redo mr-2"></i>
                        Send Another Message
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Send a Message
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Fill out the form and I'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <i className="fas fa-user"></i>
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
                              focusedField === "name"
                                ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                                : "border-gray-300 dark:border-gray-600"
                            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none transition-all duration-300`}
                            placeholder="Full Name"
                          />
                        </div>
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <i className="fas fa-envelope"></i>
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
                              focusedField === "email"
                                ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                                : "border-gray-300 dark:border-gray-600"
                            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none transition-all duration-300`}
                            placeholder="Email Address"
                          />
                        </div>
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <i className="fas fa-tag"></i>
                          </div>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            onFocus={() => setFocusedField("subject")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
                              focusedField === "subject"
                                ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                                : "border-gray-300 dark:border-gray-600"
                            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none transition-all duration-300`}
                            placeholder="Project Inquiry"
                          />
                        </div>
                        <ValidationError
                          prefix="Subject"
                          field="subject"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-4 rounded-xl border ${
                              focusedField === "message"
                                ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                                : "border-gray-300 dark:border-gray-600"
                            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none transition-all duration-300 resize-none`}
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="group relative w-full py-5 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        <span className="relative z-10 flex items-center justify-center">
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
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane mr-2"></i>
                              Send Message
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes bounce-once {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
