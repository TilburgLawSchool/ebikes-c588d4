import React from "react";

const BatterySection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Battery Maintenance</h2>
      <p className="mb-4">
        Proper battery maintenance is crucial for the longevity and performance of your electric bike.
      </p>

      <h3 className="text-xl font-semibold mb-2">Regular Checks</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Check battery voltage regularly (should be between 48V and 56V for most e-bikes)</li>
        <li>Inspect for any signs of swelling or leakage</li>
        <li>Check the battery connections for corrosion</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Charging Tips</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Use the charger that came with your bike</li>
        <li>Avoid charging in extreme temperatures</li>
        <li>Don't fully discharge the battery before recharging</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Storage</h3>
      <p className="mb-4">
        When storing your e-bike for long periods, keep the battery at around 50% charge.
        Store in a dry, cool place away from direct sunlight.
      </p>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6">
        <p className="font-bold">Warning:</p>
        <p>Never attempt to open or modify the battery pack yourself. This can be dangerous and may void your warranty.</p>
      </div>
    </div>
  );
};

export default BatterySection;