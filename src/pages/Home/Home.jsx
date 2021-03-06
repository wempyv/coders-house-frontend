import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const history = useHistory();

  function startRegister() {
    history.push("/authenticate");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
          We're working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we're adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button text="Let's Go" onClick={startRegister} />
        </div>
      </Card>
    </div>
  );
};

export default Home;
