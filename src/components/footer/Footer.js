import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  // gsap section
  const imgref = useRef();
  useEffect(() => {
    const imgtl = gsap.timeline();
    imgtl
      .from(imgref.current, {
        opacity: 0,
        duration: 1,
        delay: 0.4,
      })
      .to(imgref.current, {
        repeat: -1,
        yoyo: true,
        x: -150,
        duration: 10,
        opacity: 0.99,
      });
  }, []);

  const footerStyle = {
    // backgroundImage: "url('/assets/image/white_Mn.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    color: "white",
    // padding: "2.5rem 0",
  };
  return (
    <div style={footerStyle}>
      <div className="flex bg-slate-800 relative overflow-hidden object-cover justify-center items-center ">
        <div
          ref={imgref}
          className="flex justify-center items-center object-cover"
        >
          <img alt="bg" src="/assets/image/white_Mn.png" />
          <img alt="bg" src="/assets/image/white_Mn.png" />
          <img alt="bg" src="/assets/image/white_Mn.png" />
          <img alt="bg" src="/assets/image/white_Mn.png" />
        </div>
        <div className=" text-white absolute z-10 mt-20">
          {/* py-10 bg-bg2 bg-cover bg-center */}
          <div className="flex justify-center mt-10 space-x-4">
            <img
              src="assets/image/Dep_logo.png"
              alt="Department Logo"
              className=" h-20 w-20 rounded-full object-cover"
            />
            <img
              src="assets/image/sg_logo.png"
              alt="Support Group Logo"
              className="h-20 w-20 rounded-full object-cover"
            />

            <img
              src="assets/image/govc.png"
              alt="Government Logo"
              className="h-20 w-20 rounded-full object-cover"
            />
            <img
              src="assets/image/ministry.png"
              alt="Another Ministry Logo"
              className="h-20 w-20 rounded-full object-cover"
            />
          </div>

          <div className="flex flex-wrap space-x-8 items-center text-center place-content-center mt-10 mb-9">
            <a
              href="/accessibility-statement"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Accessibility Statement
            </a>
            <a
              href="/copyright-policy"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Copyright Policy
            </a>
            <a
              href="/disclaimer"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Disclaimer
            </a>
            <a
              href="/site-map"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Site Map
            </a>
            <a
              href="/feedback"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Feedback
            </a>
            <a
              href="/hypera-policy"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Hypera Policy
            </a>
            <a
              href="/privacy-policy"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-conditions"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Terms & Condition
            </a>
            <a
              href="/terms-of-use"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Terms of Use
            </a>
            <a
              href="/help"
              className=" hover:text-sky-400 hover:underline text-sm hover:text-base"
            >
              Help
            </a>
          </div>

          <div className="flex flex-col place-content-center space-y-4 text-center">
            <div className="">
              © 2024 - All Rights Reserved - by Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore, New Delhi.
            </div>
            <div>
              Content managed by Department of CSE, Priya Kumari. For any
              queries, contact:{" "}
              <a href="mailhref:dbgpriyakumari@gmail.com">Email</a>
            </div>
            <div className="">
              <p className="text-sm mb-5">Last updated: 12-Sep-2024 7:30 pm</p>
            </div>
          </div>

          <div className="flex flex-col place-content-center">
            <div className=" text-xs text-center">
              Project: Tribal Development in Chhattisgarh (2020-2025). Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut
              labore et dolore.
            </div>

            <div className="text-xs text-center mt-1 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore, New Delhi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
