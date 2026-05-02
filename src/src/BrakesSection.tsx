import React from "react";

const BrakesSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Brake Maintenance</h2>
      <p className="mb-4">
        Proper brake maintenance is essential for safe riding and to prevent brake fade.
      </p>

      <h3 className="text-xl font-semibold mb-2">Regular Checks</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Check brake pads for wear (should be at least 3mm thick)</li>
        <li>Inspect brake calipers for proper alignment</li>
        <li>Check brake fluid level (if your bike has hydraulic brakes)</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Cleaning</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Clean brake pads and rotors regularly with a soft cloth</li>
        <li>Remove brake dust from the bike frame</li>
        <li>Check brake calipers for any signs of oil or grease buildup</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Adjustment</h3>
      <p className="mb-4">
        Regularly adjust your brakes to ensure proper stopping power.
        Follow your bike manufacturer's instructions for brake adjustment.
      </p>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6">
        <p className="font-bold">Warning:</p>
        <p>Never attempt to repair or replace brake components yourself if you're not experienced with bicycle mechanics.</p>
      </div>
    </div>
  );
};

export default BrakesSection;