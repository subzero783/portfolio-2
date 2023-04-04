import React, { useCallback, useEffect } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import "./NewsletterSignup.scss";

export default function NewsletterSignup() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: "24264669",
          formId: "cb244bed-53bf-4df0-b4d1-451858e2fa4c",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <div id="hubspot-form-css-js">
      <div class="container container-1">
        <div class="row">
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div id="hubspotForm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
