import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const { href } = useLocation();

  return (
    <>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge'></meta>

      <title>{head.title}</title>

      <link rel='canonical' href={href} />
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />

      <link rel='preconnect' href='https://rsms.me/' />
      <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />

      {head.meta.map(m => (
        <meta {...m} />
      ))}

      {head.links.map(l => (
        <link {...l} />
      ))}

      {head.styles.map(({ props, style }) => (
        <style {...props} dangerouslySetInnerHTML={style} />
      ))}
    </>
  );
});
