import { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState(""); 
  return (
    <div className="App">
      <div class="col-md-12">
        <button class="btn btn-danger pull-right">Log Out</button>
      </div>
      <div class="col-md-12">
        <button class="btn btn-primary pull-left">View all students</button>
      </div>
      <div class="col-md-12 text-center">
        <button class="btn btn-primary pull-left">Add Student </button>
     </div>
      <h1> Student Search </h1>
      <label> Search Student</label>
      <input type="text" onChange={e => setQuery(e.target.value)} />
      <div class="col-md-12 text-center">
        <button class="btn btn-primary">Search </button>
     </div>
     
    </div>
  );
}

export default App;
