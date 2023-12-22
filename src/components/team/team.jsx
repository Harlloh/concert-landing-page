import './team.css';
import yemiesq from '../../assets/adeyemi esq.jpg'
import awolola from "../../assets/oluwatosin awolola.jpg";
import tope from "../../assets/Tope.jpg";
import williams from "../../assets/olapeju williams.jpg";
import Apoola from "../../assets/temitope apoola.jpg";

const Team = () => {
  // Sample team members data (replace with your actual team members' information)
  const teamMembers = [
    {
      name: "Adeyemi Esq",
      role: "CEO",
      url: yemiesq,
    },

    {
      name: "Oluwatosin Awolola",
      role: "Head Protocol and Finance",
      url: awolola,
    },
    {
      name: "Tope",
      role: "Head ,Logistics",
      url: tope,
    },
    {
      name: "Olapeju Williams",
      role: "Head Protocol and Welfare",
      url: williams,
    },
    {
      name: "Temitope Apoola CEO, LITCAF",
      role: "Project Lead.",
      url: Apoola,
    },

    // Add more team members as needed
  ];

  return (
    <div className='py-5'>
        <span className='text-center my-5'>

      <h2>Meet the Team</h2>
      <p>
        Get to know the dedicated individuals orchestrating our uplifting
        Christian concert. From event planning to logistics, our organizers are
        committed to creating a worshipful and joyous experience for all. Meet
        the hearts behind the scenes, preparing a divine celebration just for
        you.
      </p>
        </span>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.url} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
