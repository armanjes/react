import Card from "./components/Card"
import Welcome from "./components/Welcome"

const App = () => {
  return (
    <>
      <Welcome name="John Doe" />
      <Card>
        <h2>Welcome</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
      <Card color="yellow">
        <h2>Warning</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
    </>
  );
}
export default App