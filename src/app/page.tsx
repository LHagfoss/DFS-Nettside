"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const preloadResources = async () => {
      try {
        await router.prefetch('/hjem');
        router.push("/hjem");
      } catch (error) {
        console.error('Preload failed:', error);
        router.push("/hjem");
      }
    };

    preloadResources();
  }, [router]);

  return null;
}
