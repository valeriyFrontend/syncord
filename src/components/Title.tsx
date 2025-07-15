import { JSX } from "react";

type TitleProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export function Title({ children, className = "", level = 1 }: TitleProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeMap = {
    1: "text-9xl font-bold",
    2: "text-6xl font-semibold",
    3: "text-5xl font-semibold",
    4: "text-4xl font-semibold",
    5: "text-3xl font-semibold",
    6: "text-2xl font-semibold",
  };

  return (
    <Tag
      className={`bg-gradient-to-b from-accent-linear to-accent-linear-2 bg-clip-text text-transparent ${sizeMap[level]} ${className}`}
    >
      {children}
    </Tag>
  );
}
