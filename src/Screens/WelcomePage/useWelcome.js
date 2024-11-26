import { useLazyQuery, useQuery } from "@apollo/client";
import { USER_AUTH } from "../../graphql/queries/User/user.query";
import { toast } from "react-toastify";

const useWelcome = () => {
  const [userAuthenticated, { data: authentication, loading }] = useLazyQuery(
    USER_AUTH,
    {
      fetchPolicy: "network-only",
    }
  );

  return {
    userAuthenticated,
    authentication,
    loading,
  };
};

export default useWelcome;
