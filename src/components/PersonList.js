/**
 * { personList }, App.js den gelen props
 * <PersonList personList={personList} />
 */
const PersonList = ({ personList }) => {
  const personListTable = personList.map((person, index) => (
    <tr key={index}>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{personListTable}</tbody>
    </table>
  );
};

export default PersonList;
