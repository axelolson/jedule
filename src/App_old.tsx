import React, { useState } from "react";
import logo from "./logo.svg";
import { List } from "immutable";
import "./App.css";

enum Availability {
  Busy = 0,
  Free = 1,
  Canbe = 2,
}

const Slot = (props: { externalAvailability: Availability }) => {
  //const [availability, setAvailability] = useState(Availability.Busy);
  /*const handleIncrement = () => {
    if (availability == Availability.Busy) {
      setAvailability(Availability.Free);
    } else if (availability == Availability.Free) {
      setAvailability(Availability.Canbe);
    } else if (availability == Availability.Canbe) {
      setAvailability(Availability.Busy);
    }
  };*/
  return (
    <div>
      <button
        className="slot-button"
        style={{
          backgroundColor:
            props.externalAvailability == Availability.Busy
              ? "tomato"
              : props.externalAvailability == Availability.Free
              ? "ForestGreen"
              : "orange",
        }}
      >
        {props.externalAvailability == Availability.Busy
          ? "busy"
          : props.externalAvailability == Availability.Free
          ? "free"
          : "canbe"}
      </button>
    </div>
  );
};

function App() {
  const [availabilities, setAvailabilities] = useState(
    List([Availability.Free, Availability.Busy, Availability.Busy])
  );
  return (
    <div>
      {availabilities}
      <Slot externalAvailability={availabilities.get(0)!} />
      <Slot externalAvailability={availabilities.get(1)!} />
      <Slot externalAvailability={availabilities.get(2)!} />
      <button
        onClick={() =>
          setAvailabilities(
            List([Availability.Canbe, Availability.Busy, Availability.Busy])
          )
        }
      />
      <button
        onClick={() =>
          setAvailabilities((oldList) =>
            oldList.update(0, (oldItem) => Availability.Free)
          )
        }
      />
      <button
        onClick={() =>
          setAvailabilities(
            List([Availability.Canbe, Availability.Busy, Availability.Busy])
          )
        }
      />
    </div>
  );
}

/*
const Slot = () => {
  const [availability, setAvailability] = useState(Availability.Busy);
  const handleIncrement = () => {
    if (availability == Availability.Busy) {
      setAvailability(Availability.Free);
    } else if (availability == Availability.Free) {
      setAvailability(Availability.Canbe);
    } else if (availability == Availability.Canbe) {
      setAvailability(Availability.Busy);
    }
  };
  return (
    <div>
      <button
        className="slot-button"
        onClick={handleIncrement}
        style={{
          backgroundColor:
            availability == Availability.Busy
              ? "tomato"
              : availability == Availability.Free
              ? "ForestGreen"
              : "orange",
        }}
      >
        {availability == Availability.Busy
          ? "free"
          : availability == Availability.Free
          ? "busy"
          : "canbe"}
      </button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Slot />
      <Slot />
      <Slot />
    </div>
  );
}





const [availabilities, setAvailabilities] = useState(
    List([Availability.Busy, Availability.Busy])
  );
  return (
    <div>
      <div>{availabilities}</div>
      <button
        onClick={() =>
          availabilities.get(0)! == 0
            ? setAvailabilities((oldList) => oldList.update(0, (oldItem) => 1))
            : availabilities.get(0)! == 1
            ? setAvailabilities((oldList) => oldList.update(0, (oldItem) => 2))
            : setAvailabilities((oldList) => oldList.update(0, (oldItem) => 0))
        }
        style={{
          backgroundColor:
            availabilities.get(0) == Availability.Busy
              ? "tomato"
              : availabilities.get(0) == Availability.Free
              ? "ForestGreen"
              : "orange",
        }}
      >
        {availabilities.get(0) == Availability.Busy
          ? "busy"
          : availabilities.get(0) == Availability.Free
          ? "free"
          : "canbe"}
      </button>
      <button
        onClick={() =>
          availabilities.get(1)! == 0
            ? setAvailabilities((oldList) => oldList.update(1, (oldItem) => 1))
            : availabilities.get(1)! == 1
            ? setAvailabilities((oldList) => oldList.update(1, (oldItem) => 2))
            : setAvailabilities((oldList) => oldList.update(1, (oldItem) => 0))
        }
        style={{
          backgroundColor:
            availabilities.get(1) == Availability.Busy
              ? "tomato"
              : availabilities.get(1) == Availability.Free
              ? "ForestGreen"
              : "orange",
        }}
      >
        {availabilities.get(1) == Availability.Busy
          ? "busy"
          : availabilities.get(1) == Availability.Free
          ? "free"
          : "canbe"}
      </button>

*/

export default App;
