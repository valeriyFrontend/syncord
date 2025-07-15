import Image from "next/image";

import { Dot, DotPosition } from "../components/Dot";

const SyncordProtocol = () => {
  return (
    <section
      className="w-full h-full pt-[183px] pb-[8px] justify-center flex flex-col items-center"
      style={{
        backgroundImage:
          "url('/img/section-glow-left.svg'), url('/img/section-glow-right.svg')",
        backgroundPosition: "top left, top right",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="max-w-[668px] w-full border-border-secondary border-x-[1px] px-[32px] py-[40px]">
        <Image src="/img/shape.svg" alt="Logo" width={80} height={80} />
      </div>
      <div className="border-border-secondary border-y-[1px] w-full flex justify-center">
        <p className="relative text-xxl tracking-[-0.02em] max-w-[668px] text-text-accent-3 py-[28px] px-[32px] border-border-secondary border-x-[1px]">
          At <span className="text-text-accent-4">Syncord Protocol</span>,
          we&apos;re on a mission to reshape DeFi through decentralized
          AI-powered solutions. Founded by a collective of innovators and
          blockchain pioneers, our journey started with the vision to unlock new
          possibilities in finance and governance. <br />
          <br /> Driven by a passion for transparency and a commitment to real
          impact, we&apos;ve evolved into a leading platform at the{" "}
          <span className="text-text-accent-4">
            intersection of AI, DAO, and decentralized exchanges
          </span>
          . Our diverse team combines expertise in smart contracts, machine
          learning, and tokenomics to deliver tailored DeFi tools for every
          user.
          <br />
          <br /> Whether you&apos;re looking to optimize trading strategies,
          automate liquidity management, or{" "}
          <span className="text-text-accent-4">
            participate in community-driven governance
          </span>
          , we&apos;re here to empower your DeFi experience.{" "}
          <span className="text-text-accent-4">Join us as we continue</span> to
          redefine what&apos;s possible in decentralized finance.
          {["bottom-left", "bottom-right", "top-left", "top-right"].map(
            (position) => (
              <Dot key={position} position={position as DotPosition} />
            )
          )}
        </p>
      </div>
    </section>
  );
};

export default SyncordProtocol;
