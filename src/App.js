import React from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div>
      <Button border success>click here</Button>
      <Input text="Custom input" placeholder="this is a placeholder" MD/>
    </div>
  );
}

export default App;
