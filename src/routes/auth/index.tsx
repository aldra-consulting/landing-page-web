import { $, component$, useOnWindow } from '@builder.io/qwik';

import { auth } from '@app/utils/auth';

export default component$(() => {
  const navigateToRoot = $(() => window.location.replace('/'));

  useOnWindow(
    'load',
    $(() => auth().completeSignIn().then(navigateToRoot))
  );

  return <span hidden />;
});
