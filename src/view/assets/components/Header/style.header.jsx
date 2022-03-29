import React from 'react';
import styled, { css } from 'styled-components';


export const StyleHeader = styled.header`${({theme})=>css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.backgroundGray};
    height: 10vh;
    width: 100%;
    margin-top: 3em;
`}`;
