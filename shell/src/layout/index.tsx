import { FC, PropsWithChildren } from "react";
import Appbar from "../components/Appbar";
import Box from "@mui/material/Box";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Appbar />
      <Box
        style={{
          paddingTop: "2rem",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
