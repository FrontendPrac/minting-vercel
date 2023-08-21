import React, { useContext, useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import { toast } from "react-toastify";

const AuthContext = React.createContext();
export function useGlobalContext() {
  return useContext(AuthContext);
}

export function GlobalContextProvider({ children }) {
  const { status, chainId, switchChain } = useMetaMask();

  const [currentUser, SetCurrentUser] = useState();
  const [network, setNetwork] = useState("");
  const [isloading, Setloading] = useState(true);
  const [alertcon, setAlertCon] = useState(false);
  const [alertSepholia, setAlertSepholia] = useState(false);
  const [chainID, setChainID] = useState();
  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    Setloading(false);
    if (status === "connected") {
      setAlertCon(false);
      if (chainId?.toString() === "0xaa36a7") {
        setAlertSepholia(false);
      } else {
        toast.dark("Connect to sepholia network", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }, [chainId]);

  useEffect(() => {
    if (status === "unavailable") {
      toast.error("Please install metamask", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [status]);

  const value = {
    currentUser,
    SetCurrentUser,
    network,
    setNetwork,
    alertcon,
    chainID,
    switchChain,
    alertSepholia,
    isSidebar,
    setIsSidebar,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isloading && children}
    </AuthContext.Provider>
  );
}
