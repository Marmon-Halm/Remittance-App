import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config";

export default function useAuth() {
  const [user, setUser] = useState();
  const [isUserLoading, setIsUserLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsUserLoading(true);

    const unsubscribeFromAuthStateChanged = onAuthStateChanged(
      auth,
      async (user) => {
        try {
          if (user) {
            if (isMounted) {
              setUser(user);
              setIsUserLoading(false);
            }
          } else {
            if (isMounted) {
              setUser(undefined);
              setIsUserLoading(false);
            }
          }
        } catch (error) {
          console.log("Error updating user state:", error);
        }
      }
    );

    return () => {
      isMounted = false;
      unsubscribeFromAuthStateChanged();
    };
  }, []);

  const authPromise = new Promise<User>((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          setUser(user);
          resolve(user);
          setIsUserLoading(false);
        } else {
          setUser(undefined);
          setIsUserLoading(false);
        }
      } catch (error) {
        console.log("Error updating user state:", error);
        reject(new Error("User not found"));
      }
    });
  });

  return {
    user: user,
    authPromise: authPromise,
  };
}