import React, { useEffect } from "react";

function TypeformEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-tf-widget="lZ2mKiQJ"
      data-tf-opacity="100"
      data-tf-iframe-props="title=form_title"
      data-tf-transitive-search-params
      data-tf-medium="snippet"
      style={{ width: "100%", height: "500px" }}
    ></div>
  );
}

export default TypeformEmbed;
