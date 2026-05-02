import React from "react";

const MotorSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Motor Maintenance</h2>
      <p className="mb-4">
        Regular motor maintenance ensures optimal performance and extends the life of your e-bike's motor.
      </p>

      <h3 className="text-xl font-semibold mb-2">Cleaning</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Clean the motor housing regularly with a soft cloth</li>
        <li>Remove dust and debris from the motor fan</li>
        <li>Check for any signs of oil leaks</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Lubrication</h3>
      <p className="mb-4">
        Apply a small amount of high-temperature grease to the motor bearings as needed.
        This helps reduce friction and wear.
      </p>

      <h3 className="text-xl font-semibold mb-2">Inspection</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Check the motor mount for any signs of damage or looseness</li>
        <li>Inspect the motor wiring for any signs of wear or damage</li>
        <li>Check the motor controller for any error codes</li>
      </ul>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6">
        <p className="font-bold">Warning:</p>
        <p>Never attempt to disassemble or repair the motor yourself. This can be dangerous and may void your warranty.</p>
      </div>
    </div>
  );
};

export default MotorSection;