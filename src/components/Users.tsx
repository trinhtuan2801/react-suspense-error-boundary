import {
  Box, Paper,
  Skeleton,
  Switch,
  Typography
} from "@mui/material";
import { PropsWithChildren, useState } from "react";
import useSWR from "swr";
import { getUsers, userApiEndpoint } from "../api/user";
import SuspenseWrapper from "./SuspenseWrapper";
import ErrorBoundaryWrapper from "./ErrorBoundaryWrapper";
interface Props {}

const Users: React.FC<PropsWithChildren<Props>> = ({}) => {
  const [forceFail, setForceFail] = useState(false);
  const [cacheKey, setCacheKey] = useState(Date.now());

  return (
    <>
      <Box>
        <Box display="flex" alignItems="center">
          <Switch
            color="error"
            checked={forceFail}
            onChange={(e) => setForceFail(e.target.checked)}
          />
          <Typography
            color={forceFail ? "error" : "#00000050"}
            fontWeight="bold"
          >
            Force fail
          </Typography>
        </Box>

        <Box mt={2} />
        <ErrorBoundaryWrapper onReset={() => setCacheKey(Date.now())}>
          <SuspenseWrapper FallbackComponent={<SuspenseFallbackComponent />}>
            <UserList forceFail={forceFail} cacheKey={cacheKey} />
          </SuspenseWrapper>
        </ErrorBoundaryWrapper>
      </Box>
    </>
  );
};

const UserList = ({
  forceFail,
  cacheKey,
}: {
  forceFail: boolean;
  cacheKey: number;
}) => {
  const { data: users = [] } = useSWR(
    [userApiEndpoint, forceFail, cacheKey], // renew cacheKey to prevent useSWR from getting old data from cache
    ([_, forceFail]) => getUsers(forceFail),
    { suspense: true }
  );

  return (
    <Box display="flex" flexDirection="column" rowGap={1}>
      {users.map((user) => (
        <Paper key={user.id} elevation={2} sx={{ p: 2 }}>
          <Typography fontWeight="bold">{user.name}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

const SuspenseFallbackComponent = () => (
  <Box display="flex" flexDirection="column" rowGap={1}>
    {[...Array(5).keys()].map((i) => (
      <Skeleton key={i} animation="wave" variant="rounded" height={56} />
    ))}
  </Box>
);

export default Users;
