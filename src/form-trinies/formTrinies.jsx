import { Button, Col, Form, Row } from "react-bootstrap";
import data from "./data.json";
import { useState } from "react";
import { CListTrines } from "../list-trines/listTrines";

export const FormTrinies = () => {
  const [filieres] = useState(data.filieres);
  const [groups, setGroups] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [filier, setFilier] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ListTrines, setListTrines] = useState([]);

  function handleGroups(selectedF) {
    setGroups(filieres.find((f) => f.name === selectedF.target.value).groupe);
    setFilier(selectedF.target.value);
    console.log(filier);
  }

  const handleFirstNameChange = (value) => {
    setFirstName(value.target.value);
  };
  const handleLastNameChange = (value) => {
    setLastName(value.target.value);
  };

  const handleAgeChange = (value) => {
    setAge(value.target.value);
  };

  const handleGroupeChange = (value) => {
    setGroupe(value.target.value);
  };

  const handleAddTrines = () => {
    var list = ListTrines;
    list.push({
      firstName: firstName,
      lastName: lastName,
      age: age,
      filier: filier,
      groupe: groupe,
    });
    setListTrines([...list]);
  };

  return (
    <Row>
      <Col md={4}>
        <Form>
          <Form.Control
            className="mb-3"
            name="firstName"
            type="text"
            placeholder="nome"
            onChange={handleFirstNameChange}
          />
          <Form.Control
            className="mb-3"
            name="lastName"
            type="text"
            placeholder="prenome"
            onChange={handleLastNameChange}
          />
          <Form.Control
            className="mb-3"
            name="age"
            type="number"
            placeholder="age"
            onChange={handleAgeChange}
          />
          <Row>
            <Col>
              <Form.Select
                onChange={handleGroups}
                name="filiere"
                aria-label="choisir une Filiere"
              >
                <option>choisir une filiere</option>
                {filieres.map((f) => {
                  return <option>{f.name}</option>;
                })}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                name="option"
                aria-label="choisir une optioin"
                onChange={handleGroupeChange}
              >
                <option>choisir une option</option>
                {groups.map((g) => {
                  return <option>{g}</option>;
                })}
              </Form.Select>
            </Col>
          </Row>
          <Button variant="outline-primary mt-1" onClick={handleAddTrines}>
            Ajouter
          </Button>
        </Form>
      </Col>
      <Col>
        <CListTrines trinesList={ListTrines} />
      </Col>
    </Row>
  );
};
