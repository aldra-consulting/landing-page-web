import {
  type HTMLAttributes,
  Slot,
  component$,
  useStylesScoped$,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export default component$<Props>(({ ...props }) => {
  useStylesScoped$(styles);

  return (
    <button type='button' {...props}>
      <Slot />
    </button>
  );
});
