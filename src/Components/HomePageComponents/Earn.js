import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

// Images
import earnSVG from "assets/images/earn.png";

// const useStyles = createUseStyles((Themes) => {
//   return {};
// });

function Earn(props) {
  // const theme = useTheme();
  // const classes = useStyles({ props, theme });

  return (
    <section className="standard-section earn">
      <div className="container">
        <div className="row d-flex align-items-center text-center text-md-left">
          <div className="col-md-5 offset-md-1 order-2 order-md-1">
            <h2>Earn</h2>
            <p>Earn income by providing collateral to Quasar protocol.</p>
            <a href="#" className="btn-cta">
              LEARN MORE
            </a>
          </div>
          <div className="col-md-6 order-1 order-md-2 shaky-image">
            <img src={earnSVG} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Earn;
