'use client';

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <>
      <div className="contact container mx-auto mt-8 lg:mt-16" id="contact">
        <div className="grid contacthead grid-cols-12 gap-4"> 
          <div className="col-span-12 lg:col-span-8">
            <h4>Join This Year's Winter Fest Show</h4>
            <h1>Book a Spot</h1>
          </div>
          <div className="col-span-4 hidden lg:block justify-self-end">
            <Image src="/contactvector.png" width="200" height="200" alt="Lumo Winter Fest"/>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 container mx-auto md:px-8 pt-8 pb-8 p-6">
          <div className="col-span-12 md:col-span-6">
            <div className={`inputzone ${focusedInput === 'name' ? 'focused' : ''}`}>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Eg. Jane Doe"
                id="name"
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className={`inputzone ${focusedInput === 'email' ? 'focused' : ''}`}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Eg. janedoe@gmail.com"
                id="email"
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className={`inputzone ${focusedInput === 'source' ? 'focused' : ''}`}>
              <label>Where did you hear about the Lumo winter fest?</label>
              <input
                type="text"
                placeholder="Eg. Youtube"
                id="source"
                onFocus={() => setFocusedInput('source')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className={`inputzone ${focusedInput === 'social' ? 'focused' : ''}`}>
              <label>If you're an influencer, please share your youtube or tiktok url</label>
              <input
                type="text"
                placeholder="Eg. https://www.youtube.com/dressigngwithhannah"
                id="social"
                onFocus={() => setFocusedInput('social')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className={`inputzone ${focusedInput === 'reason' ? 'focused' : ''}`}>
              <label>What do you like to see in the winter fest?</label>
              <input
                type="text"
                placeholder="Eg. coats"
                id="reason"
                onFocus={() => setFocusedInput('reason')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 mt-8">
              <button>Opt-In</button>
          </div>
        </div>
      </div>
    </>
  );
}
