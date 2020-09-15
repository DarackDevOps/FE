import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import Header from '../components/board/Header';
import Lists from '../components/board/aPostList';
import axios from 'axios';
import PageNumber from '../components/board/aPageNumber';

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
  const [postsPerPage] = useState(5); //얼마나 표시해주고 싶은지

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/board/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (PageNumber) => setCurrentPage(PageNumber);
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
        <Lists posts={currentPosts} loading={loading} />
      </Table>
      <PageNumber
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Posts;
