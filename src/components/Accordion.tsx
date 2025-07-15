import { Disclosure } from "@headlessui/react";
import Image from "next/image";

const items = [
  {
    content:
      "The Syncord token is the native utility and governance token used for staking, voting, liquidity provision, and accessing all platform features. It follows a deflationary model with a fixed supply of 75 billion tokens.",
    id: 1,
    title: "1. What is the Syncord token used for?",
  },
  {
    content:
      "Token conversion is done via the Syncord Gate.\n\nGNIMB is converted at a fixed rate: 1 GNIMB = 64 Syncord tokens\n\nNIMB is converted based on market price or initial staking value.",
    id: 2,
    title: "2. How can I convert my old tokens (GNIMB/NIMB) to Syncord?",
  },
  {
    content: "No. All conversions through Syncord Gate are one-way and final.",
    id: 3,
    title: "3. Is the conversion reversible?",
  },
  {
    content:
      "Converted tokens are locked for 180 days, followed by 180 days of gradual unlocking (1/180 per day).",
    id: 4,
    title: "4. What is the vesting period for converted tokens?",
  },
  {
    content:
      "Once unlocked, Syncord tokens can be sold or used for staking, governance, or liquidity pools.",
    id: 5,
    title: "5. Will I be able to sell my Syncord tokens?",
  },
  {
    content:
      "Converted holders gain:\n\nVoting rights in DAO\n\nProfit sharing\n\nPlatform fee reductions\n\nEarly access to new DeFi tools",
    id: 6,
    title: "6. What are the benefits of converting GNIMB to Syncord?",
  },
  {
    content:
      "Initial listings will be on BASE-based DEXes like Uniswap and Aerodrome, with a planned CEX listing (Coinbase) by the end of 2025.",
    id: 7,
    title: "7. What exchanges will Syncord list?",
  },
  {
    content:
      "SYNC AI is an integrated assistant that helps users with wallet setup, staking, governance, and navigation of Syncord features.",
    id: 8,
    title: "8. What is SYNC AI?",
  },
  {
    content:
      "You will not have access to Syncord’s new platform, governance, or profit-sharing features. However, you may continue to trade your tokens independently on existing liquidity pools.",
    id: 9,
    title: "9. What happens if I don’t convert my GNIMB or NIMB tokens?",
  },
  {
    content:
      "DAO members will benefit from profit-sharing, voting influence tiers, and proposal-based incentives, depending on their participation and governance history.",
    id: 10,
    title: "10. Will DAO participants be rewarded?",
  },
  {
    content:
      "All eligible staked NIMB and GNIMB will be verified and converted to Syncord. Real holders will not lose any tokens during migration.\n\nThe process for converting old NFTs will follow similar principles to the conversion of NIMBS and GNIMBS into SYNCORD tokens. The key difference lies in an additional verification step: our system will first review when the NFT was purchased, at what price, and under what terms.",
    id: 11,
    title:
      "11. What will happen to tokens currently staked or in NFTs on the Nimbus platform?",
  },
];

export function Accordion({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-[15px] w-full max-w-[960px] mx-auto ${className}`}
    >
      {items.map((item) => (
        <Disclosure key={item.id}>
          {({ open }) => (
            <div className="border border-border-secondary rounded-[15px]">
              <Disclosure.Button className="w-full flex justify-between items-center py-8 px-11 text-left text-sm font-medium text-text-accent-3 cursor-pointer">
                {item.title}
                <Image
                  src="/icons/chevron-down.svg"
                  alt="Chevron"
                  width={24}
                  height={24}
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                transition
                className="text-text-accent-6 -mt-4 px-11 pb-8 origin-top transition duration-100 ease-out data-closed:-translate-y-6 data-closed:opacity-0 whitespace-pre-line"
              >
                {item.content}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
