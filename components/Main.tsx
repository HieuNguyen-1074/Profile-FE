"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Loading from "./Loading";
import Navigation from "./Navigation";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <div>
        <Loading isHidden={!isLoading} setVisible={setIsLoading} />
      </div>
      {isLoading || (
        <div className="bg-[#1a1d51]   w-screen h-screen  flex items-center">
          <Navigation />
          {children}
        </div>
      )}
    </div>
  );
}
