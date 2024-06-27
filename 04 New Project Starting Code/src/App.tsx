import Button from "./components/Button.tsx";

function App() {
  return (
    <main>
      <Button el="button">Button</Button>
      <Button el="anchor" href="https://google.com">A Link</Button>
    </main>
  );
}

export default App;
