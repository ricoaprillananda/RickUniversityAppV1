import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // auth = getAuth(app)

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
