import React, { Fragment, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
  { name: "James", num: 13 },
  { name: "Tor", num: 1 },
  { name: "Aun", num: 2 },
  { name: "Bank", num: 4 },
  {name: "Tank",num: 3}
];

function List(props){
  const list = props.list.map(item => <li>{item.name} {item.num}</li>)

  return (
    <Fragment>
        {list}
    </Fragment>
  )
}

function App() {
  const [search, setSearch] = useState("");
  const filteredList = list.filter(item => item.name.includes(search))
  
  return (
    <div>
      <ul><List list={filteredList}/></ul>
      <input value={search} onChange={event => setSearch(event.target.value)} />
    </div>
  );
}

export default App;
