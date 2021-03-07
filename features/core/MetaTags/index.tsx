import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  description?: string;
};

const MetaTags: React.FC<Props> = ({ children, title, description }) => {
  return (
    <Head>
      {children}
      <title>{title ?? "WorkAttack - Sejá Bemvindo"}</title>
      <meta name='title' content={title ?? "WorkAttack - Sejá Bemvindo"} />
      <meta
        name='description'
        content={
          description ??
          "Workattack ajuda muitas marcas nacionais e globais a entregar suas mensagens ao público certo com conteúdo original."
        }
      />

      <meta
        name='keywords'
        content='WorkAttack, work attack, Angola, design, programação, work attack angola, flyer, luanda, design angola, programação angola, Accessibility, Javascript Angola, 3D, Blender Angola'
      />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://workattackangola.com/' />
      <meta
        property='og:title'
        content={title ?? "WorkAttack - Sejá Bemvindo"}
      />
      <meta
        property='og:description'
        content={
          description ??
          "Workattack ajuda muitas marcas nacionais e globais a entregar suas mensagens ao público certo com conteúdo original."
        }
      />
      <meta
        property='og:image'
        content='/images/gallery/banners_services/01.jpeg'
      />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://workattackangola.com/' />
      <meta
        property='twitter:title'
        content={title ?? "WorkAttack - Sejá Bemvindo"}
      />
      <meta
        property='twitter:description'
        content={
          description ??
          "Workattack ajuda muitas marcas nacionais e globais a entregar suas mensagens ao público certo com conteúdo original."
        }
      />
      <meta
        property='twitter:image'
        content='/images/gallery/banners_services/01.jpeg'
      />
    </Head>
  );
};

export default MetaTags;
