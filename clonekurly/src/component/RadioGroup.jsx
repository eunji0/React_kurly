import { createContext } from "react";

export default function RadioGroup({ label, children, ...rest }) {
    const RadioContext = createContext({});
  return (
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
  );
}

  {/* <legend>{label}</legend> */}