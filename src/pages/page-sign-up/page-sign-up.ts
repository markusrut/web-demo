import { IRouter } from "aurelia-direct-router";
import AuthenticationService from "../../components/services/authenticationService";

export class PageSignUp {
  email: string;
  password: string;

  constructor(
    @IRouter private readonly router: IRouter,
    private readonly auth: AuthenticationService
  ) {}

  async createAccount() {
    await this.auth.createAccount(this.email, this.password, "page-overview");
  }

  async loginWithGoogle() {
    await this.auth.loginWithGoogle();
  }
}
