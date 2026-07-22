// import React from 'react'

// const Child2 = ({posts}) => {
//   return (
//     <div> <h1>Data Comes from parent: </h1>
//         { posts.slice(0,5).map((post)=>(
//             <div key={post.id}>
//                 <h3>{post.name}</h3>
//                 <p>{post.email}</p>

//             </div>
//         ))
//         }
 

//     </div>

//   )
// }

// export default Child2

const Child2= ({ text })=> {
  return <p>Live Preview: {text}</p>;
}

export default Child2