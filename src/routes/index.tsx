import {
  $,
  component$,
  useOnWindow,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Avatar from '@project/components/avatar';
import Logo from '@project/components/logo';
import SignInButton from '@project/components/sign-in-button';
import { Theme } from '@project/enums';
import { auth } from '@project/utils/auth';

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
        .then((loggedInUser) => {
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
      .catch(() => {})
      .finally(() => {
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
      <div id='logo-slot'>
        <Logo theme={Theme.DARK} />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra er et norsk konsulenthus som bistår bedrifter med å finne smarte løsninger til morgendagends utfordringer.',
    },
  ],
};
