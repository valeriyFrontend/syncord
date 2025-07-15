import Image from "next/image";
import Link from "next/link";

import { Accordion } from "@/components/Accordion";
import { Badge } from "@/components/Badge";
import { Highlights } from "@/components/Highlights";
import { Title } from "@/components/Title";

const Benefits = () => {
  const benefits = [
    {
      description: "Faster growth",
      title: "12X",
    },
    {
      description: "Increased efficiency",
      title: "62%",
    },
    {
      description: "Increased revenue",
      title: "78%",
    },
    {
      description: "Active AI responses",
      title: "5.7M",
    },
    {
      description: "Satisfied Clients",
      title: "15 000+",
    },
  ];

  return (
    <section className="w-full h-full pt-[183px] pb-41 justify-center flex flex-col items-center">
      <Badge>Advantages</Badge>
      <Title level={2} className="max-w-[668px] mt-6 text-center">
        Explore the Benefits of Syncord AI
      </Title>
      <Image
        src="/img/planet.png"
        alt="Planet"
        width={180}
        height={180}
        className="mt-20"
      />
      <Image
        src="/img/flower.svg"
        alt="Benefits"
        width={80}
        height={80}
        className="mt-30"
      />
      <Highlights className="mt-16">Highlights</Highlights>
      <div className="flex flex-wrap max-w-[960px] w-full mb-21">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-3 mt-16 py-12 px-8 text-center ${
              benefits.length % 2 === 1 && index === benefits.length - 1
                ? "w-full"
                : "w-1/2"
            }`}
          >
            <p className="text-gradient text-6xl md:text-8xl font-semibold">
              {benefit.title}
            </p>
            <p className="text-gradient text-xl md:text-2xl font-semibold">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center w-full bg-[url('/img/radial-vignette.svg')] bg-top bg-size-100% bg-no-repeat">
        <Badge className="mt-30">Advantages</Badge>
        <Title level={2} className="max-w-[668px] mt-6 text-center">
          Frequently Asked Questions
        </Title>
        <Accordion className="mt-20" />
        <Image
          src="/img/flower.svg"
          alt="Benefits"
          width={80}
          height={80}
          className="mt-35"
        />
        <Highlights className="mt-16">Contact Us</Highlights>
        <p className="text-gradient text-xl font-semibold mt-26">About</p>
        <Link
          href="mailto:hi@syncord.com"
          className="text-gradient text-2xl font-semibold mt-3"
        >
          hi@syncord.com
        </Link>
      </div>
    </section>
  );
};

export default Benefits;
