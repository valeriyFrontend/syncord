type HighlightsProps = {
  children: React.ReactNode;
  className?: string;
};

export function Highlights({ children, className = "" }: HighlightsProps) {
  const defaultLineStyle = {
    angle: "0deg",
    background:
      "linear-gradient(90deg, rgba(76, 255, 170, 0) 0%, #73C7FF 100%)",
    borderRadius: "100px",
    height: "1px",
    width: "88px",
  };

  const lineStyle = {
    ...defaultLineStyle,
    background:
      "linear-gradient(90deg, rgba(76, 255, 170, 0) 0%, #73C7FF 100%)",
  };

  const lineStyle2 = {
    ...defaultLineStyle,
    background:
      "linear-gradient(90deg, color(display-p3 0.529 0.773 1.000) 0%, color(display-p3 0.529 1.000 0.694 / 0) 100%)",
  };

  return (
    <div className={`flex items-center gap-2 text-text-accent-2 ${className}`}>
      <div style={lineStyle}></div>
      {children}
      <div style={lineStyle2}></div>
    </div>
  );
}
