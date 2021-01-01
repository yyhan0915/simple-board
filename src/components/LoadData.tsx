import React, { useCallback } from 'react';
import styled from 'styled-components';
import jwt from 'jsonwebtoken';
import { TodoType } from '../model/todoType';
import { ModalType } from '../model/modalType';

const LoadDataBlock = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 990;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal {
        z-index: 991;
        width: 300px;
        height: 200px;
        background-color: white;
        opacity: 1;
        border-radius: 10px;
        display: flex;
        flex-direction: column;

        .message {
            flex: 4;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: black;
            font-size: 16px;
        }

        .buttons {
            display: flex;
            flex: 1;

            .yes_button {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                cursor: pointer;
                background-color: #d53b3b;
                color: white;
                font-weight: 600;
                border-radius: 0 0 0 10px;
            }

            .no_button {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                cursor: pointer;
                background-color: #ccc;
                color: white;
                font-weight: 600;
                border-radius: 0 0 10px 0;
            }
        }
    }
`;

interface IProps {
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
    setLoadDataOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSnackBar: React.Dispatch<
        React.SetStateAction<{
            title: string;
            type: ModalType;
            message: string;
            isOpen: boolean;
        }>
    >;
}

const LoadData: React.FC<IProps> = ({ setTodos, setLoadDataOpen, setSnackBar }) => {
    const loadDataHandler = useCallback(() => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('data_token') : null;

        if (!token) {
            console.log('저장된 데이터가 없거나, 로컬스토리지가 작동하지 않습니다.');
            return;
        }
        const decoded = jwt.verify(token, process.env.JASON_WEB_TOKEN_SECRET as string);
        setTodos((decoded as { data: TodoType[] }).data);
        setLoadDataOpen(true);
        setSnackBar({
            type: ModalType.SUCCESS,
            title: '불러오기 성공',
            message: '데이터를 성공적으로 불러왔습니다.',
            isOpen: true,
        });
    }, [setLoadDataOpen, setSnackBar, setTodos]);

    const skipHandler = useCallback(() => {
        setLoadDataOpen(true);
        setSnackBar({
            type: ModalType.SUCCESS,
            title: '불러오기 취소',
            message: '데이터 로딩 취소. 기존의 데이터는 삭제 될 수 있습니다.',
            isOpen: true,
        });
    }, [setLoadDataOpen, setSnackBar]);

    return (
        <LoadDataBlock>
            <div className="modal">
                <div className="message">
                    <div className="title">기존 데이터가 있습니다.</div>
                    <div className="content">불러오시겠습니까?</div>
                </div>
                <div className="buttons">
                    <div className="yes_button" onClick={loadDataHandler}>
                        불러오기
                    </div>
                    <div className="no_button" onClick={skipHandler}>
                        건너뛰기
                    </div>
                </div>
            </div>
        </LoadDataBlock>
    );
};

export default LoadData;
