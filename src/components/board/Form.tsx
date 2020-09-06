import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

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

const InputButton = styled.input`
  background-color: #343a40;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background: #868e96;
  }
`;

type SetData = {
  title: string;
  visit_center: string;
  contents: string;
  userID: string;
};

const Form = () => {
  const [form, setForm] = useState<SetData>({
    title: '',
    visit_center: '',
    contents: '',
    userID: '',
  });

  const { title, visit_center, contents, userID } = form;

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    //  event.preventDefault()
    console.log('contents');
    console.log('check ' + contents);
    console.log('check ' + form.title);
    fetch('http://localhost:3001/dbTest/board/write', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      body: JSON.stringify({
        title: title,
        userID: userID,
        visit_center: visit_center,
        contents: contents,
      }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.info(err));
  };

  return (
    <form onSubmit={handleSubmit} action="/board">
      <Div>
        <Label>제목</Label>
        <Input name="title" value={title} onChange={handleChange} />
      </Div>
      <Div>
        <Label>이름</Label>
        <Input name="userID" value={userID} onChange={handleChange} />
        <Label>방문센터</Label>
        <Input
          name="visit_center"
          value={visit_center}
          onChange={handleChange}
        />
      </Div>
      <Div>
        <WriteLabel>내용</WriteLabel>
        <WriteInput
          name="contents"
          value={contents}
          onChange={handleChange}
        ></WriteInput>
      </Div>
      <Div>
        <Input type="file"></Input>
      </Div>
      <ButtonDiv>
        <BButton>
          <InputButton type="submit" value="제출" />
        </BButton>
        <Link to="/board">
          <BButton>취소</BButton>
        </Link>
      </ButtonDiv>
    </form>
  );
};

export default Form;
