import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "components/TodoItem";
import { useAppDispatch } from "redux-hooks";
import { Todo } from "types";
import { selectAsyncTodos } from "./asyncTodoSelectors";
import { fetchAllTodos, removeTodo, toggleTodo } from "./todoAsyncActions";

const AsyncTodoList = () => {
	const { list } = useSelector(selectAsyncTodos);
	const dispatch = useAppDispatch();

	const handleRemoveTodo = (id: Todo["id"]) => {
		dispatch(removeTodo(id));
	};

	const handleToggleTodo = (id: Todo["id"]) => {
		dispatch(toggleTodo(id));
	};

	useEffect(() => {
		dispatch(fetchAllTodos());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ul>
			{list.map((todo) => (
				<TodoItem key={todo.id} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo} {...todo} />
			))}
		</ul>
	);
};

export default AsyncTodoList;
