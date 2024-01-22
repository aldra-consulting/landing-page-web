import { $, component$, useOnWindow } from '@builder.io/qwik';

import { auth } from '@project/utils/auth';

export default component$(() => {
  useOnWindow(
    'load',
    $(() =>
      auth()
        .completeSignIn()
        .catch(() => {})
        .finally(() => {
          window.location.replace('/');
        })
    )
  );

  return <span hidden />;
});
