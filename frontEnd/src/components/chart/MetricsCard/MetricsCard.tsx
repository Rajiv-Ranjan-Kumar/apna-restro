import React from "react";
import "./MetricsCard.scss";
import { FaShoppingCart, FaUsers, FaDollarSign, FaUtensils } from "react-icons/fa";

const iconMap = {
  FaShoppingCart: <FaShoppingCart className="icon" />,
  FaUsers: <FaUsers className="icon" />,
  FaDollarSign: <FaDollarSign className="icon" />,
  FaUtensils: <FaUtensils className="icon" />
};

const MetricsCard: React.FC<{ title: string; value: string | number; icon: keyof typeof iconMap }> = ({ title, value, icon }) => {
  return (
    <div className="metrics-card">
      {iconMap[icon]}
      <div className="metrics-info">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default MetricsCard;
