import React, { Props, useState } from "react";
import { List } from "immutable";
import { AnyMxRecord } from "dns";
const default_master_array = List();

enum Availability {
  Busy = 0,
  Free = 1,
  Canbe = 2,
}

const Grid = () => {
  const timeslots = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [week_nested_array, setWeekNestedArray] = useState(
    List(
      Array(
        List(Array(48).fill(Availability.Free)),
        List(Array(48).fill(Availability.Canbe)),
        List(Array(48).fill(Availability.Busy)),
        List(Array(48).fill(Availability.Busy)),
        List(Array(48).fill(Availability.Busy)),
        List(Array(48).fill(Availability.Busy)),
        List(Array(48).fill(Availability.Busy))
      )
    )
  );
  const handleSetWeekNestedArray = () => {
    const copy = [];
  };

  return (
    <div className="grid">
      <div className="timeslot">
        {timeslots.map((_, i: number) => (
          <div>{timeslots[i]}</div>
        ))}
      </div>
      <div className="week">
        {days.map((_, i: number) => (
          <div>
            {days[i]}
            <Day
              dayofweek={i}
              week_nested_array={week_nested_array}
              setWeekNestedArray={setWeekNestedArray}
            />
          </div>
        ))}
      </div>
      <div>{week_nested_array}</div>
    </div>
  );
};

const Day = (props: any) => {
  return (
    <div className="day">
      {Array(48)
        .fill(0)
        .map((_: any, i: number) => (
          <Slot
            externalAvailability={props.week_nested_array
              .get(props.dayofweek)
              .get(i)}
            setAvailability={(newAvailability) => {
              const dayofweekarray = props.week_nested_array.get(
                props.dayofweek
              );
              const updatedarray = props.week_nested_array.set(
                props.dayofweek,
                dayofweekarray.set(i, newAvailability)
              );
              props.setWeekNestedArray(updatedarray);
            }}
          />
        ))}

      <div>{props.week_nested_array[props.dayofweek]}</div>
    </div>
  );
};

const Slot = (props: {
  externalAvailability: Availability;
  setAvailability: (newValue: Availability) => void;
}) => {
  const handleIncrement = () => {
    if (props.externalAvailability == Availability.Busy) {
      props.setAvailability(Availability.Free);
    } else if (props.externalAvailability == Availability.Free) {
      props.setAvailability(Availability.Canbe);
    } else if (props.externalAvailability == Availability.Canbe) {
      props.setAvailability(Availability.Busy);
    }
  };
  return (
    <div className="slot">
      <button
        onClick={handleIncrement}
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

/*
const Day = (props: any) => {
  const [day_array, setDayArray] = useState(Array(48).fill(Availability.Busy));
  return (
    <div className="day">
      {day_array.map((_, i: number) => (
        <Slot
          externalAvailability={day_array[i]}
          setAvailability={(newAvailability) => {
            const day_array_copy = [...day_array];
            day_array_copy[i] = newAvailability;
            setDayArray(day_array_copy);
          }}
        />
      ))}
      <div>{day_array}</div>
      <div>{props.week_nested_array}</div>
    </div>
  );
};
*/

const User = () => {
  const [name, setName] = useState("john");
  const [id, setID] = useState("idnum");
  const [value1, setValue1] = useState(name);
  const [value2, setValue2] = useState(id);

  const [editmode, setEditMode] = useState(false);
  const handleEdit = () => {
    setEditMode(!editmode);
  };
  const handleSave = () => {
    setName(value1);
    setID(value2);
    setEditMode(!editmode);
  };
  return (
    <div>
      {!editmode && (
        <div>
          <div>{name}</div>
          <div>{id}</div>
          <button onClick={handleEdit}>edit</button>
        </div>
      )}
      {editmode && (
        <div>
          <div>
            <input
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            ></input>
          </div>
          <button onClick={handleSave}>save</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const array1 = [0, 1, 2, 0, 1, 2];
  const array2 = [1, 2, 1, 0, 1, 0];

  return (
    <div>
      <User />
      <Grid />
    </div>
  );
};

export default App;
