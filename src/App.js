import avatar from './avatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="Avatar-container">
          <img src={avatar} className="App-avatar" alt="avatar" />
        </div>
        <h2>
          Hey, I'm Icaro Seara, and this is my personal website.
        </h2>
      </header>
    </div>
  );
}

export default App;
