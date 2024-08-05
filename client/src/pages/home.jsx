import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid ">
          <div className="navbar-brand h1 ">
            <BiDonateBlood color="red" /> Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div className="img-div">
          <img
            src="https://www.hopkinsmedicine.org/-/media/images/health/2_-treatment/pathology/blood-banking-hero.jpg?h=500&iar=0&mh=500&mw=1300&w=1297&hash=D9B65B7F539004EFBC6BA64A867BAD46"
            alt=""
            style={{ width: "100vw" }}
          />
        </div>
        <div className="home-body">
          <div
            className="intro"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              marginTop: "2rem",
              padding: "0 5rem",
              alignItems: "center",
            }}
          >
            <p style={{}}>
              <b style={{ fontSize: "2rem" }}>What is Blood Bank?</b>
            </p>
            <p>
              Blood banking is the process that takes place in the lab to make
              sure that donated blood, or blood products, are safe before they
              are used in blood transfusions and other medical procedures. Blood
              banking includes typing the blood for transfusion and testing for
              infectious diseases.
            </p>
          </div>
          <hr />
          <div
            className="facts"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              marginTop: "2rem",
              padding: "0 5rem",
              alignItems: "center",
            }}
          >
            <p style={{}}>
              <b>
                {" "}
                According to the American Association of Blood Banks as of 2013:
              </b>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li>About 36,000 units of blood are needed every day.</li>

                <li>
                  The number of blood units donated is about 13.6 million a
                  year.
                </li>

                <li>
                  About 6.8 million volunteers are blood donors each year.
                </li>

                <li>
                  Each unit of blood is broken down into components, such as red
                  blood cells, plasma, cryoprecipitated AHF, and platelets. One
                  unit of whole blood, once it's separated, may be transfused to
                  several patients, each with different needs.
                </li>

                <li>
                  Annually, more than 21 million blood components are
                  transfused.
                </li>
              </ul>
            </p>
            <p>
              <b style={{ fontSize: "2rem" }}>Facts about blood banking</b>
            </p>
          </div>
        </div>
        <hr />
        <div
          className="blood-donors"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            marginTop: "2rem",
            padding: "0 5rem",
            alignItems: "center",
          }}
        >
          <p style={{}}>
            <b style={{ fontSize: "2rem" }}>Who are the blood donors?</b>
          </p>
          <p>
            Most blood donors are volunteers. However, sometimes, a patient may
            want to donate blood a couple of weeks before undergoing surgery, so
            that his or her blood is available in case of a blood transfusion.
            Donating blood for yourself is called an autologous donation.
          </p>
        </div>
        <hr />
        <div
          className="tests"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            marginTop: "2rem",
            padding: "0 5rem",
            alignItems: "center",
          }}
        >
          <p style={{}}>
            <b>
              {" "}
              A certain set of standard tests are done in the lab once blood is
              donated, including, but not limited to, the following:
            </b>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <li>Typing: ABO group (blood type)</li>

              <li>Rh typing (positive or negative antigen)</li>

              <li>
                Screening for any unexpected red blood cell antibodies that may
                cause problems in the recipient
              </li>

              <li>Screening for current or past infections</li>

              <li>
                Irradiation to blood cells is performed to disable any
                T-lymphocytes present in the donated blood. (T-lymphocytes can
                cause a reaction when transfused, but can also cause
                graft-versus-host problems with repeated exposure to foreign
                cells.)
              </li>
            </ul>
          </p>
          <p>
            <b style={{ fontSize: "2rem" }}>
              What tests are done in blood banking?
            </b>
          </p>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Home;
