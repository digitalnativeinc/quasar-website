import { useEffect, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import AnimateHeight from "react-animate-height";

// Images
import iosg from "assets/images/iosg-279063b244.png";
import tendermint from "assets/images/tendermint-logo.png";

// const useStyles = createUseStyles((Themes) => {
//   return {};
// });

function Partners(props) {
  //   const theme = useTheme();
  //   const classes = useStyles({ props, theme });
  const [height, setHeight] = useState(0);
  const partners = [tendermint];

  const handleResize = () => {
    if (height !== "auto") setHeight(getHeight());
  };

  useEffect(() => {
    if (height === 0) setHeight(getHeight());
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const showBtn = () => {
    let innerWidth = window.innerWidth;
    let showBtn;
    if (innerWidth < 768 || innerWidth >= 1200) {
      showBtn = partners.length > 6 ? true : false;
    } else {
      showBtn = partners.length > 4 ? true : false;
    }
    console.log(showBtn);
    return showBtn;
  };

  const getHeight = () => {
    let innerWidth = window.innerWidth;
    let new_height = partners.length > 4 ? 245 : "auto";
    if (innerWidth < 768) {
      new_height = Math.min(partners.length * 110 + 25, 685);
    } else if (innerWidth >= 1200) {
      new_height = 135;
    }
    return new_height;
  };

  const toggle = () => {
    setHeight(height === "auto" ? 0 : "auto");
  };

  const renderPartners = () => {
    return (
      <AnimateHeight duration={500} height={height} id="partners-panel">
        <div
          className={classNames(
            "row d-flex align-items-center justify-content-center mt-px40"
          )}
        >
          {partners.map((partner, index) => {
            return (
              <div
                className="d-flex align-items-center justify-content-center col-12 col-md-3 col-xl-2 text-center mt-px10"
                key={index}
                style={{ width: "240px", height: "100px" }}
              >
                <div>
                  <img src={partner} width="100%" height="100%" alt="Image" />
                </div>
              </div>
            );
          })}
        </div>
      </AnimateHeight>
    );
  };

  return (
    <div className="partners">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 text-center">
            <em>Our Supporters</em>
          </div>
        </div>

        {renderPartners()}
        <div className="row d-flex align-items-center justify-content-center mt-px10">
          <a
            onClick={toggle}
            className="btn-cta outline-none"
            style={{
              color: "#fff",
              cursor: "pointer",
              display: showBtn() ? "block" : "none",
            }}
            aria-controls="partners-panel"
            aria-expanded={height !== 0}
          >
            {height === "auto" ? "SHOW LESS" : "SHOW MORE"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Partners;
