import React, { useState } from 'react';
// import Child1 from './task1Uplifting/Child1';                            // --------task1
// import Child2 from './task1Uplifting/Child2';
//  import HooksConcept from './task2_UseEffect_UseLayout/HooksConcept';    // -------task2
import PasswordGenerator from './task3useCallBack_useRef/PasswordGenrator';  // ------task3
import UseRedCounterApp from './task4UseReducer/useRedCounterApp';
// import { useEffect, useState } from "react";
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";

// function App() {

//   const [posts, setPosts] = useState([]);
//    console.log("compents",posts)
//   useEffect(() => {

//     const fetchPosts = async () => {

//       const res = await fetch( "https://jsonplaceholder.typicode.com/comments");

//       const data = await res.json();
//       console.log("fetch data",data)
//       setPosts(data);

//     };

//     fetchPosts();

//   }, []);

//   return (

//     <div>
//        <h1>{posts.length}</h1>
//       <Child1
//         posts={posts}
//         setPosts={setPosts}
//       />
//       <Child2  posts={posts}/>

//     </div>

//   );

// }

// export default App;


// 1. The Common Parent Component

const App=() =>{
  // The shared state lives here now
  const [sharedText, setSharedText] = useState("");

  return (
    <div>
      {/* ---------------task-1- Component--------------------- */}

      {/* Pass the state input child */}
      {/* <Child1 text={sharedText} onTextChange={setSharedText} />
      
      {/* Pass the state value to the display child */}
      {/* <Child2 text={sharedText} /> */} 

        {/* ---------------task-2- Component--------------------- */}

         {/* <HooksConcept/> */}

       {/* ---------------task-3 Component--------------------- */}
      {/* <PasswordGenerator/> */}


  {/* ---------------task-4 Component--------------------- */}
    <UseRedCounterApp/>

    </div>
  );
}
export default App;

