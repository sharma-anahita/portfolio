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
              Hey, I'm <span className="font-bold text-pink-400">Anahita Sharma</span>{' '}
              <span className="inline-block align-baseline w-10 h-10 scale-125 -translate-y-1">
                <DotLottieReact
                  src="https://lottie.host/4e45f9c6-1c0e-4018-aa4d-2bc0c0a5067f/12N6aYiYjl.lottie"
                  loop
                  autoplay
                />
              </span>
            </h1>
            <p className="mb-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <TypingHeadline />
            </p>
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-gray-700">Let's connect</p>
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-300"
                />
                <input
                  type="email"
                  placeholder="Your email address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-300"
                />
                <textarea
                  placeholder="Your message *"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-300 resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 text-sm font-medium text-white rounded-md transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-pink-400 hover:bg-pink-500"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
              {submitStatus.message && (
                <div
                  className={`mt-4 p-3 rounded-md text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-pink-200 to-orange-300 aspect-square w-48 sm:w-64 lg:w-80 flex items-center justify-center">
              <img
                src="/hi.jpeg"
                alt="Hero"
                className="object-cover w-full h-full rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;