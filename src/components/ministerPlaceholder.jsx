import React from 'react';
import { FaGift, FaCalendarAlt } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const MinistersPlaceholder = () => {
    return (
        <>
            <style>{`
        .ministers-placeholder-container {
          width: 100%;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .ministers-placeholder-wrapper {
          max-width: 800px;
          width: 100%;
        }

        .ministers-card {
          position: relative;
          background: linear-gradient(135deg, #fef3c7 0%, #ffffff 50%, #fef3c7 100%);
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          border: 1px solid #fcd34d;
        }

        .decorative-blob-1 {
          position: absolute;
          top: 0;
          right: 0;
          width: 160px;
          height: 160px;
          background: #fcd34d;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: pulse 3s ease-in-out infinite;
        }

        .decorative-blob-2 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 160px;
          height: 160px;
          background: #fde047;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: pulse 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .ministers-card-content {
          position: relative;
          padding: 3rem;
          text-align: center;
        }

        .icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .icon-wrapper {
          position: relative;
        }

        .icon-glow {
          position: absolute;
          inset: 0;
          background: #fbbf24;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.5;
          animation: pulse 2s ease-in-out infinite;
        }

        .icon-circle {
          position: relative;
          background: linear-gradient(135deg, #fbbf24 0%, #fde047 100%);
          border-radius: 50%;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(251, 191, 36, 0.3);
        }

        .icon-circle svg {
          width: 48px;
          height: 48px;
          color: white;
        }

        .main-heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .gradient-text {
          display: block;
          background: linear-gradient(90deg, #d97706 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 0.5rem;
        }

        .subheading-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .subheading-container svg {
          width: 20px;
          height: 20px;
          color: #f59e0b;
        }

        .subheading-text {
          font-size: 1.25rem;
          color: #4b5563;
          font-weight: 500;
        }

        .description-text {
          font-size: 1.125rem;
          color: #374151;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid #fcd34d;
          margin-bottom: 2rem;
        }

        .status-badge svg {
          width: 20px;
          height: 20px;
          color: #d97706;
        }

        .status-text {
          color: #374151;
          font-weight: 600;
        }

        .animated-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #f59e0b;
          border-radius: 50%;
          animation: bounce 1.4s ease-in-out infinite;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-12px);
          }
        }

        .quote-text {
          color: #6b7280;
          font-style: italic;
        }

        .accent-bar {
          height: 8px;
          background: linear-gradient(90deg, #fbbf24 0%, #fde047 50%, #fbbf24 100%);
        }

        .footer-note {
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .ministers-card-content {
            padding: 2rem 1.5rem;
          }

          .main-heading {
            font-size: 2rem;
          }

          .subheading-text {
            font-size: 1.125rem;
          }

          .description-text {
            font-size: 1rem;
          }
        }
      `}</style>

            <div className="ministers-placeholder-container">
                <div className="ministers-placeholder-wrapper">
                    <div className="ministers-card">
                        <div className="decorative-blob-1"></div>
                        <div className="decorative-blob-2"></div>

                        <div className="ministers-card-content">
                            <div className="icon-container">
                                <div className="icon-wrapper">
                                    <div className="icon-glow"></div>
                                    <div className="icon-circle">
                                        <FaGift />
                                    </div>
                                </div>
                            </div>

                            <h2 className="main-heading">
                                Something Special
                                <span className="gradient-text">
                                    Is Coming!
                                </span>
                            </h2>

                            <div className="subheading-container">
                                <BsStars />
                                <p className="subheading-text">
                                    Meet This Year's Anointed Ministers
                                </p>
                                <BsStars />
                            </div>

                            <p className="description-text">
                                Get ready to be blessed by a powerful lineup of ministers
                                handpicked to bring you an unforgettable experience of worship,
                                teaching, and divine encounter.
                            </p>

                            <div className="status-badge">
                                <FaCalendarAlt />
                                <span className="status-text">
                                    Announcement Coming Soon
                                </span>
                            </div>

                            <div className="animated-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>

                            <p className="quote-text">
                                "Prepare your heart for a divine encounter"
                            </p>
                        </div>

                        <div className="accent-bar"></div>
                    </div>

                    <p className="footer-note">
                        Stay connected for updates on our ministering team
                    </p>
                </div>
            </div>
        </>
    );
};

export default MinistersPlaceholder;