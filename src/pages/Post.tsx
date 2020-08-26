import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button"
import Header from '../components/board/Header';

const Table = styled.table`
    display: block;
    margin: 1% 23%;
    width: 960px;
    border-top: 1px solid #444444;
    border-collapse: collapse;
`;

// const Th = styled.th`
//     width: 960px;
//     border-bottom: 1px solid #444444;
//     padding-top: 7px;
//     padding-bottom: 7px;
// `;

const Td = styled.td<{ width: string }>`
    width: ${ props => props.width};
    text-align: left;
    padding-left: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-bottom: 1px solid #444444;
`;

const ContentTd = styled(Td)`
    padding-top: 2%;
    padding-bottom: 5%;
`; 

const ListButton = styled(Button)`
    margin-left: 75%;
`;

const Post = () => {
    return(
        <div>
            <Header />
            <Table>
                    <Td width="120">제목</Td>
                    <Td width="840" colSpan={3}>휴대폰 필름교체</Td>
                <tbody>
                    <tr>
                        <Td width="120">날짜</Td>
                        <Td width="360">2018-02-10</Td>
                        <Td width="120">방문 센터</Td>
                        <Td width="360">중대전센터</Td>
                    </tr>
                </tbody>
                
                <tbody>
                    <tr>
                        <ContentTd width="960" colSpan={4}>
                            <div>
                            휴대폰 필름을 몇번 씩 교체하러 방문했는데 폰기종은 갤럭시s8+ 입니다.
                            </div>
                        </ContentTd>
                    </tr>
                </tbody>
            </Table>
            <ListButton>목록</ListButton>
        </div>
    );
}

export default Post;
