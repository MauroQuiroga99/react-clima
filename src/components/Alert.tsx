import { ReactNode } from "react";

const Alert = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" text-white text-center mb-1 uppercase font-bold border-2 rounded-md bg-red-600  ">
      {children}
    </div>
  );
};

export default Alert;
