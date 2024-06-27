import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";

function App() {
  return (
    <main>
      <Container as={Button}>Click me</Container>
      {/* <Button el="button">Button</Button>
      <Button el="anchor" href="https://google.com">A Link</Button> */}
    </main>
  );
}

export default App;
