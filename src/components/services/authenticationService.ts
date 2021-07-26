import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { IRouter, LoadInstruction } from "aurelia-direct-router";

export default class AuthenticationService {
  private user?: firebase.User;

  public get displayName(): string {
    return this.user
      ? this.user.displayName
        ? this.user.displayName
        : this.user.email
      : "";
  }

  public get isAuthenticated(): boolean {
    return !!this.user;
  }

  private firebaseConfig = {
    apiKey: "AIzaSyChVVoOJ7QXNELWMcHnVAIRKNugDdkPYCM",
    authDomain: "sqst-web-demo.firebaseapp.com",
    projectId: "sqst-web-demo",
    storageBucket: "sqst-web-demo.appspot.com",
    messagingSenderId: "1051767907094",
    appId: "1:1051767907094:web:68a22b57967ea38bbfe637",
    measurementId: "G-02ZHPC6C23",
  };

  constructor(@IRouter private readonly router: IRouter) {
    firebase.initializeApp(this.firebaseConfig);
    firebase.analytics();
    firebase.auth();

    firebase.auth().onAuthStateChanged((user) => {
      console.log("onAuthStateChanged", user);
      this.user = user;
    });
  }

  async login(
    email: string,
    password: string,
    successRedirect?: LoadInstruction | LoadInstruction[]
  ) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.user = userCredential.user;
        console.log(this.user);
        this.router.load(successRedirect ?? "/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  async loginWithGoogle(successRedirect?: LoadInstruction | LoadInstruction[]) {
    var provider = new firebase.auth.GoogleAuthProvider();
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        this.user = result.user;
        console.log(this.user);
        this.router.load(successRedirect ?? "/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  async logout() {
    await firebase.auth().signOut();
  }

  async createAccount(
    email: string,
    password: string,
    successRedirect?: LoadInstruction | LoadInstruction[]
  ) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.user = userCredential.user;
        this.router.load(successRedirect ?? "/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
}
