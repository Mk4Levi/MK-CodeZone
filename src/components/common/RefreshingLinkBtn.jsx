import React from "react";
import { useNavigate } from "react-router-dom";

const RefreshingLinkBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the route
    navigate("/", { replace: true });

    // Trigger a page reload
    window.location.reload();
  };

  return <button onClick={handleClick}>Button</button>;
};

export default RefreshingLinkBtn;
