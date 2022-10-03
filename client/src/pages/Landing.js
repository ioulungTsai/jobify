import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className='logo'/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <strong>tracking</strong> app
          </h1>
          <p>
            I'm baby fashion axe shoreditch neutra four dollar toast ex pinterest veniam gentrify chambray selvage. Scenester schlitz shabby chic in excepteur jean shorts gastropub non copper mug.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        {/* info */}
        <img src={main} alt="job hunt" className='img main-img'/>
      </div>
    </Wrapper>
  );
};

export default Landing;
