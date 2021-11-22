import Timeline from './components/timeline/Timeline';
import KudoProvider from './contexts/KudoContext';

function App() {
  return (
    <main>
      <KudoProvider>
        <Timeline />
      </KudoProvider>
    </main>
  );
}

export default App;
