import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch} from "@reduxjs/toolkit";
import { Container } from './Container';
import {clearControls} from "../feature/controls/controlsSlice";
import ThemeSwitcher from "../feature/theme/themeSwitcher";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;


export const Header = () => {
  const dispatch = useDispatch();
  const clearUp = () => dispatch(clearControls())


  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={clearUp}>Where is the world?</Title>
          <ThemeSwitcher/>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
