import React from "react";
import './index.scss'

interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  position: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageSrc, name, position }) => (
  <div className="team-member">
    <img className="member-image" src={imageSrc} alt={name} />
    <div className="name">{name}</div>
    <div className="position">{position}</div>
  </div>
);

export default TeamMemberCard;
