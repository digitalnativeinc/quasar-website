import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

// Images
import buildSVG from "assets/images/build.png";

const useStyles = createUseStyles((Themes) => {
  return {};
});

function Build(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <section className="standard-section build">
      <div className="container">
        <div className="row d-flex align-items-center text-center text-md-left">
          <div className="col-md-6 rotating-image">
            <img src={buildSVG} alt="image" />
          </div>
          <div className="col-md-6">
            <h2>Build</h2>
            <p>Build the next interchain finance with Quasar.</p>
            <a href="#" className="btn-cta">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Build;
