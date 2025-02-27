import Image from "next/image";

export default function Icon({ src, alt }) {
  return (
    <div className="flex items-center space-x-4">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="bg-icon rounded-full p-1 w-10 h-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
      />
    </div>
  );
}
