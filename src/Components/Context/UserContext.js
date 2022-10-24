import React from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userState, dispatchUserState] = useReducer(userReducer, {
    accessToken: null,
  });

  const isUserLogged = () => userState.accessToken;

  return (
    <UserContext.Provider
      value={{
        userState,
        dispatchUserState,
        isUserLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
