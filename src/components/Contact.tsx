import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';
import personal from '@/config/personal';
import SectionHeader from '@/components/SectionHeader';

const contactCards = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    label: 'LinkedIn',
    value: personal.linkedinHandle,
    href: personal.linkedin,
    icon: <i className="fab fa-linkedin text-xl" />,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    label: 'GitHub',
    value: `/${personal.githubUsername}`,
    href: personal.github,
    icon: <i className="fab fa-github text-xl" />,
    gradient: 'from-gray-700 to-gray-900 dark:from-gray-500 dark:to-gray-700',
  },
];

const Contact = () => {
  const [state, handleSubmit, reset] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID ?? 'mjgpoeyy');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const fieldClass = (field: string) =>
    `w-full rounded-xl border px-5 py-4 font-display text-[15px] font-medium text-canvas-950 outline-none transition-all duration-300 placeholder:text-canvas-400 dark:text-white ${
      focusedField === field
        ? 'border-accent-500 bg-white shadow-[0_0_0_4px_rgba(99,102,241,0.1)] dark:bg-canvas-900 dark:shadow-[0_0_0_4px_rgba(168,85,247,0.1)]'
        : 'border-canvas-200/50 bg-canvas-50/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]'
    }`;

  return (
    <section id="contact" className="section-border-top relative overflow-hidden pb-32 pt-24 md:pt-32">
      {/* Premium Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 subtle-grid opacity-30 dark:opacity-10" />
        <div className="glow-orb -left-32 top-0 h-[600px] w-[600px] bg-accent-500/[0.05]" />
        <div className="glow-orb right-0 bottom-0 h-[500px] w-[500px] bg-accent2-500/[0.04]" style={{animationDelay: '7s'}} />
      </div>

      <div className="section-container relative z-10">
        <SectionHeader
          label="Contact"
          title="Let's build something precise, useful, and polished."
          description="Share the goal, timeline, and product constraints. I'll respond with a clear next step."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">
          {/* Left column */}
          <motion.aside
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Response time premium card */}
            <div className="relative overflow-hidden rounded-2xl border border-canvas-200/40 bg-white/90 p-8 shadow-elevated backdrop-blur-3xl dark:border-white/10 dark:bg-canvas-950/90">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-500/[0.03] to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    Response Window
                  </p>
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold text-canvas-950 dark:text-white">
                  Within 24 hours
                </h3>
                <p className="mt-4 font-medium leading-relaxed text-canvas-600 dark:text-canvas-300">
                  Best fit for full-stack builds, React Native apps, AI-enhanced product features, and
                  portfolio-grade interfaces.
                </p>
              </div>
            </div>

            {/* Contact links */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-canvas-200/40 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated dark:border-white/10 dark:bg-white/[0.03]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.08]`} />
                  
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-canvas-100 text-canvas-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-canvas-950 group-hover:shadow-md dark:bg-white/10 dark:text-canvas-200 dark:group-hover:bg-white dark:group-hover:text-canvas-950">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-display font-medium uppercase tracking-widest text-canvas-400 dark:text-canvas-500">
                      {item.label}
                    </p>
                    <p className="mt-1 truncate font-display text-lg font-medium text-canvas-950 transition-colors group-hover:text-accent-500 dark:text-white dark:group-hover:text-accent-400">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.aside>

          {/* Right: Form */}
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-canvas-200/50 bg-white/95 p-8 shadow-2xl shadow-canvas-200/50 backdrop-blur-3xl dark:border-white/10 dark:bg-canvas-950/95 dark:shadow-none sm:p-10 lg:p-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Top right gradient accent */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl dark:bg-accent-500/10" />

            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div
                  key="success"
                  className="flex min-h-[460px] flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                    className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-xl shadow-emerald-500/20"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </motion.div>
                  <h3 className="mt-8 font-display text-3xl font-bold text-canvas-950 dark:text-white">
                    Message sent successfully.
                  </h3>
                  <p className="mt-4 max-w-sm font-medium leading-relaxed text-canvas-600 dark:text-canvas-400">
                    Thanks for reaching out. I&apos;ll review the details and get back to you with a clear response soon.
                  </p>
                  <button type="button" onClick={reset} className="btn-primary mt-10 px-8 py-4 font-bold shadow-lg">
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="relative z-10 space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <FieldLabel label="Your Name" htmlFor="name" required>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={fieldClass('name')}
                        placeholder="e.g. John Doe"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-2 text-sm font-semibold text-red-500" />
                    </FieldLabel>

                    <FieldLabel label="Email Address" htmlFor="email" required>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={fieldClass('email')}
                        placeholder="you@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-sm font-semibold text-red-500" />
                    </FieldLabel>
                  </div>

                  <FieldLabel label="Subject" htmlFor="subject" required>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={fieldClass('subject')}
                      placeholder="Project inquiry or opportunity"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="mt-2 text-sm font-semibold text-red-500" />
                  </FieldLabel>

                  <FieldLabel label="Message" htmlFor="message" required>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`${fieldClass('message')} resize-none`}
                      placeholder="Tell me about your goals, constraints, and timeline..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-sm font-semibold text-red-500" />
                  </FieldLabel>

                  <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="btn-primary flex-1 py-4 text-base font-bold shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {state.submitting ? (
                        <>
                          <span>Sending Message</span>
                          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12a9 9 0 11-6.219-8.56"/>
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FieldLabel = ({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) => (
  <label htmlFor={htmlFor} className="block">
    <span className="mb-2.5 block font-display text-[13px] font-semibold uppercase tracking-wide text-canvas-700 dark:text-canvas-300">
      {label}
      {required && <span className="ml-1 text-accent-500">*</span>}
    </span>
    {children}
  </label>
);

export default Contact;
