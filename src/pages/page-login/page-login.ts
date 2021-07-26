import { IRouter } from "aurelia-direct-router";
import AuthenticationService from "../../components/services/authenticationService";

export class PageLogin {
  email: string;
  password: string;

  constructor(
    @IRouter private readonly router: IRouter,
    private readonly authenticationService: AuthenticationService
  ) {}

  async login() {
    await this.authenticationService.login(
      this.email,
      this.password,
      "page-overview"
    );
  }

  async loginWithGoogle() {
    await this.authenticationService.loginWithGoogle("page-overview");
  }
}
