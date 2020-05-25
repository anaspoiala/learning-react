import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
	state = {
		people: [
			{ id: "dsfadscac", name: "Max", age: 28 },
			{ id: "cdvewfwva", name: "Manu", age: 24 },
			{ id: "vdsvavvav", name: "Ana", age: 20 },
		],
		showPeople: false,
	};

	switchNameHandler = (event, id) => {
		const index = this.state.people.findIndex((p) => p.id === id);
		const person = { ...this.state.people[index] };

		person.name = event.target.value;
		const people = [...this.state.people];
		people[index] = person;

		this.setState({
			people: people,
		});
	};

	togglePeopleHandler = () => {
		const doesShow = this.state.showPeople;
		this.setState({ showPeople: !doesShow });
	};

	deletePersonHandler = (index) => {
		// const people = this.state.people.slice();
		const people = [...this.state.people];
		people.splice(index, 1);
		this.setState({
			people: people,
		});
	};

	render() {
		const style = {
			backgroundColor: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			cursor: "pointer",
		};

		let people = null;
		if (this.state.showPeople) {
			people = (
				<div>
					{this.state.people.map((person, index) => {
						return (
							<Person
								name={person.name}
								age={person.age}
								click={() => this.deletePersonHandler(index)}
								key={person.id}
								changed={(event) => this.switchNameHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>My React App</h1>
				<button style={style} onClick={this.togglePeopleHandler}>
					Show names
				</button>
				{people}
			</div>
		);
	}
}

export default App;
