import React from 'react'

export default function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privay Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Firoz2002" className="social-icon">
          <img src="/assets/social-media-icons/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
      </div>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/firoz-kamdar-970900255/" className="social-icon">
            <img src="/assets/social-media-icons/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
      </div>
      <div className="flex gap-3">
        <a href="https://leetcode.com/u/FirozKamdar/" className="social-icon">
            <img src="/assets/social-media-icons/leetcode.svg" alt="leetcode" className="w-1/2 h-1/2" />
        </a>
      </div>
      <div className="flex gap-3">
        <a href="#" className="social-icon">
            <img src="/assets/social-media-icons/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>
      <p className="text-white-500"> 2024 Firoz. All rights reserved.</p>
    </section>
  )
}
