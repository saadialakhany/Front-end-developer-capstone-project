import React from "react";
import image1 from "../images/Mario and Adrian A.jpg";
import image2 from "../images/Mario and Adrian b.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-textbox">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          nisi eget felis consequat mattis a eget urna. Maecenas ultrices justo
          non vehicula volutpat. Vivamus tincidunt, arcu at ornare dapibus, leo
          purus interdum tortor, non pulvinar ex odio suscipit ante. Sed ac
          sodales massa. Sed aliquet commodo lectus, quis aliquam dolor rhoncus
          quis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas volutpat sapien sit amet
          lorem consectetur placerat. In.
        </p>
        <p>
          Quisque eu dui vitae ex aliquet luctus. Ut ut luctus augue, sit amet
          auctor sapien. Maecenas feugiat, quam in sollicitudin molestie, erat
          enim convallis augue, nec elementum tellus metus semper magna.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Vestibulum mattis efficitur felis non facilisis. Quisque posuere,
          tellus quis consectetur aliquam, erat sem feugiat velit, sed faucibus
          magna purus ac libero. Suspendisse et efficitur metus. Etiam erat
          nunc, dictum quis metus sit amet, bibendum congue eros. Vivamus lorem
          est, venenatis aliquet posuere id, vehicula vitae ligula. Nulla
          ultricies placerat vehicula. Donec ullamcorper libero vitae turpis
          convallis hendrerit.
        </p>
      </div>
      <div className="about-images">
        <img src={image1} alt="Owners of Little lemon" className="image1" />
        <img src={image2} alt="Owners of Little lemon" className="image2" />
      </div>
    </section>
  );
}

export default About;
