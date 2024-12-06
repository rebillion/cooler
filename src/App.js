import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to My React App with PyScript</h1>
      <div className="py-3">
        <p>This is a simple example of integrating PyScript with React and Bootstrap.</p>
        <py-script>
          # Python code running in the browser
          def greet(name):
              return f"Hello, {name}!"

          name = "World"
          greeting = greet(name)
          display(greeting)
        </py-script>
      </div>
    </div>
  );
}

export default App;
