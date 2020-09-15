import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/board/Header';
import Lists from '../components/board/aPostList';
import PageNumber from '../components/board/APageNumber';

const Table = styled.table`
  display: block;
  margin: 1% 30%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
`;

const Th = styled.th<{ width: string }>`
  width: ${(props) => props.width};
  font-weight: 500;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #444444;
`;

const WriteButton = styled(Button)`
  margin-left: 65%;
`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); //현재 보는 페이지

  const url = 'http://localhost:3001/board/posts/' + currentPage;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      await fetch(url, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });

      setLoading(false);
    };
    fetchPosts();
  }, [currentPage]);

  const paginate = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

  return (
    <div>
      <Header />
      <Link to="/board/write">
        <WriteButton>글쓰기</WriteButton>
      </Link>
      <Table>
        <thead>
          <tr>
            <Th width="100px">제목</Th>
            <Th width="800px">제목</Th>
            <Th width="120px">조회</Th>
            <Th width="120px">날짜일</Th>
          </tr>
        </thead>
        <Lists posts={posts} loading={loading} />
      </Table>
      <PageNumber paginate={paginate} />
    </div>
  );
};

export default Posts;
