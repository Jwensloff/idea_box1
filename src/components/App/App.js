import { useState } from 'react';
import './App.css';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';

function App() {
  const [ideas, setIdeas] = useState([]);

  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea]);
  }

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} />
      {!ideas.length && <h2>No ideas yet -- add some!</h2>}
    </main>
  );
}

export default App;
