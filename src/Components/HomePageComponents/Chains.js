import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

// const useStyles = createUseStyles((Themes) => {
//   return {};
// });

function Chains(props) {
  // const theme = useTheme();
  // const classes = useStyles({ props, theme });

  return (
    <div className="chains">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 text-center">
            <em>Number of Chains that uses Quasar protocol</em>
            <strong>$3.000.220,854</strong>
            <p>
              Many blockchains are already using interchain money market enabled
              by Quasar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chains;
