import React, { useState } from "react";
import BatterySection from "./BatterySection";
import MotorSection from "./MotorSection";
import BrakesSection from "./BrakesSection";
import TiresSection from "./TiresSection";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("battery");

  const renderSection = () => {
    switch (activeSection) {
      case "battery":
        return <BatterySection />;
      case "motor":
        return <MotorSection />;
      case "brakes":
        return <BrakesSection />;
      case "tires":
        return <TiresSection />;
      default:
        return <BatterySection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold text-center">Electric Bike Repair Guide</h1>
        <p className="text-center mt-2">Learn how to maintain and repair your e-bike</p>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center mb-8">
          <button
            onClick={() => setActiveSection("battery")}
            className={`px-4 py-2 m-2 rounded ${activeSection === "battery" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Battery
          </button>
          <button
            onClick={() => setActiveSection("motor")}
            className={`px-4 py-2 m-2 rounded ${activeSection === "motor" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Motor
          </button>
          <button
            onClick={() => setActiveSection("brakes")}
            className={`px-4 py-2 m-2 rounded ${activeSection === "brakes" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Brakes
          </button>
          <button
            onClick={() => setActiveSection("tires")}
            className={`px-4 py-2 m-2 rounded ${activeSection === "tires" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Tires
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {renderSection()}
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-6 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Electric Bike Repair Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;