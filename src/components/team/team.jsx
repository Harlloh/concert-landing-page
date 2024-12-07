import './team.css';
import yemiesq from '../../assets/adeyemi esq.jpg';
import awolola from "../../assets/oluwatosin awolola.jpg";
import tope from "../../assets/Tope.jpg";
import williams from "../../assets/olapeju williams.jpg";
import Apoola from "../../assets/temitope apoola.jpg";
import femii from "../../assets/oluwafemi babalola.jpg";
import adegoke from "../../assets/ADEGOKE.jpg";
import Eskeez from "../../assets/eskeez.jpg";
import samkeyz from "../../assets/samkeyz.jpg";

const Team = ({ others, type }) => {
  // Sample team members data (replace with your actual team members' information)
  const teamMembers = [
    { name: "Adeyemi Esq", role: "Head of Prayers and Intercession", url: yemiesq },
    { name: "Oluwatosin Awolola", role: "Head Protocol and Finance", url: awolola },
    { name: "Tope", role: "Head, Logistics", url: tope },
    { name: "Olapeju Williams", role: "Head Protocol and Welfare", url: williams },
    { name: "Samuel Raymons", role: "Head of Music", url: samkeyz },
    { name: "Temitope Apoola", role: "Project Lead", url: Apoola },
    { name: "Eskeez", role: "Music Production & Live Performance", url: Eskeez },
    { name: "Oluwafemi Babalola", role: "Principal Partner & Head (Charity)", url: femii },
    { name: "Adegoke", role: "Convener", url: adegoke },
  ];

  return (
    <div className="py-5">
      <span className="text-center my-5">
        <h2>Meet the {type ? type : 'Team'}</h2>
      </span>
      <div className="team-grid">
        {(others ? others : teamMembers).map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-member-overlay">
              <img src={member.url} alt={member.name} />
              <div className="overlay-content">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
