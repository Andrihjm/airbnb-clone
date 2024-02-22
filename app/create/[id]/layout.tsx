import type { ReactNode } from "react";

const layoutCreation = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-10">{children}</div>
  );
};

export default layoutCreation;
