import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

export class MyApp {
  sidebarOpen: boolean = false;
  darkmode: boolean = true;

  private firebaseConfig = {
    apiKey: "AIzaSyChVVoOJ7QXNELWMcHnVAIRKNugDdkPYCM",
    authDomain: "sqst-web-demo.firebaseapp.com",
    projectId: "sqst-web-demo",
    storageBucket: "sqst-web-demo.appspot.com",
    messagingSenderId: "1051767907094",
    appId: "1:1051767907094:web:68a22b57967ea38bbfe637",
    measurementId: "G-02ZHPC6C23",
  };

  constructor() {
    firebase.initializeApp(this.firebaseConfig);
    firebase.analytics();
    firebase.auth();
  }

  login() {
    console.log("login");
  }

  logout() {
    console.log("logout");
  }

  signup() {
    console.log("signup");
  }
}
