import currency from "../../assets/images/image-currency.jpg";
import restaurant from "../../assets/images/image-restaurant.jpg";
import plane from "../../assets/images/image-plane.jpg";
import confetti from "../../assets/images/image-confetti.jpg";
import { useState } from "react";

const Articles = () => {
  const [articlesContent] = useState([
    {
      id: 1,
      image: currency,
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      id: 2,
      image: restaurant,
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      id: 3,
      image: plane,
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      id: 4,
      image: confetti,
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ]);

  return (
    <>
      <div className="articles container ">
        <h2>Latest Articles</h2>
        <div className="articles__content">
          {articlesContent.map((article) => (
            <div className="articles__card" key={article.id}>
              <div className="articles__card">
                <div className="articles__card__img">
                  <img src={article.image} alt="currency" />
                </div>
                <div className="articles__card__container">
                  <div className="articles__author"> {article.author}</div>
                  <div className="articles__card__content">
                    <h3>{article.title}</h3>
                    <p> {article.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
