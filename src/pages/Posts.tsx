import React from "react"
import styled from "styled-components"
import Button from "../components/common/Button"
import { Link } from 'react-router-dom';
import Header from '../components/board/Header';
import ALISTPOST from '../components/board/aPostList';
import PageNumber from '../components/board/aPageNumber';

const Table = styled.table`
    display: block;
    margin: 1% 30%;
    border-top: 1px solid #444444;
    border-collapse: collapse;
`;

const Th = styled.th<{width: string}>`
    width: ${props => props.width};
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #444444;
`;

const WriteButton = styled(Button)`
    margin-left: 65%;
`;



const Posts= () => {

    return(
        <div>
            <Header/>
                <Link to="/board/write">
                    <WriteButton>글쓰기</WriteButton>
                </Link>
            <Table>
                <thead>
                    <tr>
                        <Th width="800px">제목</Th>
                        <Th width="120px">조회</Th>
                        <Th width="120px">날짜일</Th>
                    </tr>
                </thead>
               <ALISTPOST />
            </Table>
            <PageNumber/>
           
        </div>
    );
}

export default Posts;