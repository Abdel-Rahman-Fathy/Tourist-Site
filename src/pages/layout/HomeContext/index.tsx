import { api } from "methods/api";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Root } from "types/Root";
export const homeContext = createContext<HomeDataType>({});

export function HomeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [homeData, setHomeData] = useState<Root | undefined>(undefined);
  function getHomeData() {
    axios
      .get<{ data: Root }>(api(), {
        params: {
          lang: "en",
        },
      })
      .then(({ data }) => {
        setHomeData(data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  useEffect(() => {
    getHomeData();
  }, []);
  return (
    <homeContext.Provider value={{ homeData }}>{children}</homeContext.Provider>
  );
}
type HomeDataType = {
  homeData?: Root;
  //   setContracts: () => void;
};
