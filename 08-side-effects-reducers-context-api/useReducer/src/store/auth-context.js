import React from "react";

const AuntContext = React.createContext({
  //Dont need this default value if we use the .Provider along with .Comsumer
  isLoggedIn: false,
});

export default AuntContext;
