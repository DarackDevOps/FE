import React from "react"
import styled from "styled-components"
import Button from "../common/Button"

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

const Td = styled.td<{width: string}>`
    width: ${props => props.width};
    font-weight: normal;
    text-align: ${props => (props.width === "800px")? "left" : "center"};
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #444444;
`;

const PageNumbers = styled.div`
    display: flex; 
    justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/ 
    align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */

`;

const PageNumber = styled.div`
    display: inline-block;
    margin: 0% 0.5%;
`;

const WriteButton = styled(Button)`
    margin-left: 65%;
`;
const Posts= () => {
    return(
        <div>
            <WriteButton>글쓰기</WriteButton>
            <Table>
                <thead>
                    <tr>
                        <Th width="800px">제목</Th>
                        <Th width="120px">조회</Th>
                        <Th width="120px">날짜일</Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">냉장고 경고음 고장수리 감동입니다.</Td>
                        <Td width="120px">100</Td>
                        <Td width="120px">2019-07-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">친절한 설명과 액정 보호 필름 부착</Td>
                        <Td width="120px">5</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <Td width="800px">휴대폰 필름 교체</Td>
                        <Td width="120px">2,810</Td>
                        <Td width="120px">2020-08-24</Td>
                    </tr>
                </tbody>
            </Table>
            <PageNumbers>
                    <PageNumber>1</PageNumber>
                    <PageNumber>2</PageNumber>
                    <PageNumber>3</PageNumber>
                    <PageNumber>4</PageNumber>
                    <PageNumber>5</PageNumber>
                    <PageNumber>6</PageNumber>
            </PageNumbers>
        </div>
    );
}

export default Posts;