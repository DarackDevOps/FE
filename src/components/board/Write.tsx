import React from "react";
//import ReactDOM from "react-dom";
import styled from "styled-components";
//import { useForm } from "react-hook-form";

import Button from "../common/Button"

const MainDiv = styled.div`
    display: block;
    margin: 1% 23%;
    width: 50%;
    border-top: 1px solid #444444;
    border-collapse: collapse;
`;

const Div = styled.div`
    text-align: left;
    padding-left: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-bottom: 1px solid #444444;
`;

const Label = styled.label`
    margin-left: 1%;
    margin-right: 2%;
    width: 20%;
`;

const WriteLabel = styled(Label)`
    position: relative;
    bottom: 85px;
    align-items: center;
    vertical-align: middle;
`;

const Input = styled.input`
    margin-left: 1%;
    margin-right: 2%;
    border: none;
    width: 38%;
`;

const WriteInput = styled(Input)`
    width: 85%;
    height: 200px;
    resize: none;
`;

const ButtonDiv = styled.div`
    margin-left: 45%;
    margin-top: 1%;
`;

const BButton = styled(Button)`
    margin: 1%;
`;
const Write = () => {

    return (
        <MainDiv>
            <form>
                <Div>
                    <Label>제목</Label>
                    <Input></Input>
                </Div>
                <Div>
                    <Label>이름</Label>
                    <Input></Input>
                    <Label>방문센터</Label>
                    <Input></Input>
                </Div>
                <Div>
                   <WriteLabel>내용</WriteLabel>
                    <WriteInput as="textarea"></WriteInput>
                </Div>
            </form>
            <ButtonDiv>
                <BButton>등록</BButton>
                <BButton>취소</BButton>
            </ButtonDiv>
        </MainDiv>
        
    );
};

export default Write;