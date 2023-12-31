import React from "react";

const FeatureCard = ({ title, description, iconName }) => {
    const iconPath = `/assets/icons/${iconName}`;

    return (
        <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:-translate-y-2 transition-transform duration-300">
            <img src={iconPath} alt={title} className="mx-auto w-12 h-12 mb-4" /> {/* Adjust the size here */}
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default FeatureCard;
