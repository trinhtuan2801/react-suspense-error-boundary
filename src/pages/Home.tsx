import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import UserSection from "../components/UserSection";
interface Props {}

const Home: React.FC<PropsWithChildren<Props>> = ({}) => {
  return (
    <>
      <Box height="100vh" minHeight="fit-content" p={2}>
        <UserSection />
      </Box>
    </>
  );
};

export default Home;
