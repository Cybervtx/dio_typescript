import { createContext } from "react";

interface IAppContext {
  user: string;
  isLogedIn: boolean;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const user = "Diogo Caldas";
  const isLogedIn = false;

  return (
    <AppContext.Provider value={{ user, isLogedIn }}>
      {children}
    </AppContext.Provider>
  );
};
