import TodoItem from "components/TodoItem";
import { Todo } from "types";

interface TodoListProps {
	list: Todo[];
	toggleTodo: (id: Todo["id"]) => void;
	removeTodo: (id: Todo["id"]) => void;
}
const TodoList = ({ list, toggleTodo, removeTodo }: TodoListProps) => {
	return (
		<ul>
			{list.map((todo) => (
				<TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
			))}
		</ul>
	);
};

export default TodoList;
