import React from 'react';
import styled from 'styled-components';
import { TodoType } from '../model/todoType';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`;

interface IProps {
    sample?: string;
    todos: TodoType[];
    onRemove: (id: any) => void;
    onToggle: (id: number) => void;
}

const TodoList: React.FC<IProps> = ({ todos, onRemove, onToggle }) => {
    const sortedTodos = todos.sort((a, b) => {
        return a.checked === b.checked ? (a.created_at > b.created_at ? 1 : -1) : a.checked ? 1 : -1;
    });
    return (
        <TodoListBlock>
            {sortedTodos.map((todo: any) => (
                <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </TodoListBlock>
    );
};

export default React.memo(TodoList);
