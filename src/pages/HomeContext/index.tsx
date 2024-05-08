import { api } from "methods/api";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Root } from "types/Root";
import { useTranslation } from "react-i18next";
export const homeContext = createContext<HomeDataType>({});

export function HomeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [homeData, setHomeData] = useState<Root | undefined>(undefined);
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  function getHomeData() {
    setStatus("loading");
    axios
      .get<{ data: Root }>(api(language))
      .then(({ data }) => {
        setHomeData(data.data);
        setStatus("done");
      })
      .catch((error) => {
        console.log("error", error);
        setStatus("none");
      });
  }
  useEffect(() => {
    getHomeData();
  }, []);
  return (
    <homeContext.Provider value={{ homeData, status }}>
      {children}
    </homeContext.Provider>
  );
}
type HomeDataType = {
  homeData?: Root;
  //   setContracts: () => void;
  status?: "none" | "loading" | "done";
};
