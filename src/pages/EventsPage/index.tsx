import React from "react";
import events from "./eventsData.json";
import "./index.scss";
import Sidebar from "src/components/Sidebar";
import Navigation from "src/components/Navigation";
import { Button } from "@mui/joy";

function Events() {
  return (
    <div className="events-container">
      <Sidebar />
      <div className="main">
        <Navigation />
        <div className="events">
          {events.map((item) => (
            <div className="event-item" key={item.id}>
              <div className="event-image">
                <img src={item.mainImage} alt="" />
              </div>
              <div className="event-content">
                {item.id === 1 || item.id === 2 ? (
                  <div className="event-type">
                    <div className="event-icon">
                      <img src={item.eventTypeIcon} alt="" />
                    </div>
                    <div className="event-type-heading">
                      <span>Parnity</span>
                      <span className="event-type-text">{item.eventType}</span>
                    </div>
                  </div>
                ) : null}

                <div
                  className={
                    item.id === 1 || item.id === 2
                      ? "event-heading"
                      : "webinar-event-heading"
                  }
                >
                  <span>{item.heading}</span>
                </div>
                <div
                  className={
                    item.id === 1 || item.id === 2
                      ? "event-sub-heading"
                      : "webinar-event-subHeading"
                  }
                >
                  <span>{item.subHeading}</span>
                </div>
                {item.id === 1 || item.id === 2 ? (
                  <div className="button">
                    <Button
                      type="success"
                      sx={{
                        backgroundColor: "#67D6A4",
                        borderRadius: "0.5rem",
                        padding: "1rem",
                        textAlign: "center",
                      }}
                      variant="soft"
                    >
                      <span>
                        {item.id === 1 ? "See More" : "Attendee Area"}
                      </span>
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
