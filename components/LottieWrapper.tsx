"use client"; // forza lato client

import { useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface Props {
  animationData: any;
}

export default function LottieWrapper({ animationData }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // evita che giri lato server
    if (!window.LottieInteractivity) return;

    window.LottieInteractivity.create({
      mode: "scroll",
      player: "#firstLottie",
      actions: [
        {
          visibility: [0, 1],
          type: "seek",
          frames: [0, 180],
        },
      ],
    });
  }, []);

  return (
    <Lottie
      id="firstLottie"
      animationData={animationData}
      loop
      style={{ width: "400px", height: "400px" }}
    />
  );
}
