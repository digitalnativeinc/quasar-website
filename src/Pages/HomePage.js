import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

// Images
import bgHero from "assets/images/bg_hero-90e8802c19.jpg";
import iconsSVG from "assets/images/icons-375851bb4a.svg";
import iosg from "assets/images/iosg-279063b244.png";
import earnSVG from "assets/images/earn-d05846f151.svg";

// Components
import Header from "Components/HomePageComponents/Header";
import Build from "Components/HomePageComponents/Build";
import Earn from "Components/HomePageComponents/Earn";
import Chains from "Components/HomePageComponents/Chains";
import Partners from "Components/HomePageComponents/Partners";
import Newsletter from "Components/HomePageComponents/Newsletter";
import Footer from "Components/HomePageComponents/Footer";

const useStyles = createUseStyles((Themes) => {
  return {};
});

function HomePage(props) {
  const theme = useTheme();
  //   console.log({ ...props, theme });
  const classes = useStyles({ props, theme });

  return (
    <div className={{}}>
      <main>
        <Header />

        <div className="gradient">
          <Build />
          <Earn />
        </div>

        <Partners />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
