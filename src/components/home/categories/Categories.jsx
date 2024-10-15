import React from "react";
import solaris2 from "../../../assets/images/solaris2.png";
import solaris3 from "../../../assets/images/solaris3.png";
import play from "../../../assets/images/play-circle.svg";

import { Tabs } from "antd";
import "./Categories.scss";

const { TabPane } = Tabs;

const Categories = () => {
  return (
    <div className="Categories">
      <div className="container">
        <div className="categories-header">
          <h2>Explore Our Wide Range of Movie Categories and Genres</h2>
        </div>
        <Tabs defaultActiveKey="1" tabPosition="top" className="hello">
          <TabPane tab="All" key="1">
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
          </TabPane>
          <TabPane tab="Action" key="2">
            <p>Content for Action category</p>
          </TabPane>
          <TabPane tab="Drama" key="3">
            <p>Content for Drama category</p>
          </TabPane>
          <TabPane tab="Comedy" key="4">
            <p>Content for Comedy category</p>
          </TabPane>
          <TabPane tab="Sci-Fi" key="5">
            <p>Content for Sci-Fi category</p>
          </TabPane>
          <TabPane tab="Horror" key="6">
            <p>Content for Horror category</p>
          </TabPane>
          <TabPane tab="Romance" key="7">
            <p>Content for Romance category</p>
          </TabPane>
          <TabPane tab="Musical" key="8">
            <p>Content for Musical category</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
