import { FaCheckCircle } from "react-icons/fa";
import "./give.css";
import bg3 from "../../assets/flier.jpg";
import { Link } from "react-router-dom";


export default function Give() {
  const giveObj = [
    {
      mode: "Naira",
      type: "NGN NAIRA",
      symbol: "N",
      accounName: "ASHER PRAISE CONCERT",
      bank: "MONIEPOINT",
      accountNumber: 6452080598,
    },

  ];
  return (
    <>
      <section className="give-sect d-flex flex-column">
        <h3>Do you love me?</h3>
        <p>
          Charity to <span>Widows and Indigents</span>
          <br /> in the Community
        </p>
      </section>
      <div className="container mt-5">
        <h1>The day after the holiday</h1>
        <div className="give-details">
          <p>
            Loneliness at Christmas spurs more people into self-injury just the
            day after the holiday. The Centre for Disease Control & Prevention
            CDC affirms this much. While delay in self-harm during the holiday
            itself that is apparent from worldwide statistics has been explained
            away as not wanting to spoil the experience for others, the spike in
            this vice just after festive seasons remains a concern. Actually the
            very allure of the holiday contributes to this behavior when
            feelings of disappointment heighten. Failure of Xmas picture-perfect
            to heal people is the enemy&apos;s doing. God&apos;s creation which is
            originally good has been corrupted by the adversary. His motive for
            doing this is to derail God&apos;s work and create feelings of
            disappointment in the people whom God loves.
          </p>
          <Link to="/">
            <img src={bg3} alt="" className="bg3" />
          </Link>
          <h4>Feed my sheep</h4>
          <p>
            The rumblings had settled of the noisy weeks before; the
            earth-shaking event which followed the Passover, culminating into
            the resurrection from death of their LORD. Fear, so palpable the
            week before, was now giving way to faith and gratitude. Peter with
            his brethren had seen with their eyes what the whole of humanity
            would give everything to witness. Yet they had to eat and continue
            with their normal lives. But there were multitudes who were supposed
            to be part of the story; for whom the cause of the past weeks was
            designed. Christ appeared in the dusk of a busy day when Peter had
            beseeched his brethren to return to their daily lives. “Do you love
            me more than these?” The third time that he asked, he followed with
            a command; “Feed My Sheep”.
            <br />
            <p className="mt-3">
              The church today has lived their faith, the great experiences of
              the miraculous so intensely that they are potentially blinded to
              the real essence of their own salvation. What about them? What
              about those who honestly have little to celebrate at Christmas?
              What about them who have no feet to dance away the Asher Praise
              concert evening happening on December 27th? Or them who have no
              sight to behold the beautiful Christmas lights? It is when the
              faithful lets the light and love of Christ shine through to these
              ones that they can be sure that the word of God will come true
              about the church as it was said in that prophetic Hymn 210 of the
              Celestial Church;
            </p>
          </p>
          <p>
            <cite>
              ALL ye people exalt ye Jesus, <br /> Kindle the light amidst all
              darkness, That Father&apos;s promise be fulfilled in the end
            </cite>
          </p>
        </div>
        <section className="givesect  d-flex justify-content-center flex-wrap">
          {giveObj.map((give, index) => {
            return (
              <div
                key={index}
                className="givecard m-2 card w-40 flex-column align-items-center"
              >
                <div className="card-body bg-dark text-white w-100 d-flex flex-column align-items-center">
                  <h2 className="card-title">Give In {give.mode}</h2>
                  <p className="card-text">{give.type}</p>
                </div>
                <div className="card-details card-body gap-4 p-5 d-flex flex-column align-items-center w-100">
                  <p className="card-text">{give.symbol}</p>
                  <p className="card-text cardd">
                    <FaCheckCircle /> Account Name: {give.accounName}
                  </p>
                  <p className="card-text cardd">
                    <FaCheckCircle /> Bank: {give.bank}
                  </p>
                  <p className="card-text cardd">
                    <FaCheckCircle /> Account Number: {give.accountNumber}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
