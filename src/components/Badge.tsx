type BadgeProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "danger";
  className?: string;
};

const colorMap = {
  danger: "bg-red-100 text-red-800",
  primary: "text-text-accent-5",
  secondary: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
};

export function Badge({
  children,
  className = "",
  color = "primary",
}: BadgeProps) {
  return (
    <span
      className={`inline-block px-3.5 py-2 rounded-[100px] text-xs border-gradient bg-black ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
