import { GERMAN } from "@/components/demo/the-german/german-config";

/**
 * Analytics only renders when real IDs are supplied in german-config.ts.
 * Never invent tracking IDs.
 */
export function GermanAnalytics() {
  const { gaId, gtmId, metaPixelId } = GERMAN.analytics;
  if (!gaId && !gtmId && !metaPixelId) return null;

  return (
    <>
      {gtmId ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':Date.now(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
      ) : null}
      {gaId ? (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
            }}
          />
        </>
      ) : null}
    </>
  );
}
