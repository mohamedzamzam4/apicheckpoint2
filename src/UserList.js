import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import React from "react";

function UserList() {
  //definition of the state ListOfUser
  const [listOfUSer, setlistOfUSer] = useState([]);

  useEffect(() => {
    //utiliser axios pour obtenir les donnees de l'api
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      //update the state
      setlistOfUSer(response.data);
    });
  }, []);

  return (
    //afficher le liste d'utlisateurs
    <div>
      <header className="App-header">
        <Table className="user-table" striped bordered hover>
          <thead>
            <tr style={{ fontSize: "20px", textAlign: "center" }}>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>street</th>
              <th>suite</th>
              <th>city</th>
              <th>zipcode</th>
              <th>email</th>
              <th>phone</th>
              <th>website</th>
            </tr>
          </thead>
          {listOfUSer.map((user) => (
            <tbody>
              <tr style={{ fontSize: "17px" }}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.address.street}</td>
                <td>{user.address.suite}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </header>
    </div>
  );
}

export default UserList;
