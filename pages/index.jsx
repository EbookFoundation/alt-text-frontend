import Head from "next/head";
import Link from "next/link";
import { Button, Image } from "react-bootstrap";
import NavBar from "~/components/navbar/navbar";

import styles from "~/styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alt-Text | Home</title>
      </Head>
      <NavBar />
      <main className={styles.pageContent}>
        <div className={styles.sectionList}>
          <div className={styles.sectionH}>
            <div className={styles.contentBig}>
              <h2>Alt-Gen</h2>
              <p>An all-in-one solution for image accessibility in Ebooks.</p>
            </div>
            <div className={styles.graphic}>
              <Image
                src="altgenlogo.png"
                style={{
                  borderRadius: "50%",
                  boxShadow:
                    "0 0 120px 30px #fff, 0 0 150px 100px #fbabff, 0 0 300px 150px #8ee1ed",
                }}
                alt="Alt-Gen Logo"
              />
            </div>
          </div>
          <div className={`${styles.sectionV}`}>
            <div className={`${styles.content}`}>
              <h2>Our Story</h2>
              <p>
                The Free Ebook Foundation envisions a world where Ebooks will be
                funded, distributed and maintained for the benefit of all, by
                coordinating the efforts and resources of many.
              </p>
              <p>
                Many projects, such as the Gutenberg Project and Unglue.it, have
                made great progress in distributing Ebooks. However, many of
                these Ebooks lack alternative text (alt-text) for their images,
                making them inaccessible to those using screenreaders.
              </p>
              <p style={{ fontWeight: "500" }}>
                There are about 470,000 images without alt-text in the Gutenberg
                Project's collection alone.
              </p>
            </div>
            <div className={styles.graphic}></div>
          </div>
          <div className={`${styles.sectionH}`}>
            <div className={`${styles.content}`}>
              <h2>The Solution</h2>
              <p>
                Alt-Gen is a software designed to scan through Ebooks and
                generate captions for images lacking quality alt-text.
              </p>
              <p>
                We utilize various modern technologies to accomplish this, such
                as Image Caption AIs, Optical Character Recognition, and Large
                Language Models.
              </p>
            </div>
            <div className={styles.graphic}>
              <Image
                src="imagecaptioning.jpg"
                alt="Robot looking at a tablet with thought bubbles above them."
              />
            </div>
          </div>
          <div className={`${styles.sectionV}`}>
            <div className={`${styles.content}`}>
              <h2>Ways to use Alt-Gen</h2>
              <p>
                Being open source, there are multiple methods to use Alt-Gen.
              </p>
            </div>
            <div className={styles.rowBoxes}>
              <div>
                <Image src="/pypi.png" alt="PyPi Logo" />
                <h3>The PyPi Package</h3>
                <p>
                  The inner workings of Alt-Gen are available via PyPi and
                  Github.
                </p>
                <p>
                  This allows for full customizability and integration into
                  one's own projects.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "49% 49%",
                    gap: "2%",
                  }}
                >
                  <Button>PyPi</Button>
                  <Button variant="secondary">Github</Button>
                </div>
              </div>
              <div>
                <Image src="/django.png" alt="Django Logo" />
                <h3>Hosting the API</h3>
                <p>
                  The code for the logic server and API is available on Github.
                </p>
                <p>
                  This allows for anyone to self host their own service to
                  interact with and integrate with their own projects.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100%",
                  }}
                >
                  <Button>Github</Button>
                </div>
              </div>
              <div>
                <Image src="/altgenlogo.png" alt="Alt-Gen Logo" />
                <h3>The Official Service</h3>
                <p>You can also use this website!</p>
                <p>
                  Simply create an account and upload your Ebook. We also
                  provide an easy to use dashboard to quickly proofread all the
                  alt-text in the Ebook.
                </p>
                <p>The code for this website is also available on Github.</p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "49% 49%",
                    gap: "2%",
                  }}
                >
                  <Button>Get Started</Button>
                  <Button variant="secondary">Github</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.sectionH}`}>
            <div className={`${styles.content}`}>
              <h2>The Developers</h2>
              <p>
                Alt-Gen is developed by a group of students from Stevens
                Institute of Technology for their senior design project.
              </p>
              <p>
                The project is managed by Eric Hellman from the Free Ebook
                Foundation.
              </p>
            </div>
            <div className={styles.graphic}>
              <Image
                src="stevens_free_ebook_foundation.png"
                alt="Stevens Institute of Technology and Free Ebook Foundation Logos"
              />
            </div>
          </div>
          <div className={`${styles.sectionV}`}>
            <div className={styles.profiles}>
              <div>
                <Link href={"https://github.com/eshellman"}>
                  <Image
                    src="https://avatars.githubusercontent.com/u/926513?v=4"
                    style={{ border: "solid 2px #576F7D" }}
                  />
                  <p>Eric Hellman</p>
                </Link>
              </div>
              <div>
                <Link href={"https://github.com/Byrne13"}>
                  <Image src="https://avatars.githubusercontent.com/u/132776007?v=4" />
                  <p>Jack Byrne</p>
                </Link>
              </div>
              <div>
                <Link href={"https://github.com/xxmistacruzxx"}>
                  <Image src="https://avatars.githubusercontent.com/u/25290819?v=4" />
                  <p>David Cruz</p>
                </Link>
              </div>
              <div>
                <Link href={""}>
                  <Image src="" />
                  <p>Jared Donnelly</p>
                </Link>
              </div>
              <div>
                <Link href={"https://github.com/kethan351"}>
                  <Image src="https://avatars.githubusercontent.com/u/101610058?v=4" />
                  <p>Ethan Kleschinsky</p>
                </Link>
              </div>
              <div>
                <Link href={"https://github.com/tylerklane"}>
                  <Image src="https://avatars.githubusercontent.com/u/105730362?v=4" />
                  <p>Tyler Lane</p>
                </Link>
              </div>
              <div>
                <Link href={"https://github.com/carsonblee"}>
                  <Image src="https://avatars.githubusercontent.com/u/100440205?v=4" />
                  <p>Carson Lee</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
