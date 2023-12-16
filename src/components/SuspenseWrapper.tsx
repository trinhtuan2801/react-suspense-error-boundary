import { Box, Skeleton } from "@mui/material";
import { PropsWithChildren, ReactNode, Suspense } from "react";
interface Props {
  FallbackComponent: ReactNode;
}

const SuspenseWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
  FallbackComponent,
}) => {
  return <Suspense fallback={FallbackComponent}>{children}</Suspense>;
};

export default SuspenseWrapper;
