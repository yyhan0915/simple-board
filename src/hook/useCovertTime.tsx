/**
 * Date.now의 시간 숫자를 받아,  표준 시간 형식으로 보여주는 훅
 * date를 number으로 넣으면, 요일을 붙여서
 * X월 X일 XX:XX AM / PM 라는 값을 반환한다.
 * @param date
 */

import { useCallback } from 'react';

const useConvertTime = (date: number): string => {
    const _date = new Date(date);

    const result = useCallback(_date => {
        return `${_date.getMonth() + 1}월 ${_date.getDate()}일 ${_date.getHours()}:${_date.getMinutes()}`;
    }, []);

    return result(_date);
};

export default useConvertTime;
