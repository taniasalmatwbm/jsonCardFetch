import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import "./App.css";

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=12"
      );

      const data = await res.json();
      console.log(data)
      setPosts(data);

    };

    fetchPosts();

  }, []);

  return (

    <div className="container">

      {posts.map((post) => (

        <PostCard
          key={post.id}
          post={post}
        />

      ))}

    </div>

  );

}

export default App;