"use client";

export function TawkTo() {
  return (
    <>
      {/* Start of Tawk.to Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6819f82442fe20190ebf8bb5/1iqin2kch';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `
        }}
      />
      {/* End of Tawk.to Script */}
    </>
  );
}
