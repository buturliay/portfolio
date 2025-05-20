"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import confetti from 'canvas-confetti';
import linkedinIcon from '../public/linkedin.png';

const Contact = () => {
    const [state, handleSubmit] = useForm('xgvkqnel');

  useEffect(() => {
    if (state.succeeded) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="relative bg-[#FCFCF1] py-20 px-[72px]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Contact Form */}
        <div>
          <h2 className="text-[32px] leading-[48px] tracking-[-0.05em] font-semibold text-[#03045E] font-poppins mb-4">
            contact
          </h2>
          {state.succeeded ? (
            <p className="text-green-700 text-sm font-inter">Message sent! Thank you.</p>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="name"
                className="border border-black rounded-md px-4 py-2 text-sm text-[#03045E] font-inter"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="border border-black rounded-md px-4 py-2 text-sm text-[#03045E] font-inter"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <textarea
                id="message"
                name="message"
                placeholder="message"
                className="border border-black rounded-md px-4 py-2 text-sm text-[#03045E] font-inter h-[113px]"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="self-start bg-[#03045E] text-white px-4 py-2 rounded-full text-sm font-work-sans hover:bg-[#021b4a]"
              >
                submit
              </button>
            </form>
          )}
        </div>

        {/* Social Connect */}
        <div>
          <h2 className="text-[32px] leading-[48px] tracking-[-0.05em] font-semibold text-[#03045E] font-poppins mb-4">
            connect
          </h2>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <Image
              src={linkedinIcon}
              alt="LinkedIn logo"
              width={47}
              height={47}
              className="hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
