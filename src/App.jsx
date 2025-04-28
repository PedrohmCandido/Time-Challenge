import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" timeTarget={1}/>
        <TimeChallenge title="Not Easy" timeTarget={5}/>
        <TimeChallenge title="Getting Tough" timeTarget={10}/>
        <TimeChallenge title="Pros Only" timeTarget={15}/>
      </div>
    </>
  );
}

export default App;
