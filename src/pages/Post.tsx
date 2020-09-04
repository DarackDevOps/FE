import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Header from '../components/board/Header';
import axios from 'axios';

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
  width: ${(props) => props.width};
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

type SetData = {
  title: string;
  visit_center: string;
  contents: string;
  userID: string;
  date: string;
};

const Post = ({ match }) => {
  const [post, setPost] = useState<SetData>({
    title: '',
    visit_center: '',
    contents: '',
    userID: '',
    date: '',
  });

  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      axios
        .get('http://localhost:3001/board/post', {
          params: {
            pid: match.params.pid,
          },
        })
        .then((response) => {
          setUrl(response.request.responseURL);
          setPost(response.data);
        });
    };

    fetchPost();
  }, []);

  return (
    <div>
      <Header />
      <Table>
        <Td width="120">제목</Td>
        <Td width="840" colSpan={3}>
          {post.title}
        </Td>
        <tbody>
          <tr>
            <Td width="120">날짜</Td>
            <Td width="360">{post.date}</Td>
            <Td width="120">방문 센터</Td>
            <Td width="360">{post.visit_center}</Td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <ContentTd width="960" colSpan={4}>
              <div>{post.contents}</div>
            </ContentTd>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <ContentTd width="960" colSpan={4}>
              <img src={url} />
            </ContentTd>
          </tr>
        </tbody>
      </Table>
      <ListButton>목록</ListButton>
    </div>
  );
};

export default Post;
