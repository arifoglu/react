import React, { useState } from "react";

const AddPerson = ({ addPerson }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  /**
   * Buttonun click olayinda tetiklenen fonksiyon
   */
  const handleClick = (e) => {
    e.preventDefault();
    const newPerson = {
      firstName: firstName,
      lastName: lastName,
    };
    addPerson(newPerson); // App.js den gelen addPerson fonksiyonu
  };

  return (
    <React.Fragment>
      <form>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <button type="submit" onClick={handleClick}>
          Save
        </button>
      </form>

      <br />
      <br />
    </React.Fragment>
  );
};

export default AddPerson;
