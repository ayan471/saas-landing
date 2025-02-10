"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import CustomLoader from "./CustomLoader";

const LoadingContext = createContext<
  | {
      isLoading: boolean;
      setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  //const pathname = usePathname();
  //const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    handleStart();
    setTimeout(handleComplete, 1000); //Simulate loading time
  }, []); //Removed unnecessary dependencies

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <CustomLoader />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
