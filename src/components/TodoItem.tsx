import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import styled from 'styled-components';
import useConvertTime from '../hook/useCovertTime';
import { TodoType } from '../model/todoType';

const TodoItemBlock = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;

    &:nth-child(even) {
        background-color: #f8f9fa;
    }

    .checkbox {
        display: flex;
        cursor: pointer;
        flex: 1;
        align-items: center;

        svg {
            font-size: 1.5rem;
        }

        .text {
            margin-left: 0.5rem;
            flex: 1;
            white-space: pre-line;

            .time {
                color: grey;
                font-size: 0.8rem;
            }
        }

        &.checked {
            svg {
                color: #22b8cf;
            }

            .text {
                color: #adb5bd;
                text-decoration: line-through;
            }
        }
    }

    .remove {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #ff6b6b;
        cursor: pointer;
        &:hover {
            color: #ff8787;
        }
    }

    & + & {
        border-top: 1px solid #dee2e6;
    }
`;

interface IProps {
    todo: TodoType;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}

const TodoItem: React.FC<IProps> = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked, created_at } = todo;
    return (
        <TodoItemBlock>
            <div className={checked ? 'checkbox checked' : 'checkbox'} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">
                    {text} <span className="time">[{useConvertTime(created_at)}]</span>
                </div>
            </div>
            <br />
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </TodoItemBlock>
    );
};

export default TodoItem;
