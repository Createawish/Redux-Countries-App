import React, {useEffect} from 'react';
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "./themeSlice";
import styled from "styled-components";



const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const toggleTheme =() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))


    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
                <IoMoonOutline size="14px" />
            ) : (
                <IoMoon size="14px" />
            )}{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
        </ModeSwitcher>
    );
};

export default ThemeSwitcher;