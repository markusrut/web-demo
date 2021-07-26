import AuthenticationService from "./components/services/authenticationService";

export class MyApp {
  sidebarOpen: boolean = true;
  darkmode: boolean = false;

  constructor(private readonly auth: AuthenticationService) {}

  logout() {
    this.auth.logout();
  }
}
