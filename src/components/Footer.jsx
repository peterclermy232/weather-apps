import { useContext } from "react";
import AppContext from "../provider/appContext";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <div>
    <p>weather app</p>
    </div>
  );
}

export default Footer;
