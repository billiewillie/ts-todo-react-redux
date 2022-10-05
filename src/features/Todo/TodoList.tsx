import TodoItem from "components/TodoItem";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux-hooks";
import { Todo } from "types";
import { removeTodo, toggleTodo } from "features/Todo/todoSlice";
import { selectAllTodos } from "./TodoSelectors";

const TodoList = () => {
	const list = useSelector(selectAllTodos);
	const dispatch = useAppDispatch();

	const handleRemoveTodo = (id: Todo["id"]) => {
		dispatch(removeTodo(id));
	};

	const handleToggleTodo = (id: Todo["id"]) => {
		dispatch(toggleTodo(id));
	};

	return (
		<ul>
			{list.map((todo) => (
				<TodoItem key={todo.id} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo} {...todo} />
			))}
		</ul>
	);
};

export default TodoList;
