import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from '../components'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <strong>tracking</strong> app
          </h1>
          <blockquote cite="https://quotepark.com/authors/h-jackson-brown-jr/">
            <p>
              Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did. So throw off the bowlines. Sail away from the safe harbor. Catch the trade wind in your sails. Explore. Dream. Discover. <br/> —  H. Jackson Brown Jr.
            </p>
          </blockquote>
          <Link to='/register' className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        {/* info */}
        <img src={main} alt="job hunt" className='img main-img'/>
      </div>
    </Wrapper>
  );
};

export default Landing;
