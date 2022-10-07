import NewAsyncTodo from "features/AsyncTodo/NewAsyncTodo";
import AsyncTodoList from "features/AsyncTodo/AsyncTodoList";

import "./App.css";

function App() {
	return (
		<div className='App'>
			<NewAsyncTodo />
			<AsyncTodoList />
		</div>
	);
}

export default App;
