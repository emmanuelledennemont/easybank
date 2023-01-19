import currency from "../../assets/images/image-currency.jpg";
import restaurant from "../../assets/images/image-restaurant.jpg";
import plane from "../../assets/images/image-plane.jpg";
import confetti from "../../assets/images/image-confetti.jpg";

const Articles = () => {
  return (
    <>
   
        <div className="articles container ">
          <h2>Latest Articles</h2>
          <div className="articles__content">
            <div className="articles__card">
              <div className="articles__card__img">
                <img src={currency} alt="currency" />
              </div>
              <div className="articles__author"> By Claire Robinson</div>
              <div className="articles__card__content">
                <h3>Receive money in any currency with no fees</h3>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className="articles__card">
              <div className="articles__card__img">
                <img src={restaurant} alt="restaurant" />
              </div>
              <div className="articles__author"> By Wilson Hutton</div>
              <div className="articles__card__content">
                <h3>Treat yourself without worrying about money</h3>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>
            <div className="articles__card">
              <div className="articles__card__img">
                <img src={plane} alt="plane" />
              </div>
              
              <div className="articles__card__content">
              <div className="articles__author">By Wilson Hutton</div>
                <h3>Take your Easybank card wherever you go</h3>
                <p>
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </div>
            <div className="articles__card">
              <div className="articles__card__img">
                <img src={confetti} alt="confetti" />
              </div>
              <div className="articles__author"> By Claire Robinson</div>
              <div className="articles__card__content">
                <h3>Our invite-only Beta accounts are now live!</h3>
                <p>
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Articles;
