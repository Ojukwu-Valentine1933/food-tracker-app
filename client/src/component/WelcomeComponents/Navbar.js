import { Link } from "react-router-dom";
import star from "../../assets/star-icon.png";
import styles from "./Navbar.module.css";
import location from "../../assets/Location.png";
import logo from "../../assets/LOGO 1.png";
import { useState } from "react";

const Navbar = () => {

  return (
  
    <>
      <div className={`container ${styles.first_nav} mb-3`}>
        <nav className={`navbar bg-body-tertiary  `}>
          <div className="container">
            <div>
              <img
                src={star}
                alt="Bootstrap"
                className={`${styles.nav_icons}`}
              />
              <span
                className={`me-auto ${styles.nav_spans}`}
              >
                {" "}
                Get 5% Off your first order,{" "}
                <Link
                  className={`${styles.anchorTags}`}
                  style={{ fontWeight: "700", fontSize: "12px" }}
                >
                  Promo: ORDER5
                </Link>
              </span>
            </div>

            <div className="me-5" style={{display: "flex"}}>
              <img src={location} className={`${styles.nav_icons}`} />
              <span
                className={`${styles.nav_spans}`}
              >
                Regent Street, A4, A4201, London{" "}
                <Link className={`${styles.anchorTags}`}>Change Location</Link>
              </span>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-white">
          <div className="container-fluid">
            <Link to={"/"}>
              <img className={`navbar-brand ${styles.app_logo}`} href="#" src={logo} />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ms-5 `} id="navbarNav">
              <ul className="navbar-nav">
                <li className={`nav-item ${styles.second_nav_list}`} >
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className={`nav-item ${styles.second_nav_list}`}>
                  <a className="nav-link" href="#">
                    Browse Menu
                  </a>
                </li>
                <li className={`nav-item ${styles.second_nav_list}`}>
                  <a className="nav-link" href="#">
                    Special offers
                  </a>
                </li>
                <li className={`nav-item ${styles.second_nav_list}`}>
                  <a className="nav-link" aria-disabled="true">
                    Restaurant
                  </a>
                </li>
                <li className={`nav-item ${styles.second_nav_list}`}>
                  <a className="nav-link" aria-disabled="true">
                    Track Order
                  </a>
                </li>
              </ul>
              <div className="">
              <button className={` ${styles.navbar_btn} ms-5`}>Login/Signup</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
