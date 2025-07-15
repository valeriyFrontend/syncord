import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";

const Main = () => {
  return (
    <main className="bg-[url('/img/radial-vignette.svg')] bg-cover bg-center w-full h-full pt-[100px] pb-[8px] justify-center flex">
      <div className="flex flex-col items-center">
        <Image src="/img/logo.png" alt="Logo" width={96} height={96} />
        <h1 className="text-6xl md:text-9xl font-semibold bg-gradient-to-b from-accent-linear to-accent-linear-2 bg-clip-text text-transparent mt-[49px] tracking-[-0.04em]">
          Syncord
        </h1>
        <p className="text-xxs text-center mt-[48px] tracking-[-0.02em] max-w-[500px] text-text-accent px-3">
          Decentralized Intelligence. Real Value. Absolute Control.
          <br />
          <br />
          Welcome to Syncord — the platform where DeFi merges with AI governance
          to define a new standard in decentralized finance.
        </p>
        <div className="flex flex-col md:flex-row gap-[16px] mt-[44px]">
          <Link href="#about">
            <Button>More about</Button>
          </Link>
          <Button variant="secondary" disabled>
            Token converter (Soon)
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Main;
