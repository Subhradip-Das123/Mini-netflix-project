import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { sum, sub, mul, div } from './Calc';
import Card from "./Cards";
import Sdata from './Sdata';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.Fragment>
//   <h1>Subhradip Das</h1>
//   <p>iiit bbsr</p>
//   </React.Fragment>,
//   document.getElementById('root')
// );

// const name = "Subhradip"
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/300"
// const img3 = "https://picsum.photos/300/300"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     {/* <h1>Hello my name is {name}</h1>
//     <p>Curr date is {currDate}</p>
//     <p>Curr date is {currTime}</p> */}
//     <h1 className="heading" style={{textTransform: 'capitalize'}}>Hello my name is {name}</h1>
//     <div className="img_div">
//       <img src={img1} alt="random image" />
//       <img src={img2} alt="random image" />
//       <img src={img3} alt="random image" />
//     </div>
//   </>,
//   document.getElementById('root')
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <App/>
//   </>,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <App/>,
//   document.getElementById('root')
// );

//netflix project

// function ncard(val) {
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
