import Layout from "../layout/layout";
import styles from "../styles/Index.module.css";
export default function Home() {
  return (
    <Layout staticProps={GetStaticHomeProps()}>
      <div className={styles.titleHolder}>
        <h1>Get ready for the change.</h1>
        <p>
          How does a Electronic Trigger Unit with high power, automotive
          Infenion MOSFETs rated for 700 Amps sound?
          <br />
          Stay tuned ... we are launching soon!
        </p>
      </div>
    </Layout>
  );
}

export function GetStaticHomeProps() {
  return {
    props: {
      title: "Insane Mosfets and Gearboxes",
      reverseTitle: true,
      url: "/",
      seoDescription:
        "Beast Ballistics is a premium up-scale manufacturer for high-power airsoft/gelblaster mosfets and gearboxes",
    },
  };
}
