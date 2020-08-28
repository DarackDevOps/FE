import React from "react";
import Posts from './Posts';

const Board = () => {
  // if(match.params.location = "/board") return <Posts/>
  // const onSubmit = ( form: {
  //   title: string;
  //   name: string;
  //   visit_center: string;
  //   contents: string;
  //   }) => {
  //     console.log(form);
  //   };

  return(
    <>
    <Posts></Posts>
    </>
  );
};

export default Board;