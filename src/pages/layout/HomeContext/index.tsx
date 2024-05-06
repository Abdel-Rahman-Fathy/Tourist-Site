import { api } from "methods/api";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const homeContext = createContext<HomeDataType>({ homeData: "" });

export function HomeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [homeData, setHomeData] = useState<string>("");
  function getHomeData() {
    axios
      .get(api(), {
        params: {
          lang: "en",
        },
      })
      .then((res) => {
        setHomeData(res.data.data);
        console.log("home", homeData);
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
  homeData: string;
  //   setContracts: () => void;
};
