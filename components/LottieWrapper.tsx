"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieWrapper({ animationData }: { animationData: any }) {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!lottieRef.current) return;
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const frame = scrollPercent * (lottieRef.current.getDuration(true) ?? 0);
      lottieRef.current.goToAndStop(frame, true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={false}
      style={{ width: 400, height: 400 }}
    />
  );
}
