import { Box, Button, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
interface Props {
  onReset: () => void;
}

const ErrorBoundaryWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
  onReset,
}) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} onReset={onReset}>
      {children}
    </ErrorBoundary>
  );
};

const FallbackComponent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Box bgcolor="black" p={2} borderRadius={2}>
      <Typography color="error" fontWeight="bold">
        Error:
      </Typography>
      <Typography color="error" fontWeight="bold" sx={{ ml: 2 }}>
        {error.message}
      </Typography>
      <Button
        onClick={resetErrorBoundary}
        variant="contained"
        sx={{ mt: 2 }}
        color="error"
      >
        Reset
      </Button>
    </Box>
  );
};

export default ErrorBoundaryWrapper;
