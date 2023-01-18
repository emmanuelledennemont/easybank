import hero from "../../assets/images/bg-intro-mobile.svg";
import mockup from "../../assets/images/image-mockups.png";

const Hero = () => {
  return (
    <>
    <div className="hero__section container">
      <div className="bg">
        <div className="bg__mobile">
          <img src={hero} alt="" />
        </div>
        <div className="bg__mockups">
          <img src={mockup} alt="" />
        </div>
      </div>
      <div className="content">
            <h1 className="content__title">Next generation digital banking</h1>
            <p className="content__text">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <div className="content__btn">
            <button className="btn">Request Invite</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
