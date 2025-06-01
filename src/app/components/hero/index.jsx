import React from "react";
import Image from "next/image";
import cursor from "../../assets/svg/cursor.svg";
import speaker from "../../assets/svg/speaker.svg";
import avater from "../../assets/svg/avatar/avater.svg";
import avater1 from "../../assets/svg/avatar/avater1.svg";
import avater2 from "../../assets/svg/avatar/avater2.svg";
import avater3 from "../../assets/svg/avatar/avater3.svg";
import avater4 from "../../assets/svg/avatar/avater4.svg";
import avater5 from "../../assets/svg/avatar/avater5.svg";

const avatars = [avater, avater1, avater2, avater3, avater4, avater5];

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col items-center text-center">
      <div className="flex items-start pb-10">
        <p className="text-[12px] md:text-[20px] text-white">
          {" "}
          <span className="italic">Noted</span>-Hire
        </p>
        <Image
          src={speaker}
          alt="speaker-icon"
          className="ml-1 w-[16px] h-[16px] mt-[2px]"
        />
      </div>
      <div className="text-center md:space-y-6">
        <h1 className="text-[34px] lg:text-[64px] font-medium text-white tracking-tighter lg:leading-[70px]">
          Get Clear, Actionable <span className="gradient-text">Interview <br/>Feedback</span> Instantly{" "}
        </h1>
   
        <p className="text-[12px] md:text-[20px] font-medium text-white max-w-[573px] mx-auto">
          Join the waitlist for our remote-friendly platform that helps hiring
          teams capture structured candidate insights right after every call. No
          more scattered notes or forgotten impressions.
        </p>
      </div>

      <div className="relative w-[300px]  md:w-[517px] mt-8 mb-8">
        <input
          placeholder="Email Address"
          className="w-full h-[61px] rounded-[16px] px-4 bg-white text-black outline-none"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center gap-2 bg-black cursor-pointer px-6 py-4 rounded-2xl h-[52px]">
          <p className="text-sm font-medium text-white">Subscribe</p>
          <Image src={cursor} alt="cursor-icon" width={18} height={18} />
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-white font-medium mb-2">
          Already trusted by 1000+ indie founders
        </p>
        <div className="flex justify-center items-center -space-x-2">
          {avatars.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`avatar-${index}`}
              width={30}
              height={40}
              className="rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
