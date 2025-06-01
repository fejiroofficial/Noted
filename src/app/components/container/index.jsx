import React from "react";
import Image from "next/image";
import avater from "../../assets/svg/founder.svg";

export default function Container() {
  return (
    <div className="container mx-auto bg-white text-black h-full max-w-[774px] px-2 md:px-16 py-6 rounded-[22px] my-16">
      <h1 className="text-[18px] md:text-[22px] font-bold">
        No One Talks About the Messy Side of Hiring.
      </h1>

      <p className="text-sm leading-[32px] mt-4">
        They tell you to “trust the process.” <br />
        To “align your team.” <br />
        To “hire slow and fire fast.” <br />
        All good advice — if you have time, headcount, and structure. <br />
        But what if you`re a small team? <br />
        What if your hiring process is duct-taped together with calendar invites
        and Google Docs? <br />
        You finish the interview. You forget half of what was said. <br />
        Your teammate interviewed the same candidate, but you never sync. <br />
        Now it`s a week later and you're making a decision based on vibes.{" "}
        <br />
        This is where things fall apart.
      </p>

      <h2 className="text-sm leading-[32px] font-bold mt-6">
        NotedHire exists for lean, fast-moving teams that still want to hire
        right.
      </h2>

      <h4 className="text-sm leading-[32px] font-semibold mt-4">
        We're building a tool to:
      </h4>

      <ul className="text-sm leading-[32px] list-none mt-2 space-y-1">
        <li>
          → Capture structured feedback instantly after interviews — while it`s
          fresh
        </li>
        <li>→ Align your team in one shared view without extra meetings</li>
        <li>
          → Create a searchable record of why you said “yes” or “no” to a
          candidate
        </li>
        <li>→ Stop losing good people to sloppy, slow follow-ups</li>
      </ul>
      <p className="text-sm leading-[32px] mt-6">
        But here`s the truth: we`re early too. <br />
        No million followers. No fancy funding. <br />
        Just a product we`re obsessed with and a problem we know well.
        <br />
        That`s why we`re building in public — with you
      </p>

      <h4 className="text-sm leading-[32px] font-semibold mt-4">
        Join the waitlist and you`ll:
      </h4>
      <ul className="text-sm leading-[32px] list-none mt-2 space-y-1">
        <li>→ Help shape the product from day one</li>
        <li>→ Get early access before the masses</li>
        <li>
          → join a private circle of teams who care about thoughtful hiring
        </li>
        <li>→ Be part of launch day — our first push into the world</li>
      </ul>
      <p className="text-sm leading-[32px] py-4">
        We`re not chasing vanity metrics.
      </p>

      <p className="text-sm leading-[32px]">
        We`re building tools that help real teams make better calls — faster.{" "}
        <br />
        Let`s fix hiring. Together. <br />— The NotedHire Team
      </p>

      <div className="flex gap-4 items-center py-6">
        <Image src={avater} alt="avater" />
        <div>
          <h4 className="text-sm font-bold">
            Fejiro Gospel{" "}
            <a
              href="https://instagram.com/FejiroGospel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0080FF] font-medium"
            >
              (@FejiroGospel)
            </a>
          </h4>
          <h2 className="text-sm font-medium">
            Moderator - The Noisy Founders
          </h2>
        </div>
      </div>
    </div>
  );
}
