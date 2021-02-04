import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

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
