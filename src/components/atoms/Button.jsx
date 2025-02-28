import Link from "next/link";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`py-3 px-6 rounded-full shadow-lg transition duration-300 hover:scale-110 ${className}`}
      {...props}
    >
      <Link href={props.href}>{children}</Link>
    </button>
  );
}
