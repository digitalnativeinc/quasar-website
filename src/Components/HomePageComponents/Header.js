import { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

// images
import waveSVG from "assets/images/interchain.png";
import logo from "assets/images/quasar-logo.png";

const useStyles = createUseStyles((Themes) => {
  return {
    ["m-menucontainer-open"]: {
      display: "block",
      transform: "translate(0px, 0px)",
      opacity: 1,
      visibility: "inherit",
    },
    ["m-menucontainer-closed"]: {
      display: "none",
      transform: "translate(-100vw, 0px)",
      opacity: 0,
      visibility: "inherit",
    },
    ["m-menuitem"]: {
      transition: "0.5s",
    },
    ["m-menuitem-open"]: {
      transform: "translate(0px, 0px)",
      opacity: 1,
      visibility: "inherit",
    },
    ["m-menuitem-closed"]: {
      transform: "translate(0px, 20px)",
      opacity: 0,
      visibility: "hidden",
    },
    ["header-w-logo"]: {
      padding: 0,
      height: "85px",
    },
  };
});

function Header(props) {
  const [animateItem, setAnimateItem] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  const menuItems = [
    "Stats",
    "App",
    "Build",
    "Governance",
    "Community",
    "Blog",
    "Research",
  ];
  const toggleModalMenu = () => {
    if (!open) {
      clearTimeout(modalItemAnimate);
      toggleOpen();
      setTimeout(modalItemAnimate, 1000);
    } else {
      clearTimeout(toggleOpen);
      modalItemAnimate();
      setTimeout(toggleOpen, 1000);
    }
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const modalItemAnimate = () => {
    setAnimateItem(!animateItem);
  };

  const renderMenuItems = (modal = false) => {
    return (
      <ul>
        {!modal
          ? menuItems.map((item, index) => {
              return (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              );
            })
          : menuItems.map((item, index) => {
              return (
                <li
                  key={item}
                  style={{ transitionDelay: `${0.1 * index}s` }}
                  className={classNames(classes["m-menuitem"], {
                    [classes["m-menuitem-open"]]: animateItem,
                    [classes["m-menuitem-closed"]]: !animateItem,
                  })}
                >
                  <a href="#">{item}</a>
                </li>
              );
            })}
      </ul>
    );
  };

  return (
    <div className="header--container">
      <header
        className={classNames(
          classes["header-w-logo"],
          "row d-flex align-items-center"
        )}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="text-center text-md-left col-md-2 relative">
              <a
                href="#"
                className={classNames("toggle-menu", { open: open })}
                onClick={toggleModalMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
              <a href="#" className="logo">
                <img src={logo} width="50px" />
              </a>
            </div>
            <div className="col-md-10 text-right d-none d-md-block">
              {renderMenuItems()}
            </div>
            <div
              className={classNames(
                "transition-1s",
                "col-12 menucontainer d-block d-md-none",
                "transition-eio",
                {
                  [classes["m-menucontainer-open"]]: open,
                  [classes["m-menucontainer-closed"]]: !open,
                }
              )}
            >
              <ul>{renderMenuItems(true)}</ul>
            </div>
          </div>
        </div>
      </header>

      <img src={waveSVG} alt="image" className="wave" />
      <div className="container content relative" style={{ height: "90%" }}>
        <div
          className="row d-flex align-items-center relative"
          style={{ height: "90%" }}
        >
          <div className="col-10 col-md-6 col-xl-5">
            <h1>Interchain lending and borrowing protocol</h1>
            <p>
              Quasar is the next generation money market protocol for interchain
              ecosystem.
            </p>
            <a href="#" className="btn-cta">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
