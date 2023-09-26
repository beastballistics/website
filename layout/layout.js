import styles from "../styles/Layout.module.css";
import Image from "next/image";
import SeoHead from "./seoHead";
import Kangaroo from "../assets/logos/kangaroo_beast_ballistics.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Layout({ children, staticProps }) {
  return (
    <>
      <SeoHead props={staticProps.props} />
      <div className={styles.card}>
        <div className={styles.header}>
          <Image
            className={styles.logo}
            src={Kangaroo}
            alt="Beast Ballistics Logo"
          />
          <div className={styles.social}>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                Follow Us On
                <br />
                Social Media
              </div>
            </div>
            <div className={styles.items}>
              <a
                href="https://www.facebook.com/Beast.Ballistics"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/beastballistics/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
              </a>
              <a
                href="https://medium.com/@beast.ballistics"
                title="Medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faMedium} />
              </a>
              <a
                href="https://github.com/beastballistics"
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <span>
            <span className={styles.boldfooter}>
              Built with{" "}
              <FontAwesomeIcon className={styles.heart} icon={faHeart} /> in
              Australia
            </span>
            <a
              className="underlined"
              href="https://www.facebook.com/Beast.Ballistics"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              className="underlined"
              href="https://www.instagram.com/beastballistics/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              className="underlined"
              href="https://medium.com/@beast.ballistics"
              title="Medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>{" "}
            |{" "}
            <a
              className="underlined"
              href="https://github.com/beastballistics"
              title="GitHub repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
