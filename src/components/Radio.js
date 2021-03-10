import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import defaultImage from "../assets/radio.png";
import Player from "./Player";

export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  useEffect(() => {
    setupApi(stationFilter).then((data) => setStations(data));
  }, [stationFilter]);

  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "La Rockolla");

    const stations = await api
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 30,
      })
      .then((data) => {
        return data;
      });

    return stations;
  };

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ];

  return (
    <div className="radio">
      <div className="filters">
        {filters.map((filter, index) => (
          <span
            key={index}
            className={stationFilter === filter ? "selected" : ""}
            onClick={() => setStationFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="stations">
        {stations ? (
          stations.map((station, index) => {
            return (
              <div className="station" key={index}>
                <div className="stationName">
                  <img
                    className="logo"
                    src={station.favicon}
                    alt="station logo"
                    onError={setDefaultSrc}
                  />
                  <div className="name">{station.name}</div>
                </div>
                <Player station={station} />
              </div>
            );
          })
        ) : (
          <h3 className="loading">Loading...</h3>
        )}
      </div>
    </div>
  );
}
