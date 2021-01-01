import { InputAdornment, makeStyles, TextField } from '@material-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import palette, { device } from '../../styles/palette';
import FilterBox from './FilterBox';

const SearchProductBlock = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
    display: flex;
    padding: 1rem;
    padding-bottom: 2rem;
    align-items: center;
    width: 100%;
    background-color: ${palette.grey[0]};
    flex-wrap: wrap;

    .filter-boxes {
        display: flex;
        justify-content: flex-start;
    }

    img {
        cursor: pointer;
        width: 26px;
    }

    @media ${device.laptop} {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        flex-direction: column;

        .filter-boxes {
            display: flex;
            width: 100%;
        }
    }
`;

const useStyles = makeStyles({
    textField: {
        '& > .MuiOutlinedInput-root': {
            borderRadius: '4px;',
        },
        marginRight: '1rem',
        height: '45px',
        width: '305px',

        [`@media ${device.mobile}`]: {
            marginBottom: '1.5rem',
        },
        [`@media (min-width: 520px)`]: {
            marginBottom: '0',
        },
        [`@media ${device.laptop}`]: {
            width: '100%',
            marginRight: '0',
            marginBottom: '1.5rem',
        },
    },
});

const SearchProductContainer: React.FC = () => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [inputToken, setInputToken] = useState<string>('');
    const classes = useStyles();

    const onFocus = () => {
        setIsFocus(true);
    };
    const onBlur = () => {
        setIsFocus(false);
    };

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputToken(event.target.value);
    };

    return (
        <SearchProductBlock>
            <TextField
                variant="outlined"
                onFocus={onFocus}
                onBlur={onBlur}
                InputProps={{
                    className: classes.textField,
                    startAdornment: (
                        <InputAdornment position="start">
                            {isFocus ? (
                                <Link href={`/?search=${inputToken}`}>
                                    <img src="/asset/image/icon-search.svg" alt="search_icon" />
                                </Link>
                            ) : (
                                <Link href={`/?search=${inputToken}`}>
                                    <img src="/asset/image/icon-search.svg" alt="search_icon" />
                                </Link>
                            )}
                        </InputAdornment>
                    ),
                }}
                value={inputToken}
                onChange={onHandleChange}
                className={classes.textField}
                placeholder="Search for applicant"
            />
            <div className="filter-boxes">
                <FilterBox title="Bids" />
                <FilterBox title="Status" />
            </div>
        </SearchProductBlock>
    );
};

export default SearchProductContainer;
