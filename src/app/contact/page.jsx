import FacebookIcon from "../../../public/Contact/facebook.svg";
import GithubIcon from "../../../public/Contact/github.svg";
import EmailIcon from "../../../public/Contact/email.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="max-w-full max-h-full">
      <div className="max-w-7xl mx-auto p-16 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <a
              href="https://www.facebook.com/SR.See"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={FacebookIcon}
                alt="FacebookIcon"
                width={40}
                height={40}
                className="bg-icon"
              />
            </a>
            <a
              href="https://github.com/srseen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={GithubIcon}
                alt="GithubIcon"
                width={40}
                height={40}
                className="bg-icon"
              />
            </a>
            <a
              href="mailto:seereen.2540@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={EmailIcon}
                alt="EmailIcon"
                width={40}
                height={40}
                className="bg-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
