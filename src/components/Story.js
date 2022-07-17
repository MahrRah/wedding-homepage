
import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";


function Details() {
  const { t } = useTranslation(["common"]);

  return (
    <div id="main">

      <section class="posts">
        <article>
          <header>
            <span class="date">April 24, 2017</span>
            <h2><a href="#">Sed magna<br />
              ipsum faucibus</a></h2>
          </header>
          <a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
          </ul>
        </article>
        <article>
          <header>
            <span class="date">April 22, 2017</span>
            <h2><a href="#">Primis eget<br />
              imperdiet lorem</a></h2>
          </header>
          <a href="#" class="image fit"><img src="images/pic03.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
          </ul>
        </article>
        <article>
          <header>
            <span class="date">April 18, 2017</span>
            <h2><a href="#">Ante mattis<br />
              interdum dolor</a></h2>
          </header>
          <a href="#" class="image fit"><img src="images/pic04.jpg" alt="" /></a>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Details;
