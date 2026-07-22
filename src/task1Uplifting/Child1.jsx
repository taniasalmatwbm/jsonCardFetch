
// import React from 'react'

// const Child1=({ posts, setPosts })=> {

//   return (

//     <div>

//       {
//         posts.slice(0,5).map((post) => (

//           <div key={post.id}>

//             <h3>{post.name}</h3>

//             <p>{post.email}</p>

//           </div>

//         ))
//       }

//       <button
//         onClick={() => setPosts(posts.slice(0,5))}
//       >
//         Data Send to Parent Component
//       </button>

//     </div>

//   );

// }

// export default Child1;


const Child1=({ text, onTextChange })=> {
  return (
    <input 
      type="text" 
      value={text} 
      onChange={(e) => onTextChange(e.target.value)} 
    />
  );
}
export default Child1