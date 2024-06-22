import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotVaild() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/en");
  }, []);
  return <></>;
}

export default NotVaild;
