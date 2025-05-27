import React from "react";
import avater from '../../assets/svg/founder.svg'
import Image from "next/image";

export default function Container() {
  return (
    <div className="container md:mx-auto mx-2 bg-white text-black h-full max-w-[774px] px-2 md:px-16 py-6 rounded-[22px] my-16">
      <h1 className="text-[18px] md:text-[22px] font-bold">The Big players are hiding stuff. They rarely talk about it even.</h1>
      <p className="text-sm leading-[32px]">
        They say to work hard, stay consistent blah blah blah <br/> But they are
        showmen and they’ve got leverage <br/> They’ve got Followers, Communities,
        Authority <br/> But you and I have got no one. <br/> There is no one to test our
        products even when we put it out for FREE.<br/> No one to support us on
        Launch Day. <br/> No friends and family to support us because they either
        don’t believe in our dreams or are not walking the same path as us to
        Freedom. We are going to change all that. Build a scaffolding of support
        for ourselves.
      </p>
      <h2 className="text-sm leading-[32px] font-bold">OUR GOAL is to support each other to 10k MRR</h2>
      <h4 className="text-sm leading-[32px] font-semibold">How?</h4>
     <p className="text-sm leading-[32px]">→ Share valuable resources and lessons as we find them </p>
     <p className="text-sm leading-[32px]">→ Support each other with answers to burning questions </p>
     <p className="text-sm leading-[32px]">→ Rally round to help beta test products and leave feedback to be used as testimonials or to improve the product further</p>
     <p className="text-sm leading-[32px]">→ Rally around each other on Launch day to get a product to Number 1 on Producthunt. Testing, sharing, commenting, retweeting for 24 hours. </p>
     <p className="text-sm leading-[32px]">→ Every month we host a show where we invite a Big player in the space and ask them questions that would otherwise go unanswered in the DM’s.</p>

     <p className="text-sm leading-[32px] py-4">At <span className="font-bold">Noisy Founders, </span>we don’t build and launch in a hurry. <br/>
We marinate, cook, perceive the aroma, and then go to market.</p>
<p>I believe every founder needs a booster and rocket to give them that initial lift and push.
<span className="font-bold">And that is what we are here for.</span></p>
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

    <h2 className="text-sm font-medium">Moderator - The Noisy Founders</h2>
    </div>
   
</div>
    </div>
  );
}
