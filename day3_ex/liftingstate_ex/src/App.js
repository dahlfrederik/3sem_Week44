import React, { useState } from "react";
import "./App.css";
import PersonList from "./PersonList";
import NewPerson from "./NewPerson";
import { v1 as uuid } from "uuid";

function App() {
  const initialData = [
    { id: uuid(), personText: "Peter" },
    { id: uuid(), personText: "Ole" },
    { id: uuid(), personText: "Jan" },
  ];
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", personText: "" });
  console.log(persons);

  const addPerson = (person) => {
    if (person.id === "") {
      // id=-1 Indicates a new object
      person.id = uuid();
      persons.push(person);
    } else {
      //if id != "", it's an existing person. Find it and add changes
      let personToEdit = persons.find((p) => p.id === person.id);
      personToEdit.personText = person.personText;
    }
    setPersons([...persons]);
    setNewPerson({ id: "", personText: "" });
  };

  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allPerson">
          <PersonList persons={persons} />
        </div>
        <div className="col-5 new-person">
          <NewPerson addPerson={addPerson} nextPerson={newPerson} />
        </div>
      </div>
    </div>
  );
}
export default App;
