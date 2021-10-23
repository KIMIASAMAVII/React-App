import React from "react";
import {Link} from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer fix-bottom">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Salam Sakhteman</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <Link id="a" to="/">
            Salam Sakhteman
          </Link>
        </div>
      </div>
    </>
  );
}
