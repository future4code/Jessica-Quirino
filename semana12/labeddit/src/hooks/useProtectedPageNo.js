import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectedPageNo = () => {
const history = useHistory();

useEffect(() => {
const token = window.localStorage.getItem("token");

if (token) {
history.push("/userPage");
}
}, [history]);
};

export default useProtectedPageNo