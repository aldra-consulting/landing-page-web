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

import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);

  const user = useStore<{ name?: string }>({});

  useOnWindow(
    'load',
    $(async () => {
      user.name = (await auth.getUser())?.profile.name;
    })
  );

  const signIn = $(() => auth.signIn());

  const signOut = $(() =>
    auth.signOut().then(() => {
      user.name = undefined;
    })
  );

  return (
    <main id='page'>
      <div id='avatar-slot'>
        {user.name ? (
          <Avatar title={user.name} onClick$={signOut} />
        ) : (
          <SignInButton onClick$={signIn}>Logg inn</SignInButton>
        )}
      </div>
      <Logo id='logo' theme={Theme.DARK} />
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra er et norsk konsulenthus som bistår bedrifter med å finne smarte løsninger til morgendagends utfordringer.'
    }
  ]
};
