import { useState } from "react";
import { Todo } from "types";

interface TodoItemProps extends Todo {
	toggleTodo: (id: Todo["id"]) => void;
	removeTodo: (id: Todo["id"]) => void;
}

type ITodo = {
	id: string;
	title: string;
	completed: boolean;
};

const TodoItem = ({ id, title, completed, toggleTodo, removeTodo }: TodoItemProps) => {
	const [todo, setTodo] = useState<ITodo | null>(null);

	return (
		<li>
			<input id={id} onChange={() => toggleTodo(id)} type='checkbox' />
			<span>{title}</span>
			<span onClick={() => removeTodo(id)}>{completed}</span>
		</li>
	);
};

export default TodoItem;
