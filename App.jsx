// import React from 'react'
// import {sum,sub,mul,div} from './Calc';
// function App() {
//     // // let currDate = new Date(2024, 6, 6, 14);
//     // // currDate = currDate.getHours();
//     // // let greeting = "";
//     // // const cssStyle = {};
//     // // if (currDate >= 1 && currDate < 12) {
//     // //     greeting = "Good Morning"
//     // //     cssStyle.color = "green"
//     // // } else if (currDate >= 12 && currDate < 19) {
//     // //     greeting = "Good Afternoon"
//     // //     cssStyle.color = "orange"
//     // // } else {
//     // //     greeting = "Good Night"
//     // //     cssStyle.color = "black"
//     // // }

//     // // return (
//     // //     <>
//     // //         <div>
//     // //             <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
//     // //         </div>
//     // //     </>
//     // // );

//     // return (
//     //     <>
//     //         <ul>
//     //             <li>{sum(40, 4)}</li>
//     //             <li>{sub(40, 4)}</li>
//     //             <li>{mul(40, 4)}</li>
//     //             <li>{div(40, 3)}</li>
//     //         </ul>
//     //     </>
//     // );
// }

//Netflix 
import React from 'react';
import Card from "./Cards";
import Sdata from './Sdata';

const App = () =>(
  <>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2024</h1>
    {Sdata.map(function ncard(val) {
      return (
        <Card
          key = {val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>
);
export default App;