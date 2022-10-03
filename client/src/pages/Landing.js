import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className='logo'/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby fashion axe shoreditch neutra four dollar toast ex pinterest veniam gentrify chambray selvage. Scenester schlitz shabby chic in excepteur jean shorts gastropub non copper mug.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className='img main-img'/>
      </div>
    </main>
  );
};
export default Landing;
