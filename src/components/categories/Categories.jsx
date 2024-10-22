import React from "react";
import solaris2 from "../../assets/images/solaris2.png";
import solaris3 from "../../assets/images/solaris3.png";
import solaris4 from "../../assets/images/solaris4.png";
import solaris5 from "../../assets/images/solaris5.png";
import solaris6 from "../../assets/images/solaris6.png";
import play from "../../assets/images/play-circle.svg";

import { Tabs } from "antd";
import "./Categories.scss";

const Categories = () => {
  const tabItems = [
    {
      key: "1",
      tab: "All",
      content: (
        <>
          <div className="cards">
            <div className="card">
              <img src={solaris2} alt="" />
              <h2>Spectral Rivieerie</h2>
              <p>
                A gifted artist discovers the ability to bring her dreams to
                life through her paintings, but soon realizes that the
                spectral beings she conjures have a will of their own.{" "}
              </p>
              <div className="button-group">
                <button className="btn-primary">
                  Watch Now
                  <img src={play} alt="Play" />
                </button>
                <button className="btn-outline">More Info</button>
              </div>
            </div>
            <div className="card">
              <img src={solaris3} alt="" />
              <h2>Quantum Mirage</h2>
              <p>
                A gifted artist discovers the ability to bring her dreams to
                life through her paintings, but soon realizes that the
                spectral beings she conjures have a will of their own.{" "}
              </p>
              <div className="button-group">
                <button className="btn-primary">
                  Watch Now
                  <img src={play} alt="Play" />
                </button>
                <button className="btn-outline">More Info</button>
              </div>
            </div>
          </div>
          <div className="cards-second">
            <div className="card">
              <img src={solaris4} alt="" />
              <h2>Ephemeral Echoes</h2>
              <p>
                In a world where memories are fleeting and time is a
                delicate illusion, a group...
              </p>
              <div className="button-group">
                <button className="btn-primary">
                  Watch Now
                  <img src={play} alt="Play" />
                </button>
                <button className="btn-outline">More Info</button>
              </div>
            </div>
            <div className="card">
              <img src={solaris5} alt="" />
              <h2>Celestial Cipher</h2>
              <p>
                In a realm where constellations hold the secrets of the
                universe, a group of unl...
              </p>
              <div className="button-group">
                <button className="btn-primary">
                  Watch Now
                  <img src={play} alt="Play" />
                </button>
                <button className="btn-outline">More Info</button>
              </div>
            </div>
            <div className="card">
              <img src={solaris6} alt="" />
              <h2>Solaris Synchrony</h2>
              <p>
                Against the backdrop of a dying Earth, a group of scientists
                races to execute...
              </p>
              <div className="button-group">
                <button className="btn-primary">
                  Watch Now
                  <img src={play} alt="Play" />
                </button>
                <button className="btn-outline">More Info</button>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      key: "2",
      tab: "Action",
      content: <p>Content for Action category</p>,
    },
    {
      key: "3",
      tab: "Drama",
      content: <p>Content for Drama category</p>,
    },
    {
      key: "4",
      tab: "Comedy",
      content: <p>Content for Comedy category</p>,
    },
    {
      key: "5",
      tab: "Sci-Fi",
      content: <p>Content for Sci-Fi category</p>,
    },
    {
      key: "6",
      tab: "Horror",
      content: <p>Content for Horror category</p>,
    },
    {
      key: "7",
      tab: "Romance",
      content: <p>Content for Romance category</p>,
    },
    {
      key: "8",
      tab: "Musical",
      content: <p>Content for Musical category</p>,
    },
  ];

  return (
    <div className="Categories">
      <div className="container">
        <div className="categories-header">
          <h2>Explore Our Wide Range of Movie Categories and Genres</h2>
        </div>
        <div className="all-tabs">
          <Tabs defaultActiveKey="1" tabPosition="top" className="hello" items={tabItems.map(item => ({ key: item.key, label: item.tab, children: item.content }))} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
