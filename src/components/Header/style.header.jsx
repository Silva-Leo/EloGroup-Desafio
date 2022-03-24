import React from 'react';
import styled, { css } from 'styled-components';


export const StyleHeader = styled.header`${({theme})=>css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.black};
    height: 40px;
    width: 100%;
`}`;
