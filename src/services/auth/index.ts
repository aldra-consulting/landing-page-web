import { User, UserManager, Log } from 'oidc-client-ts';

export default class AuthService {
  #manager: UserManager;

  constructor(manager: UserManager) {
    this.#manager = manager;
    Log.setLogger(console);
    Log.setLevel(Log.DEBUG);
  }

  signIn = async (): Promise<void> => this.#manager.signinRedirect();

  signInSilent = async (): Promise<User | null> =>
    this.#manager.signinSilent().catch(() => null);

  signOut = async (): Promise<void> => this.#manager.signoutRedirect();

  getUser = async (): Promise<User | null> => this.#manager.getUser();

  completeSignIn = async (): Promise<void> =>
    this.#manager.signinCallback().then();

  completeSilentSignIn = async (): Promise<void> =>
    this.#manager.signinSilentCallback();
}
