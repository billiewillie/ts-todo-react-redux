import TodoItem from "components/TodoItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux-hooks";
import { Todo } from "types";
import { selectAsyncTodos } from "./asyncTodoSelectors";
import { fetchAllTodos } from "./todoAsyncActions";

const TodoList = () => {
	const { list } = useSelector(selectAsyncTodos);
	const dispatch = useAppDispatch();

	const handleRemoveTodo = (id: Todo["id"]) => {
		// dispatch(removeTodo(id));
	};

	const handleToggleTodo = (id: Todo["id"]) => {
		// dispatch(toggleTodo(id));
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

export default TodoList;
