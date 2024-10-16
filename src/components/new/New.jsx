import "./New.scss";
import ssolaris from "../../assets/images/ssolaris.png";
import solaris4 from "../../assets/images/solaris4.png";
import solaris3 from "../../assets/images/solaris3.png";
import soaris from "../../assets/images/soaris.png";
import arrowRight from "../../assets/images/arrow-right.svg";
const New = () => {
  return (
    <div className="New">
      <div className="container">
        <div className="new-header-all">
          <div className="new-header-left">
            <h2>Discover the Our Latest News</h2>
          </div>
          <div className="new-header-right">
            <p>
              Stay on the pulse of entertainment with our Latest News! Dive into
              the heart of the film world as we bring you exclusive updates
            </p>
            <button>See All Our News</button>
          </div>
        </div>
        <div className="new-middle-all">
          <div className="new-middle-left">
            <img src={ssolaris} alt="" />
          </div>
          <div className="new-middle-right">
            <h2>
              “Solaris Synchrony:” Fires Up on Trackiing with $50M Opening
            </h2>
            <p>
              Against the backdrop of a dying Earth, a group of scientists races
              to execute a daring plan to synchronize the consciousness of
              humanity with a new solar system. "Solaris Synchrony" is a
              gripping tale of sacri...
            </p>
            <button>
              Read More
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
        <div className="new-bottom-all">
          <div className="card">
            <img src={solaris4} alt="" />
            <p>
              In a world where memories are fleeting and time is a delicate
              illusi
            </p>
          </div>
          <div className="card">
            <img src={solaris3} alt="" />
            <p>
              A brilliant physicist stumbles upon a groundbreaking discovery
            </p>
          </div>
          <div className="card">
            <img src={soaris} alt="" />
            <p>
              Against the backdrop of a dying Earth, a group of scientists races
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
