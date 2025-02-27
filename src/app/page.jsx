import Image from "next/image";
import MyImage from "@public/Image/My-image.png";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center gap-10 py-10 max-w-4xl mx-auto">
      <div className="w-full sm:w-4/5 lg:w-1/2">
        <Image
          src={MyImage}
          className="block mx-auto lg:mx-0 rounded-3xl shadow-2xl shadow-gray-950 transition-transform duration-300 hover:scale-110"
          alt="Profile"
          width="400"
          height="300"
          loading="lazy"
        />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl font-bold leading-tight mb-5">
          Hi, I&apos;m Seereen Yangpaknam
        </h1>
        <p className="text-lg mb-5">
          As a Junior Fullstack Programmer, I am proficient in React.js,
          Next.js, Node.js, and Express.js. I have experience working with
          databases such as MySQL and MongoDB. I am eager to learn and grow in
          the field of software development, and I am enthusiastic about
          tackling new challenges and contributing to innovative projects.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Button href="/about" className="primary-color">
            View Projects
          </Button>
          <Button href="/about">Contact Me</Button>
        </div>
      </div>
    </div>
  );
}
