
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";




function App() {
	return (
		<>
			<GlobalStyles />
      <Row>

			<div>
				<Heading type='h1'>The Wild Oasis</Heading>
				<Button onClick={() => alert("check in")}>Check in</Button>
				<Input type="number" placeholder="Number of guests" />
			</div>
      
      </Row>
		</>
	);
}

export default App;
