import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Logo from '@app/components/logo';
import { Theme } from '@app/enums';

import styles from './styles.css?inline';

import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <main id='page'>
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
