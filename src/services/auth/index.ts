import { User, UserManager } from 'oidc-client-ts';

export default class AuthService {
  #manager: UserManager;

  constructor(manager: UserManager) {
    this.#manager = manager;
  }

  signIn = async (): Promise<void> => this.#manager.signinRedirect();

  signInSilent = async (): Promise<User | null> =>
    this.#manager.signinSilent().catch(() => null);

  signOut = async (): Promise<void> => this.#manager.signoutRedirect();

  getUser = async (): Promise<User | null> => this.#manager.getUser();

  completeSignIn = async (): Promise<User> =>
    this.#manager.signinRedirectCallback();

  completeSilentSignIn = async (): Promise<void> =>
    this.#manager.signinSilentCallback();
}
