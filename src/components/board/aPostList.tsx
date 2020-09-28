import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Td = styled.td<{ width: string }>`
  width: ${(props) => props.width};
  font-weight: normal;
  text-align: ${(props) => (props.width === '800px' ? 'left' : 'center')};
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #444444;
`;

const aPostList = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <tbody>
      {posts.map((post) => (
        <tr key={post.pid}>
          <Td width="100px">{post.pid}</Td>
          <Td width="800px">
            <Link to={`/board/post/${post.pid}`}>{post.title}</Link>
          </Td>
          <Td width="120px">{post.visit_number}</Td>
          <Td width="120px">{post.date}</Td>
        </tr>
      ))}
    </tbody>
  );
};

export default aPostList;
