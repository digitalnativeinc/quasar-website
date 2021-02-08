import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import twitter from "assets/images/twitter-white.png";
import discord from "assets/images/discord-white.png";
import medium from "assets/images/medium-white.png";

const useStyles = createUseStyles((Themes) => {
  return {
    icon: {
      width: "50px",
      height: "50px",
      margin: "0 1rem",
    },
  };
});
function Newsletter(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div className="newsletter">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <em>Follow us on</em>
        </div>
        <div className="row d-flex align-items-center justify-content-center mt-px40 text-center">
          <div
            className={classes.icon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter link" />
          </div>
          <div className={classes.icon}>
            <a
              href="https://discord.gg/g5yZbWzY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={discord} alt="discord link" />
            </a>
          </div>
          <div
            className={classNames(
              classes.icon,
              "row d-flex align-items-center justify-content-center"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium} alt="medium link" width="50px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
