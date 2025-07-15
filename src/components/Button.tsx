type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "px-[24px] py-[20px] rounded-[8px] border-[1px] border-border-primary font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 gap-[10px] text-md min-w-[238px] font-medium cursor-pointer transform transition-transform duration-200 ease-in-out disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-gradient-to-b from-accent-linear to-accent-linear-2 hover:scale-105 active:scale-95",
    secondary:
      "bg-gradient-to-b from-accent-linear-5 to-accent-linear-5-33 text-text-accent-2 hover:scale-105 active:scale-95 disabled:hover:scale-100",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
