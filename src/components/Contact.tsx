import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-subtitle text-center" data-aos="fade-up">
          Get In Touch
        </p>
        <h2 className="section-title text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          Contact Me
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-xl group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a href="mailto:aneesurrehman1358@gmail.com" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      aneesurrehman1358@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-xl group-hover:scale-110 transition-transform">
                    <i className="fab fa-linkedin text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                    <a href="https://linkedin.com/in/araneeskhan" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      linkedin.com/in/araneeskhan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-xl group-hover:scale-110 transition-transform">
                    <i className="fab fa-github text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">GitHub</p>
                    <a href="https://github.com/araneeskhan" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      github.com/araneeskhan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-xl group-hover:scale-110 transition-transform">
                    <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i> Send Message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>Your message has been sent successfully!</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg flex items-center">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    <span>There was an error sending your message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;