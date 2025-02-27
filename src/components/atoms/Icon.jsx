import Image from "next/image";

export default function Icon({ src, alt }) {
  return (
    <div className="flex items-center space-x-4">
      <Image
        src={src}
        alt={alt}
<<<<<<< HEAD
        width={100}
        height={100}
=======
        width={40}
        height={40}
>>>>>>> 12b48afd20dd19807d01e926ec0ac61a4c8af5e8
        className="bg-icon rounded-full p-1 w-10 h-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
      />
    </div>
  );
}
