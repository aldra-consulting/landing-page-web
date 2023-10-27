import { $, component$, useOnWindow } from '@builder.io/qwik';

import { auth } from '@app/utils/auth';

export default component$(() => {
  const navigateToRoot = $(() => window.location.replace('/'));

  useOnWindow(
    'load',
    $(() => auth().completeSignIn().catch(console.log).finally(navigateToRoot))
  );

  return <span hidden />;
});
