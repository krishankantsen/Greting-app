
import React from "react";
import ReactDOM from "react-dom";
import './index.css'
const img1="https://picsum.photos/200/300";
let curdate=new Date();
curdate=curdate.getHours();
const css={
  color :"green"
};
let greet="Good Morning";
if (curdate>=1 && curdate<12) {
  greet="Good Morning";
  css.color='green';
}else if (curdate>=12 && curdate<19) {
  greet="Good AfterNoon";
  css.color='red';
}else{
  greet="Good Night";
  css.color='blue';
}
const body={
  background :"#bf56f0"
}

const heading={
  background :"cyan",
  padding :"10px",
  marginLeft:"400px",
  marginTop : "240px",
  marginRight :"455px",
  
  borderRadius : "10px",
  // color : "pink"

};
ReactDOM.render(
  <>
    <h1 style={heading}>Hello Sir,<span style={css}>{greet}</span></h1>
   
  </>,
  document.getElementById("root")
);
