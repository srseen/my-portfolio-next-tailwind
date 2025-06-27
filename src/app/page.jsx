import Image from "next/image";
import MyImage from "@public/Image/my-image.jpg";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { GithubIcon } from "@/components/atoms/Icon";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10 py-10 max-w-4xl mx-auto">
      <div className="w-3/4 sm:w-4/5 lg:w-1/2">
        <Image
          src={MyImage}
          className="block mx-auto lg:mx-0 rounded-3xl shadow-2xl shadow-gray-950 transition-transform duration-300 hover:scale-110"
          alt="Profile"
          width="500"
          height="400"
          loading="lazy"
        />
      </div>
      <div className="w-4/5 lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl font-bold leading-tight mb-5">
          Hi, I&apos;m Seereen Yangpaknam
        </h1>
        <p className="text-lg mb-5">
          As a Junior Fullstack Programmer, I am proficient in React.js,
          Next.js, Angular, Node.js, Express and NestJS. I have experience
          working with databases such as MySQL, PostgreSQL and MongoDB. I am
          eager to learn and grow in the field of software development, and I am
          enthusiastic about tackling new challenges and contributing to
          innovative projects.
        </p>
        <div className="flex flex-row justify-center item-center md:flex-row gap-4 mt-6">
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
          <Button href="/projects" className="primary-color">
            View Projects
          </Button>
          <Button
            href="/contact"
            className="bg-gray-400 dark:bg-gray-500 text-black dark:text-white"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}
