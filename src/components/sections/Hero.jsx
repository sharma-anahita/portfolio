import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import TypingHeadline from '../TypingHeadline';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const formRef = useRef();

  const EMAILJS_SERVICE_ID = 'service_lputadc';
  const EMAILJS_TEMPLATE_ID = 'template_89yg8np';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    if (!email || !message) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields.' 
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please enter a valid email address.' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_email: email,
        from_name: name || 'Anonymous',
        message: message,
        to_name: 'Anahita',
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' 
        });
        setEmail('');
        setMessage('');
        setName('');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Oops! Something went wrong. Please try again or email me directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="about" className="px-4 sm:px-8 py-8 sm:py-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-normal">
              Hey, I'm <span className="font-bold text-themeAccent">Anahita Sharma</span>{' '}
              <span className="inline-block align-baseline w-10 h-10 scale-125 -translate-y-1">
                <DotLottieReact
                  src="https://lottie.host/4e45f9c6-1c0e-4018-aa4d-2bc0c0a5067f/12N6aYiYjl.lottie"
                  loop
                  autoplay
                />
              </span>
            </h1>
            <p className="mb-6 text-themeTextSec leading-relaxed text-sm sm:text-base">
              <TypingHeadline />
            </p>
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-themeTextSec">Let's connect</p>
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-sm border bg-themeCard border-themeInput rounded-md focus:outline-none focus:border-themeInputFocus focus:ring-1 focus:ring-themeInputFocus text-themeText placeholder-themeTextMuted/70"
                />
                <input
                  type="email"
                  placeholder="Your email address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-sm border bg-themeCard border-themeInput rounded-md focus:outline-none focus:border-themeInputFocus focus:ring-1 focus:ring-themeInputFocus text-themeText placeholder-themeTextMuted/70"
                />
                <textarea
                  placeholder="Your message *"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-sm border bg-themeCard border-themeInput rounded-md focus:outline-none focus:border-themeInputFocus focus:ring-1 focus:ring-themeInputFocus text-themeText placeholder-themeTextMuted/70 resize-none"
                />
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 text-sm font-medium text-white rounded-md transition-all shine-sweep-btn duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-themeAccent/20 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-themeBtnGradStart to-themeBtnGradEnd hover:from-themeBtnGradStartHover hover:to-themeBtnGradEndHover"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  <a
                    href="/Anahita_Sharma_resume_SWE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-sm font-medium text-themeAccent bg-themeCard border border-themeAccent rounded-md hover:bg-themeAccentBg hover:text-themeAccentHover hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm"
                  >
                    Resume
                  </a>
                </div>
              </form>
              {submitStatus.message && (
                <div
                  className={`mt-4 p-3 rounded-md text-sm border ${
                    submitStatus.type === "success"
                      ? "bg-theme-success text-theme-success border-theme-success"
                      : "bg-theme-danger text-theme-danger border-theme-danger"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-themeAccent to-themeBtnGradEnd aspect-square w-48 sm:w-64 lg:w-80 flex items-center justify-center p-1 shadow-lg">
              <img
                src="/hi.jpeg"
                alt="Hero"
                className="object-cover w-full h-full rounded-lg border-2 border-themeCard/30 shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;