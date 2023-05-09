import LinkedButton from "@/components/button/linked-button";
import { Facebook } from "iconsax-react";
import Image from "next/image";

import "./home.css";

export default function Home() {
  const inf = "Información";

  return (
    <main>
      <header className='content header'>
        <a href='#' className='btn-1'>
          {" "}
          {inf}{" "}
        </a>
      </header>

      <section className='comics'>
        <div className='comics-1 txt'>
          <div className='carousel'>
            <h2>Comics</h2>

            <div className='carrusel-list' id='carrusel-list'>
              <button
                className='carrusel-arrow carrusel-prev'
                id='button-prev'
                data-button='button-prev'
                // onclick="app.processingButton(event)"
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='chevron-left'
                  className='svg-inline--fa fa-chevron-left fa-w-10'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'>
                  <path
                    fill='currentColor'
                    d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path>
                </svg>
              </button>

              <div className='carrusel-track' id='track'>
                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src={"image/1.jpg.jpg"} alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>

                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src='image/2.jpg.jpg' alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>

                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src='image/3.jpg.jpg' alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>

                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src='image/1.jpg.jpg' alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src='image/2.jpg.jpg' alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src='image/2.jpg.jpg' alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src='image/2.jpg.jpg' alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src='image/3.jpg.jpg' alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src='image/3.jpg.jpg' alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className='carrusel'>
                  <div>
                    <a href='/'>
                      <h4>
                        {" "}
                        <small>Imagen</small> Mas{" "}
                      </h4>
                      <picture>
                        <img src='image/2.jpg.jpg' alt='imagen' />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>

              <button
                className='carrusel-arrow carrusel-next'
                id='button-next'
                data-button='button-next'
                // onclick="app.processingButton(event)"
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='chevron-right'
                  className='svg-inline--fa fa-chevron-right fa-w-10'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'>
                  <path
                    fill='currentColor'
                    d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <script src="script.js"></script>   */}
          <script> src = script.js </script>
        </div>
      </section>

      <div className='event'>
        <h2> Eventos </h2>

        <div className='container'>
          <div className='card'>
            <figure>
              <img src='image/3.jpg.jpg' />
            </figure>
            <div className='contenido'>
              <h3> Contaabilidad </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                sed debitis eos tenetur. Necessitatibus eveniet ipsam aperiam
                delectus ipsum ea magnam. Iusto ducimus commodi architecto minus
                harum, quaerat quos aperiam.
              </p>
              <a href='#'> Leer mas</a>
            </div>
          </div>
          <div className='card'>
            <figure>
              <img src='image/2.jpg.jpg' />
            </figure>
            <div className='contenido'>
              <h3> Ser </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                sed debitis eos tenetur. Necessitatibus eveniet ipsam aperiam
                delectus ipsum ea magnam. Iusto ducimus commodi architecto minus
                harum, quaerat quos aperiam.
              </p>
              <a href='#'> Leer mas</a>
            </div>
          </div>
          <div className='card'>
            <figure>
              <img src='image/1.jpg.jpg' />
            </figure>
            <div className='contenido'>
              <h3> Admin </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                sed debitis eos tenetur. Necessitatibus eveniet ipsam aperiam
                delectus ipsum ea magnam. Iusto ducimus commodi architecto minus
                harum, quaerat quos aperiam.
              </p>
              <a href='#'> Leer mas</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
