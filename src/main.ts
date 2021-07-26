import Aurelia, { StyleConfiguration } from "aurelia";
import { RouterConfiguration } from "aurelia-direct-router";
import { MyApp } from "./my-app";
import * as components from "./components";
import * as pages from "./pages";
// import styles from "./styles/main.scss";

Aurelia.register(
  RouterConfiguration.customize({
    useUrlFragmentHash: false,
  }),
  // StyleConfiguration.shadowDOM({
  //   sharedStyles: [styles],
  // }),
  pages,
  components
)
  .app(MyApp)
  .start();
