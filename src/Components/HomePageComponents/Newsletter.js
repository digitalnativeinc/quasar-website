import { createUseStyles, useTheme } from "react-jss";
// import classNames from "classnames";

import twitter from "assets/images/twitter-white.png";
import discord from "assets/images/discord-white.png";
import email from "assets/images/email.png";

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
          {/*<form className="col-12" method="post">
            <input type="email" name="email" placeholder="Your email address" />
            <input type="submit" name="submit" value="Subscribe" />
  </form>*/}
          <div className={classes.icon}>
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
          <div className={classes.icon}>
            <img src={email} alt="email address" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
