import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
import { ModalType } from '../model/modalType';

const TodoInsertBlock = styled.form`
    display: flex;
    background-color: #2b888b;

    textarea {
        background: none;
        outline: none;
        border: none;
        padding: 0.5rem;
        font-size: 1.125rem;
        line-height: 1.5;
        color: white;
        &::placeholder {
            color: #dee2e6;
        }
        flex: 1;
    }

    button {
        background: none;
        outline: none;
        border: none;
        background: #4e86be;
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.1s background ease-in;
        &:hover {
            background: #adb5bd;
        }
    }
`;

interface IProps {
    setSnackBar: React.Dispatch<
        React.SetStateAction<{
            title: string;
            type: ModalType;
            message: string;
            isOpen: boolean;
        }>
    >;
    onAdd: (text: string) => Promise<void>;
}

const TodoInsert: React.FC<IProps> = ({ onAdd, setSnackBar }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    }, []);

    const onAddTodoHandler = useCallback(
        event => {
            onAdd(value);
            setValue('');
            event.preventDefault();
            setSnackBar({
                type: ModalType.INFO,
                title: '등록 완료',
                message: '할일이 등록되었습니다.',
                isOpen: true,
            });
        },
        [onAdd, setSnackBar, value],
    );

    return (
        <TodoInsertBlock>
            <textarea placeholder="할 일을 입력하세요" onChange={onChange} value={value} />
            <button type="submit" onClick={onAddTodoHandler}>
                <MdAdd />
            </button>
        </TodoInsertBlock>
    );
};

export default React.memo(TodoInsert);
