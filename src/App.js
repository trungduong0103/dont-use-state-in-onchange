import React from "react";
import "./styles.css";

export default function App() {
  const startingObject = {
    fruit: "grapefruit",
    hasSwitchedToMango: false
  };

  function getObject() {
    return startingObject;
  }

  const [object, setObject] = React.useState(() => getObject());

  // React.useEffect(() => {
  //   if (object.fruit === "mango") {
  //     setObject((prevState) => ({ ...prevState, hasSwitchedToMango: true }));
  //   }
  // }, [object.fruit]);

  console.log(object);

  const { fruit } = object;

  return (
    <div className="App">
      {JSON.stringify(object)}
      <br />
      <select
        value={object.fruit}
        onChange={({ target }) => {
          setObject((prevState) => ({
            ...prevState,
            fruit: target.value,
            // fruit is now stale
            hasSwitchedToMango: fruit === "mango" ? true : false
            // use target.value to get latest value
            // hasSwitchedToMango: target.value === "mango" ? true : false
          }));
        }}
      >
        <option value="grapefruit">grapefruit</option>
        <option value="lime">lime</option>
        <option value="coconut">coconut</option>
        <option value="mango">mango</option>
      </select>
    </div>
  );
}
