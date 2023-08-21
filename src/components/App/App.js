import { useState } from 'react';
import './App.css';
import Ideas from '../Ideas/Ideas';

function App() {

  const [ideas, setIdeas] = useState([]);
  
  console.log('ideas.length ----->', ideas.length)

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      {!ideas.length && <h2>No ideas yet -- add some!</h2>}
      <Ideas ideas={ideas} />
    </main>
  );
}

export default App;
