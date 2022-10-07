import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export const About = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div style={{ backgroundColor: "teal", padding: "1rem", color: "white" }}>
      <h2>About Page</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default About;
