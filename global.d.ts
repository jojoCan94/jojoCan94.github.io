declare global {
  interface Window {
    LottieInteractivity?: {
      create: (config: {
        mode: string;
        player: string;
        actions: Array<{
          visibility: [number, number];
          type: string;
          frames: [number, number];
        }>;
      }) => void;
    };
  }
}

export {};
