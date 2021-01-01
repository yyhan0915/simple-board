import jwt from 'jsonwebtoken';
import { NextPage } from 'next';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Modal from '../components/common/Modal';
import LoadData from '../components/LoadData';
import TodoContainer from '../components/TodoContainer';
import TodoFilter from '../components/TodoFilter';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { ModalType } from '../model/modalType';
import { TodoType } from '../model/todoType';
import MainTemplate from '../template/MainTemplate';

const IndexPage: NextPage = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const nextId = useRef(todos.length + 1);
    const [loadDataOpen, setLoadDataOpen] = useState<boolean>(false);
    const [token, setToken] = useState<string>('');
    const [snackBar, setSnackBar] = useState<{
        title: string;
        type: ModalType;
        message: string;
        isOpen: boolean;
    }>({
        title: '',
        type: ModalType.SUCCESS,
        message: '',
        isOpen: false,
    });
    const [filters, setFilters] = useState<boolean[]>([false, false]);

    const { title, type, message, isOpen } = snackBar;

    const filteredTodos = filters[0]
        ? todos.filter(todo => todo.checked == true)
        : filters[1]
        ? todos.filter(todo => todo.checked == false)
        : todos;

    const onAdd = useCallback(
        async (text: string) => {
            const todo = { id: nextId.current, text, checked: false, created_at: Date.now() };
            setTodos(todos => [...todos, todo]);
            nextId.current += 1;
            const token = jwt.sign({ data: [...todos, todo] }, process.env.JASON_WEB_TOKEN_SECRET as string);
            localStorage.setItem('data_token', token);
        },
        [todos],
    );
    const onRemove = useCallback(
        id => {
            setTodos(todos.filter((todo: TodoType) => todo.id !== id));

            setSnackBar({
                type: ModalType.WARNING,
                title: '삭제 완료',
                message: '할 일이 삭제 되었습니다.',
                isOpen: true,
            });

            if (todos.length == 1) {
                localStorage.removeItem('data_token');
                return;
            }

            const token = jwt.sign(
                { data: [...todos.filter((todo: TodoType) => todo.id !== id)] },
                process.env.JASON_WEB_TOKEN_SECRET as string,
            );
            localStorage.setItem('data_token', token);
        },
        [todos],
    );

    const onToggle = useCallback(
        (id: number) => {
            setTodos([...todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))]);
            const token = jwt.sign(
                { data: [...todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))] },
                process.env.JASON_WEB_TOKEN_SECRET as string,
            );
            localStorage.setItem('data_token', token);
        },
        [todos],
    );

    useEffect(() => {
        setToken(localStorage.getItem('data_token') || '');
    }, []);

    return (
        <MainTemplate>
            {token && !loadDataOpen && (
                <LoadData setTodos={setTodos} setLoadDataOpen={setLoadDataOpen} setSnackBar={setSnackBar} />
            )}
            <TodoContainer>
                <TodoInsert onAdd={onAdd} setSnackBar={setSnackBar} />
                {todos.length > 0 && <TodoFilter setFilters={setFilters} filters={filters} />}
                <TodoList onRemove={onRemove} todos={filteredTodos} onToggle={onToggle} />
            </TodoContainer>
            {isOpen && (
                <Modal
                    type={type}
                    onClose={() => setSnackBar(prev => ({ ...prev, isOpen: false }))}
                    message={message}
                    title={title}
                />
            )}
        </MainTemplate>
    );
};

export default IndexPage;
