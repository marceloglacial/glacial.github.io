import Head from 'next/head';

const Header = (props) => {
  const GA_MEASUREMENT_ID = `UA-12989788-1`;
  return (
    <Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
      <title>
        Marcelo Glacial - Front-End Developer, Web Developer and Web Designer
      </title>
      <meta name='robots' content='index, follow' />
      <meta
        name='description'
        content='Marcelo Glacial - Front-End Developer and Web Designer'
      />
      <meta
        name='keywords'
        content='Photoshop, Sketch, Front-End, Webdesign, Webdesigner, Web Developer, Git, JS, Bootstrap'
      />
      <meta property='og:title' content='Marcelo Glacial' />
      <meta
        property='og:description'
        content='Front-End Developer and Web Designer'
      />
      <meta property='og:image' content='tile-wide.png' />
      <link rel='apple-touch-icon' href='apple-touch-icon.png' />
    </Head>
  );
};
export default Header;
