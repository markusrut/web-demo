import Aurelia, { StyleConfiguration } from "aurelia";
import { MyApp } from "./my-app";
// import styles from "./styles/main.scss";

Aurelia
  // .register(
  //   StyleConfiguration.shadowDOM({
  //     sharedStyles: [styles],
  //   })
  // )
  .app(MyApp)
  .start();
