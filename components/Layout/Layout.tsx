import React, { FC } from "react";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div></div>
      <div className="relative z-[10000]">{children}</div>
      <div></div>
    </React.Fragment>
  );
};

export default Layout;
