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
        <div className="relative tracking-[-0.02em] max-w-[668px] text-text-accent-3 py-[28px] px-[32px] border-border-secondary border-x-[1px]">
          <h2 className="text-text-accent-4 text-xl md:text-xxl font-semibold">
            Our Mission
          </h2>
          <br />
          <p className="text-sm md:text-3xl">
            At Syncord, we are building the first DeFi architecture fully
            governed by an advanced artificial intelligence substation —{" "}
            <a
              href="https://www.sync.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-accent-4 underline"
            >
              SYNC.AI
            </a>
            . Our mission is to provide a secure, efficient, and transparent
            ecosystem for real-value-driven financial instruments, guided not by
            arbitrary market noise, but by structured logic, intelligent
            learning, and community-validated governance.
          </p>
          <br />
          <br />
          <h2 className="text-text-accent-4 text-xl md:text-xxl font-semibold">
            What Sets Syncord Apart
          </h2>
          <br />
          <p className="text-sm md:text-3xl">
            • AI-Governed Protocols: Syncord Gate, our core functionality, is
            under the direct supervision of{" "}
            <a
              href="https://www.sync.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-accent-4 underline"
            >
              SYNC.AI
            </a>{" "}
            — designed to autonomously manage token transitions, fraud
            detection, staking optimizations, and user interactions. <br />•
            Real Value Indexing: Through our STAIN (Stable Token Algorithm for
            Indexed Neutrality) model, Syncord introduces real value standards
            to DeFi — beyond USD or fiat-pegged illusions. <br />•
            Community-to-Platform Transition: Born from a legacy community of
            token holders, Syncord represents a rebirth through structured
            conversion, progressive decentralization, and fair access to
            next-generation DeFi tools. <br />• Transparent Development: Every
            stage of the Syncord roadmap is community-disclosed, recorded
            through AMA sessions, and verified through AI-audited processes.
          </p>
          <br />
          <br />
          <h2 className="text-text-accent-4 text-xl md:text-xxl font-semibold">
            <a
              href="https://www.sync.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-accent-4 underline"
            >
              SYNC.AI
            </a>{" "}
            Development Stages
          </h2>
          <br />
          <p className="text-sm md:text-3xl">
            The full launch of Syncord Gate is tightly connected with the
            stabilization and learning cycles of our AI Substation. These stages
            include: <br />
            • Model Calibration Phase – Syncord AI trains on legacy data and
            user interactions
            <br /> • Reinforcement Feedback Loop Optimization – Internal
            feedback systems refine decisions
            <br /> • Neural Architecture Convergence – Finalizing architecture
            structure for stable output
            <br /> • Contextual Memory Formation – Syncord learns from
            case-by-case transition behavior
            <br /> • Protocol Supervision Layer Training – AI oversight layer
            over Syncord Gate logic
          </p>
          <br />
          <br />
          <h2 className="text-text-accent-4 text-xl md:text-xxl font-semibold">
            Roadmap 2025
          </h2>
          <br />
          <p className="text-sm md:text-3xl">
            • Transition of legacy tokens (NIMBS, GNIMBS, NFTs) into Syncord
            (Summer 2025) <br />• Launch of Syncord Web Portal and Syncord Gate{" "}
            <br />• SYNC.AI full operational layer deployed (Q3 2025) <br />•
            Early staking interface + issuance of tokenized derivatives (Q3-Q4
            2025) <br />• Listings on major BASE and Ethereum-compatible DEXes,
            incl. Uniswap
            <br />• Strategic integrations with RWA platforms (Real Estate,
            Green Energy) <br />• DAO Mechanics & Governance Dashboard (Q4 2025){" "}
            <br />• Structured Bonds and Derivatives Market Opening (Q4 2025)
          </p>
          <br />
          <br />
          <h2 className="text-text-accent-4 text-xl md:text-xxl font-semibold">
            Explore the Syncord Ecosystem
          </h2>
          <br />
          <p className="text-sm md:text-3xl">
            • Decentralized AI Governance <br />• Syncord Gate — Migration
            Portal
            <br />• STAIN Real-Value Model <br />• Tokenized Derivatives and
            Dynamic Staking <br />• DAO & Governance Tiers <br />• Syncord for
            RWA and Infrastructure Partners redefine what&apos;s possible in
            decentralized finance.
          </p>
          {["bottom-left", "bottom-right", "top-left", "top-right"].map(
            (position) => (
              <Dot key={position} position={position as DotPosition} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SyncordProtocol;
