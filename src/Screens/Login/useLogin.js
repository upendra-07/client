import { useMutation } from "@apollo/client";
import {
  SIGN_IN_USER,
  SIGN_UP_USER,
} from "../../graphql/mutations/User/user.mutation";
import { toast } from "react-toastify";
import { ROUTES_CONST } from "../../Routes/RouteConstant";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const [userSignIn, { loading: signInLoading }] = useMutation(SIGN_IN_USER, {
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

  const [userSignUp, { loading: signUpLoading }] = useMutation(SIGN_UP_USER, {
    onCompleted: () => {
      toast.success("Account created successfully!");
      navigate(`${ROUTES_CONST.LOGIN}`);
    },
    onError: (error) => {
      toast.error(`Login failed! ${error.message}`);
    },
  });

  return {
    userSignIn,
    userSignUp,
    loading: signInLoading || signUpLoading,
  };
};

export default useLogin;
