import React, { useState } from "react";
//import ReactDOM from "react-dom";
import styled from "styled-components";
import { Link } from 'react-router-dom';
//import { useForm } from "react-hook-form";
import Button from "../components/common/Button"
import Header from '../components/board/Header';

/**
 * styled component 정의
 * 대충 빠르게 익히고 적응함
 * 나중에 진짜 하게 되면 공부하겠지 뭐 
 */
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
    width: 35%;
`;

const WriteInput = styled.textarea`
    margin-left: 1%;
    margin-right: 2%;
    border: none;
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

/**
 * 함수, 인터페이스 정의
 * props, state 사용법 알기
 */
interface SetData {
    onSubmit: ( form: {
        title: string;
        name: string;
        visit_center: string;
        contents: string;
        }) => object;
};

interface FixData {
    id: string;
    date: Date | string | number;
};

const Write = ({ onSubmit }: SetData) => {
    const [form, setForm] = useState({
        title: '',
        name: '',
        visit_center: '',
        contents: ''
    });

    const { title, name, visit_center, contents } = form;

    const handleChange = ( event : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    
    const handleSubmit = (event : React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(form);
        console.log(form);
        setForm({
            title: '',
            name: '',
            visit_center: '',
            contents: ''
        });
    };

    return (
        <>
        <Header />
        <MainDiv>
            <form>
                <Div>
                    <Label>제목</Label>
                    <Input name="title" value={title} onChange= {handleChange}/>
                </Div>
                <Div>
                    <Label>이름</Label>
                    <Input name="name" value={name} onChange= {handleChange}/>
                    <Label>방문센터</Label>
                    <Input name="visit_center" value={visit_center} onChange= {handleChange}/>
                </Div>
                <Div>
                   <WriteLabel>내용</WriteLabel>
                    <WriteInput name="contents" value={contents} onChange= {handleChange}></WriteInput>
                </Div>
                <ButtonDiv>
                <Link to="/board"><BButton type="submit" onSubmit={handleSubmit}>등록</BButton></Link>
                <Link to="/board"><BButton>취소</BButton></Link>
            </ButtonDiv>
            </form>
        </MainDiv>
        </>
    );
};

export default Write;