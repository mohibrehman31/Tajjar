import React, { useState } from "react";
import "./index.scss";
function Navigation() {
  const initialState = {
    exploreFocused: false,
    businessFocused: false,
    forwardFocused: false,
    eventFocused: false,
    contentFocused: false,
    perkFocused: false,
  };
  const [focusedState, setFocusedState] = useState(initialState);
  const handleItemClick = (key: any) => {
    setFocusedState({
      ...initialState,
      [key]: true,
    });
  };
  return (
    <div className="navigation-container">
      <div className="navigation">
        <button
          className={`nav-item ${focusedState.exploreFocused ? "focused" : ""}`}
          onClick={() => handleItemClick("exploreFocused")}
        >
          <span>Explore</span>
        </button>
        <div
          className={`nav-item ${
            focusedState.businessFocused ? "focused" : ""
          }`}
          onClick={() => handleItemClick("businessFocused")}
        >
          <span>Forwarders</span>
        </div>
        <div
          className={`nav-item ${focusedState.forwardFocused ? "focused" : ""}`}
          onClick={() => handleItemClick("forwardFocused")}
        >
          <span>Businesses</span>
        </div>
        <div
          className={`nav-item ${focusedState.eventFocused ? "focused" : ""}`}
          onClick={() => handleItemClick("eventFocused")}
        >
          <span>Events</span>
        </div>
        <div
          className={`nav-item ${focusedState.contentFocused ? "focused" : ""}`}
          onClick={() => handleItemClick("contentFocused")}
        >
          <span>Content</span>
        </div>
        <div
          className={`nav-item ${focusedState.perkFocused ? "focused" : ""}`}
          onClick={() => handleItemClick("perkFocused")}
        >
          <span>Perks</span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
