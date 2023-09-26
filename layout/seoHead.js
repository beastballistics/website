import Head from "next/head";
export default function SeoHead({ props }) {
  return (
    <Head>
      {props.reverseTitle && <title>Beast Ballistics - {props.title}</title>}
      {!props.reverseTitle && <title>{props.title} - Beast Ballistics</title>}
      <meta name="description" content={props.seoDescription} />
      <meta property="og:title" content={`${props.title} - Beast Ballistics`} />
      <meta property="og:description" content={props.seoDescription} />
      <meta
        property="og:url"
        content={`https://beastballistics.com{props.url}`}
      />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />

      <script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=e4e84526-3cec-4cdb-beae-e436d369e3cf"
      >
        {" "}
      </script>
    </Head>
  );
}
