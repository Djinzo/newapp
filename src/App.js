import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FormTrinies } from "./form-trinies/formTrinies";

function App() {
  return (
    <div className="p-4">
      {" "}
      <FormTrinies></FormTrinies>
    </div>
  );
}

export default App;
