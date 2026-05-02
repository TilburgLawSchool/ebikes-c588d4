import React from "react";

const TiresSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tire Maintenance</h2>
      <p className="mb-4">
        Proper tire maintenance ensures a smooth ride and extends the life of your e-bike's tires.
      </p>

      <h3 className="text-xl font-semibold mb-2">Inflation</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Check tire pressure regularly (typically between 30-60 psi)</li>
        <li>Use a tire pressure gauge to ensure accurate readings</li>
        <li>Adjust tire pressure as needed based on your riding conditions</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Cleaning</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Clean tires regularly with a bike-specific cleaner</li>
        <li>Remove dirt and debris from the tire beads</li>
        <li>Check for any signs of wear or damage</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Rotation</h3>
      <p className="mb-4">
        Rotate your tires regularly to ensure even wear.
        This helps extend the life of your tires and improves handling.
      </p>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6">
        <p className="font-bold">Warning:</p>
        <p>Never attempt to repair or replace tires yourself if you're not experienced with bicycle mechanics.</p>
      </div>
    </div>
  );
};

export default TiresSection;