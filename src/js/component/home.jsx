import React, { useState } from "react";


const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [ todos, setTodos ] = useState([]);

	const handleAddTodo = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			setTodos([...todos, inputValue.trim()]);
			setInputValue("");
		}
	};

	const handleDeleteTodo = (index) => {
		setTodos(todos.filter((todo, i) => index !== i))
	};


	return (
		<div className="container">
			<h1 className="text-center mt-5">todos</h1>
			<div className="card todo-card mx-auto mt-5" style={{ maxWidth: "800px" }}>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<input 
							type="text"
							onChange={(e) => setInputValue(e.target.value)} 
							value={inputValue}
							onKeyDown={handleAddTodo}
							placeholder="What needs to be done?"
						/>
					</li>
					{todos.length === 0 ? (
						<li className="list-group-item no-tasks">-- No tasks, add a task --</li>
					) : (
						todos.map((todo, index) => (
							<li className="list-group-item" key={index}>
								<div className="list-group-item-todo" id="screen">
									{todo}
								</div>
								<span className="x-container" onClick={() => handleDeleteTodo(index)}>
									<i className="fa-solid fa-x"></i>
								</span>
							</li>
						))
					)}
				</ul>
				<div className="card-footer text-secondary">
					{todos.length} {todos.length === 1 ? "item" : "items"} left
				</div>
			</div>
		</div>
	);
};


export default Home;