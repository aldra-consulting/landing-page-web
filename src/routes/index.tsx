import {
  $,
  component$,
  useOnWindow,
  useStore,
  useStylesScoped$
} from '@builder.io/qwik';

import Avatar from '@app/components/avatar';
import Logo from '@app/components/logo';
import SignInButton from '@app/components/sign-in-button';
import { Theme } from '@app/enums';
import { auth } from '@app/utils/auth';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const user = useStore<{ name?: string; isLoading?: boolean }>({});

  useOnWindow(
    'load',
    $(() =>
      auth()
        .getUser()
        .catch(auth().signInSilent)
        .catch(() => null)
        .then(loggedInUser => {
          user.name = loggedInUser?.profile.name;
        })
        .finally(() => {
          user.isLoading = false;
        })
    )
  );

  const signIn = $(() => auth().signIn());

  const signOut = $(() =>
    auth()
      .signOut()
      .then(() => {
        user.name = undefined;
        user.isLoading = undefined;
      })
  );

  return (
    <main id='page'>
      {user.isLoading === false && (
        <div id='avatar-slot'>
          {user.name ? (
            <Avatar title={user.name} onClick$={signOut} />
          ) : (
            <SignInButton onClick$={signIn}>Logg inn</SignInButton>
          )}
        </div>
      )}
      <Logo id='logo' theme={Theme.DARK} />
    </main>
  );
});
