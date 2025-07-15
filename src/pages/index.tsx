import { DM_Sans } from "next/font/google";
import Head from "next/head";

import Benefits from "@/sections/Benefits";
import Main from "@/sections/Main";
import SyncordProtocol from "@/sections/SyncordProtocol";

const dmSans = DM_Sans({ display: "swap", subsets: ["latin"] });

export default function Home() {
  return (
    <div className={dmSans.className}>
      <Head>
        <title>Syncord AI</title>
      </Head>
      <Main />
      <SyncordProtocol />
      <Benefits />
      <footer className="py-6 px-3 text-center">
        <p className="text-text-accent-2 text-xs font-semibold">
          © 2025 Syncord. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
