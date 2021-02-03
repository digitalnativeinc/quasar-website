import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

// const useStyles = createUseStyles((Themes) => {
//   return {};
// });

function Footer(props) {
  //   const theme = useTheme();
  //   const classes = useStyles({ props, theme });

  return (
    <footer>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-4 text-center text-md-left">
            <a href="#" className="logo-tiny">
              <svg viewBox="0 0 17 21">
                <use xlinkHref="images/icons-375851bb4a.svg#q"></use>
              </svg>
            </a>
          </div>
          <div className="col-8 text-right d-none d-md-block">
            <ul>
              <li>
                <a href="#">Stats</a>
              </li>
              <li>
                <a href="#">App</a>
              </li>
              <li>
                <a href="#">Build</a>
              </li>
              <li>
                <a href="#">Governance</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
