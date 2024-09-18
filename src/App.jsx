import { useState } from "react";
import MyButton from "./assets/MyButton";
import Header from "./assets/Header";
import About from "./assets/About";
import Food from "./assets/Food";
import Card from "./assets/Card";
import Button from "./assets/Button";
import Student from "./assets/Student";
import User from "./User";
import List from "./assets/List";
import Mycomponent from "./Mycomponent";
import Increment from "./assets/Increment";
import Field from "./assets/Field";
import MyForm from "./assets/MyForm";
import Colorpicker from "./assets/Colorpicker";

function App() {
  const fruits = [
    { id: 1, name: "Orange", calories: 95 },
    { id: 2, name: "Apple", calories: 52 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Strawberry", calories: 32 },
    { id: 5, name: "Grapes", calories: 69 },
    { id: 6, name: "Pineapple", calories: 50 },
    { id: 7, name: "Mango", calories: 60 },
    { id: 8, name: "Blueberry", calories: 85 },
  ];
  return (
    <>
    <Colorpicker/>
    <MyForm/>
    <Field/>
      <Increment />
      <Mycomponent />
      <List items={fruits} />
      <User username="Kaneki" isLoggedin={true} />
      <Student name="son goku" />
      <Header />
      <hr></hr>
      <About />
      <Card pro="project1" />
      <Card pro="project3" />
      <Card pro="project2" />
      <Button />
      <Button />

      <Food />
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    </>
  );
}

export default App;
