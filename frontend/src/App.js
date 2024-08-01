import React, { useState } from "react";
import { AllViews } from "./Assignment03";
import "./App.css";

const App = () => {
  // Define query and handleChange

  return (
    <div className="flex flex-col appBackground">
      <div className="flex items-center">
        <div className="py-1">
          {/* Render the AllViews component */}
          <AllViews/>
        </div>
      </div>
    </div>
  );
}

export default App;
