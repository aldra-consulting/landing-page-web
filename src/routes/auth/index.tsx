import { $, component$, useOnWindow } from '@builder.io/qwik';

import { auth } from '@app/utils/auth';

export default component$(() => {
  useOnWindow(
    'load',
    $(() => auth().completeSignIn())
  );

  return <span hidden />;
});
