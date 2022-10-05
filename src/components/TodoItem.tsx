import { Todo } from "types";

interface TodoItemProps extends Todo {
	toggleTodo: (id: Todo["id"]) => void;
	removeTodo: (id: Todo["id"]) => void;
}

const TodoItem = ({ id, title, completed, toggleTodo, removeTodo }: TodoItemProps) => {
	return (
		<li>
			<input id={id} checked={completed} onChange={() => toggleTodo(id)} type='checkbox' />
			<span>{title}</span>
			<span onClick={() => removeTodo(id)}>&times;</span>
		</li>
	);
};

export default TodoItem;
