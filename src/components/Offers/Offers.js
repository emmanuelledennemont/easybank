import banking from "../../assets/images/icon-online.svg";
import budgeting from "../../assets/images/icon-budgeting.svg";
import onboarding from "../../assets/images/icon-onboarding.svg";
import api from "../../assets/images/icon-api.svg";

const Offers = () => {
  return (
    <>
      <section className="offers">
        <div className="offers__container container">
          <div className="offers__title">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className="offers__cards">
            <div className="offers__card">
              <div className="offers__card__icon">
                <img src={banking} alt="online banking" />
                <h3>Online Banking</h3>
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>

              <div className="offers__card__icon">
                <img src={budgeting} alt="budgeting" />
                <h3>Simple Budgeting</h3>
                <p>
                  See exactly where your money goes each month. Receive
                  notifications when you’re close to hitting your limits.
                </p>
              </div>

              <div className="offers__card__icon">
                <img src={onboarding} alt="onboarding" />
                <h3>Fast Onboarding</h3>
                <p>
                  We don’t do branches. Open your account in minutes online and
                  start taking control of your finances right away.
                </p>
              </div>

              <div className="offers__card__icon">
                <img src={api} alt="api" />
                <h3>Open API</h3>
                <p>
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
