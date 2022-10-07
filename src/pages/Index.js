import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../Ulities/login";

export const Index = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div style={{ backgroundColor: "teal", padding: "1rem", color: "white" }}>
      <h2>Index Page</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={() => setUser(null)}>logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
