import { decodeToken } from "react-jwt";

const verifyToken = (token) => {
  if (!token) return null;

  const decodedToken = decodeToken(token);
  if (!decodedToken) return null;

  // Check if the token is expired
  const currentTime = Date.now() / 1000; // Convert to seconds
  if (decodedToken.exp < currentTime) {
    return null; // Token is expired
  }

  return decodedToken;
};

export default verifyToken;
