"use client";

import Link from "next/link";
import { EmailIcon, FacebookIcon, GithubIcon } from "@components/atoms/Icon";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <Link
            href="https://github.com/srseen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </Link>
          <h3>Github</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Link
            href="mailto:seereen.2540@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </Link>
          <h3>Email</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Link
            href="https://www.facebook.com/SR.See"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </Link>
          <h3>Facebook</h3>
        </div>
      </div>
    </div>
  );
}
