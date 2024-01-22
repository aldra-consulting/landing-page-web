import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {}

export default component$<Props>(({ title, ...props }) => {
  useStylesScoped$(styles);

  return (
    <abbr title={title} {...props}>
      {title
        ?.match(/\b(\w)/g)
        ?.join('')
        .toUpperCase()
        .substring(0, 2)}
    </abbr>
  );
});
