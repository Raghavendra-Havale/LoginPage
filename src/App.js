import "./App.css";
import React from "react";

import { useWeb3React } from "@web3-react/core";
import { injected } from "./components/wallet/Connectors";
import Login from "./components/wallet/login";
import ManualLogin from "./components/wallet/manualLogin";

function App() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const connectMetamask = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };
  const disconnect = async () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="App my-4">
      {!active && (
        <button
          className="button glow-button my-4"
          onClick={connectMetamask}
          color="blue"
          height="5"
        >
          Connect to MetaMask
        </button>
      )}
      <br />
      {active ? (
        <span className="text">
          Connected with <br /> <b>{account}</b>
        </span>
      ) : (
        <span span className="text">
          Not connected
        </span>
      )}
      <br />

      {active && (
        <button className="button glow-button" onClick={disconnect}>
          Disconnect
        </button>
      )}
      <h4>OR</h4>

      <Login/>
      <h4>OR</h4>
      <ManualLogin />
    </div>
  );
}

export default App;
