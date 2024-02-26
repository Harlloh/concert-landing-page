import { Link } from "react-router-dom";
import "./gallery.css";
function Gallery() {
  const concertImageLinks = [
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTU4HGpevxPFU1uKP5lWF-Pyg13qomE55dP4T9uoZjyWKmu9b4TfY7HeITTjXz4PGAp0ZclPP68WfbyJxBRRmQecXjbsg=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQMEJmEe0vt4Gkqzi66RX2ZDcPv3zey3MA3Imx99gKuuqXyVGWOigqXLL6JPXXBeBoToqNg2Va5MFhqHri_IM736Is1=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRNoB7nS2UrtWTNwXTL75FKug0WVOHN8viTrxJwnVvUwdrAEWMFRo7a_FXJUnrG2Tgj0KJHmAovn0rB9BCRkZQF_9-k=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTvrC1PriH5q_s3zdSFxPhv4sDYcA86E79OBcx-sGvxiR3m-FaUe9ze-3d5WzMDC37D9MT3hEyKGpMi5J9gFe7gnArTUQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTGvxuyZ6eY6DVGxmk8EZkH2T3BDJx3r-Op9j3gk-DUwY-LXdIA6YDK5HDsz5IQYfsPuMFkitklU9Lp40IlxgVInFjK=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihaYjl1YdcDskPhAAG2FRlGya3SK6LLLBGQYp1NEkd4sBYpG8HknKWGEG8WtBlnBjMYS58LzqBOPcvVXFf84zgLambMehw=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihYnhb-Ee3uf525rUVh678WkVPJcMBkU4IvDHbZnuad_0rGbIz1R48FfngW8kXF4YaMq8m8JchJn8FaZ6C4s2Un0RbEgNQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihZPeNQhR16NyiaPlqmHiJ0QYQuUgR5SMLvEh_7d_9q_ShiN5zTfXy_O4AZyFrpiEdKcuHT_5bLkIGgkg2UJfu2oqfusXg=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQXqql-0gMhbGA_QtJAR2lhA4AEXI4pZzany7x0kD8auEELV3L28TwjkqdYSGCJQ2sV8SYqr6u8B6rWBx1aPpsAYjCd=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQjPyOtz3va6I4alf44FtZBtvcTDirT_jk7W8FaLAWnXsQfgo_KoPI86oECo-40ZBep4ZlqPoExOADgW28HRV8ZR5x01w=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYR6xctOp_iFQUgh5fsM4rJRJ13v1JYUzbr7PW5qlMCwIdlfbwccfNhOjpGotd_SV467me3Old3JK8hlBx8v5oqUdXIipg=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQdzjM40XOaR4y0QAJKYH_YZYwRtGwdvksj9E7ZwW8ygZyN4Qq6IyZFJpnboYH3g-LuCaEzFUtXiQTiWH4t8B2jciSPxA=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQnkTr8RKtp7zWgcBoPBSjkpFXmgIo4MMLfx-G2KSjd3hfrBymK7Dr79Yztzo4jKWnCZnpQ67CvHWM5bjRxMJmtroypVg=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ5fEOrocoZzS_VC7n2dGdSMJoX91w4-uZpIGdWFxdlToB6ax50eDElZ23zq8P4KCX82jJbVoPzAaZjF0MIVWjG4MWc=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQgxofBD3QFxR6N3WZu4LGhNxrH_AemDllk2XW8T0tKa1vcPPWoMu7sm1LihThPYGg_G-aj0d8qZsqv860c2sF1PULLNA=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQDR87Z9kjR6VgLUYaA4jxIIgussAA1XDdBKrZkgwinylAwzZOsoQ0cWl3Zusct6gkEugVWDZelcejl7kXsdAcbH6nmOQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihaWfqg6JAhSxhTQydSZE8BR4ZO0LD24G8D-ny0Yr4GhIDsAjh68cqpJx_63_2xvHGi3e08WUfzwvQ4oUhItXHTDauyPsA=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTCRzgteRftr8AIZM5O5WlXrL5NKVJOi2051otCfbJsw9ikRSCovH6J9o8tgcWrJLcqeXKQYOEuGpTMNykTFPG485k5=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSSMzq_epdz5QrRuOFRfcK-lO7i_35oz3fX27FHs5a-VLXWTTucYtx6rRzK8pHPibGNfffNMV2AqfVxcx7hm3vxXAZswg=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSY_RmFHqS1WHt0N0uMNLSxM1go7Bo29qOtm4Ij2_jpu9UbWiPpB_LmHcqTKDWYKp5G11Z3jCu_i5ciXw8X8PnzbOP6=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSFX3Lgp5F96uQeuIDHgfz9q0fu3uLSqtnhnttloHhwRCphsqU-7nhDM_MWsEZO-TqoOHz-0f7CKdbUn5zBBGYRDitKWQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRve6iZvMJvUfaiIErp0wRQISMZ9ef2EnJfDmPJkrPpoN444TvWYEvi28h4XdqvwTrzxleCyFtcJyHTGr9IX1tdOu71RA=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRHRpY2jjavpUdVrSNv6iaN-7pK7RMrL11jb2SsLwuer8AzZDgoq4SQbB9CRTb_v7Xlxw2B4bVKTGIoFjpNdJjFMzbabQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTgLhB1vZ3Q5GY1tqXshc0s6X-4sftUybwl5Mx8L71zJh7PQO2X81iFB20FLk0o3jQTpiw2wlamUGpMfavu7MT1oMbHKQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQxPWaC_e-qa1srIsPL1QOA4CpHZaqL6WZVH0kV1Cb4Dx8elqqOF_9StgHwz55rVTIkZUrmFuAPA73rni5FT6GXCov_=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ4OWuewWjooKCYZnv5YZMkSlGdFTtOXUIImgyci2ZXTr9EsByOEmfR0OIe2zKhMT0kSmr08uEeAVKhjVPewixXly-hiQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRXr4WAron5UGNMjapWHasNBkU3R0JnZeOAfJc2ie3xB1WZEesJvQei24CbbAuKPB4aLZQqSUHIHRoozRdP8gjrNXBRpQ=s1600",
  ];
  return (
    <div className="gallery-parent">
      <h3>Down the memory lane for asher praise concert 2023</h3>
      <div className="concert-images-container">
        {concertImageLinks.map((link, index) => (
          <img
            key={index}
            src={link}
            alt={`Concert Image ${index + 1}`}
            className="concert-image"
          />
        ))}
      </div>
      <p>
        want to see more?{" "}
        <Link to="https://drive.google.com/drive/folders/1z-KL5MZZnRHSel9emznLdSCLVVXoUQtF">
          click here
        </Link>
      </p>
    </div>
  );
}

export default Gallery;
