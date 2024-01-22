import { type User, type UserManager } from 'oidc-client-ts';

export default class AuthService {
  #manager: UserManager;

  constructor(manager: UserManager) {
    this.#manager = manager;
  }

  signIn = async (): Promise<void> => this.#manager.signinRedirect();

  signInSilent = async (): Promise<User | null> => this.#manager.signinSilent();

  signOut = async (): Promise<void> => this.#manager.signoutRedirect();

  getUser = async (): Promise<User | null> =>
    this.#manager.getUser().then((user) => {
      if (user) {
        return user;
      }

      throw new Error('User not found');
    });

  completeSignIn = async (): Promise<void> =>
    this.#manager.signinCallback().then();
}
