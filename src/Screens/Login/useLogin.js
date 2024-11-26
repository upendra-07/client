import { useMutation } from "@apollo/client";
import { SIGN_IN_USER } from "../../graphql/mutations/User/user.mutation";
import { toast } from "react-toastify";
import { ROUTES_CONST } from "../../Routes/RouteConstant";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const [userSignIn] = useMutation(SIGN_IN_USER, {
    onCompleted: (res) => {
      // Store the token in localStorage
      localStorage.setItem("authToken", res.userSignIn.token);
      // Confirm the token was set before navigating
      toast.success("Login successful!");
      navigate(`${ROUTES_CONST.HOME}`, {
        state: { token: res.userSignIn.token },
      });
    },
    onError: (error) => {
      toast.error(`Login failed! ${error.message}`);
    },
  });

  return {
    userSignIn,
  };
};

export default useLogin;
