import React from "react"
import styled from "styled-components"

const PageNumbers = styled.div`
    display: flex; 
    justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/ 
    align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */

`;

const PageNumber = styled.div`
    display: inline-block;
    margin: 0% 0.5%;
`;

const aPagenumber = () => {

    return (
        <PageNumbers>
            <PageNumber>1</PageNumber>
            <PageNumber>2</PageNumber>
            <PageNumber>3</PageNumber>
            <PageNumber>4</PageNumber>
            <PageNumber>5</PageNumber>
            <PageNumber>6</PageNumber>
        </PageNumbers>
    );

}

export default aPagenumber;