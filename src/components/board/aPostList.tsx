import React from 'react';
import styled from "styled-components"

const Td = styled.td<{width: string}>`
    width: ${props => props.width};
    font-weight: normal;
    text-align: ${props => (props.width === "800px")? "left" : "center"};
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #444444;
`;

const aPostList = () => {

    return(
         <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>

    );
};

export default aPostList;