import Aurelia, { StyleConfiguration } from "aurelia";
import { MyApp } from "./my-app";
import * as components from "./components";
// import styles from "./styles/main.scss";

Aurelia.register(
  // StyleConfiguration.shadowDOM({
  //   sharedStyles: [styles],
  // }),
  components
)
  .app(MyApp)
  .start();
