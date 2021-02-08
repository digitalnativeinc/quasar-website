import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import logo from "assets/images/digital-native.png";

const useStyles = createUseStyles((Themes) => {
  return {
    ["credit"]: {
      color: "#fff",
      fontFamily: "Roboto Mono !important",
      fontStyle: "italic",
      fontWeight: 500,
    },
    ["credit-inner"]: {
      flexDirection: "column",
    },
    ["credit-text"]: {
      fontFamily: "Roboto Mono",
    },
  };
});

function Footer(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <footer>
      <div className={classNames("container", classes["credit"])}>
        <div
          className={classNames(
            "row d-flex align-items-center justify-content-center",
            classes["credit-inner"]
          )}
        >
          <p className={classes["credit-text"]} style={{ fontWeight: "500" }}>
            Built By
          </p>
          <div
            className="row d-flex align-items-center justify-content-center"
            style={{ padding: "10px 0" }}
          >
            <a href="#" className="logo">
              <img src={logo} width="30px" />
            </a>
            <p
              className={classes["credit-text"]}
              style={{
                paddingLeft: "12px",
                fontWeight: "800",
                fontSize: "24px",
              }}
            >
              Digital Native
            </p>
          </div>
          <p className={classes["credit-text"]}>
            With{" "}
            <span className="heartbeat" style={{ display: "inline-block" }}>
              ❤️
            </span>
          </p>
          <small style={{ paddingTop: "16px" }}>
            <a
              style={{ color: "#fff" }}
              href="mailto:contact@digitalnative.digital"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@digitalnative.digital
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
