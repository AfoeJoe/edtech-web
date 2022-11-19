import { CssBaseline } from '@geist-ui/core';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Fragment } from 'react';

class MyDocument extends Document {
  /*   static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CssBaseline.flush();

    return {
      ...initialProps,
      styles: [
        <Fragment key="1">
          {initialProps.styles}
          {styles}
        </Fragment>,
      ],
    };
  } */

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

export async function getStaticProps() {
  const initialProps = {};
  const styles = CssBaseline.flush();

  return {
    ...initialProps,
    styles: [<Fragment key="1">{styles}</Fragment>],
  };
}
