export type DotPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export function Dot({ position = "top-left" }: { position?: DotPosition }) {
  const positionMap = {
    "bottom-left": "bottom-[-2px] left-[-2px]",
    "bottom-right": "bottom-[-2px] right-[-2px]",
    "top-left": "top-[-2px] left-[-2px]",
    "top-right": "top-[-2px] right-[-2px]",
  };

  return (
    <span
      className={`absolute ${positionMap[position]} w-[3px] h-[3px] rounded-full bg-text-accent-5`}
    />
  );
}
