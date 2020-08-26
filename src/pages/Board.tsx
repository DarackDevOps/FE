import React from "react";
 import Write from './Write'
 import Post from './Post';
import Posts from './Posts';
import { Route} from "react-router-dom" 

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