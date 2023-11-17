import { FaCheckCircle } from "react-icons/fa";
import "./give.css";

export default function Give() {
  const giveObj = [
    {
      mode: "Naira",
      type: "NGN NAIRA",
      symbol: "N",
      accounName: "AccounName of the bearer",
      bank: "United bank for africa",
      accountNumber: 1234567899,
    },
    {
      mode: "DOllar",
      type: "USD DOLLAR",
      symbol: "$",
      accounName: "AccounName of the bearer",
      bank: "United bank for africa",
      accountNumber: 1234567899,
    },
    {
      mode: "DOllar",
      type: "USD DOLLAR",
      symbol: "$",
      accounName: "AccounName of the bearer",
      bank: "United bank for africa",
      accountNumber: 1234567899,
    },
    {
      mode: "DOllar",
      type: "USD DOLLAR",
      symbol: "$",
      accounName: "AccounName of the bearer",
      bank: "United bank for africa",
      accountNumber: 1234567899,
    },
  ];
  return (
    <>
      <section className="give-sect">
        <h3>
          Charity to <span>Widows and Indigents</span>
          <br /> in the Community
        </h3>
      </section>
      <div className="container mt-5">
        <span style={{ display: "none" }}>
          By agreeing to give, you affirm that the seed/love offering/donation
          you are giving to the benefiary is a legitimate proceed from your
          job/business/ministry and you are making this donation voluntarily in
          support of Dunsin Oyekan Ministries and all its Code Red subsidiaries
          without any form of solicitation, inducement or coersion from the
          ministry. By accepting to give, you are also indemnifying the
          beneficiary and its successors and assigns from and against any claim,
          demand, action, liability, charges or suits arising in connection to
          your donation.
        </span>
        <div className="give-details">
          <p>
            This edition target feeding and ameliorating the pains of 100 widows
            and indgent ones in out communities across lagos.
          </p>
          <h4>What can i donate?</h4>
          <ol>
            <li>Food items</li>
            <li>Provisions</li>
            <li>CLothings</li>
            <li>Stationeries</li>
            <li>BIbles</li>
            <li>Household Items</li>
            <li>Monetarily</li>
          </ol>
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
