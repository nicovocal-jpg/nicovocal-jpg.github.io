import Head from "next/head";
import { METADATA, SOCIAL_LINKS } from "../../constants";

const Meta = () => (
  <Head>
    <title>{METADATA.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={METADATA.description} />
    <meta name="keywords" content={METADATA.keywords} />
    <meta name="robots" content="index,follow" />
    <meta name="author" content={METADATA.author} />
    <meta name="theme-color" content={METADATA.themeColor} />
    <link rel="canonical" href={METADATA.siteUrl} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={METADATA.title} />
    <meta property="og:description" content={METADATA.description} />
    <meta property="og:url" content={METADATA.siteUrl} />
    <meta property="og:site_name" content={METADATA.author} />
    <meta property="og:image" content={`${METADATA.siteUrl}og-image.png`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={METADATA.title} />
    <meta name="twitter:description" content={METADATA.description} />
    <meta name="twitter:image" content={`${METADATA.siteUrl}og-image.png`} />

    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="manifest" href="/manifest.json" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: METADATA.author,
          url: METADATA.siteUrl,
          jobTitle: "Biomedical Engineer",
          sameAs: SOCIAL_LINKS.filter((l) => l.name !== "mail").map((l) => l.url),
        }),
      }}
    />
  </Head>
);

export default Meta;
