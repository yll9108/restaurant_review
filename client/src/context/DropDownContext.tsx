"use client";

import { ReactNode, createContext, useState } from "react";
import {
  ReadonlyURLSearchParams,
  useSearchParams,
  useRouter,
} from "next/navigation";

type DropDownContextProps = {
  searchParams: ReadonlyURLSearchParams;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  // changedTabs: (tabName: string) => void;
};
export const DropDownContext = createContext<DropDownContextProps>(
  {} as DropDownContextProps
);

export function DropDownContextProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "favorite"
  );
  // const changedTabs = (tabName: string) => {
  //   setActiveTab(tabName);
  //   router.push(`/users?tab=${tabName}`);
  // };

  return (
    <DropDownContext.Provider
      // value={{ searchParams, activeTab, setActiveTab, changedTabs }}
      value={{ searchParams, activeTab, setActiveTab }}
    >
      {children}
    </DropDownContext.Provider>
  );
}
