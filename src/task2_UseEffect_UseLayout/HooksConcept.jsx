import { useLayoutEffect, useEffect, useRef, useState } from "react";

const HooksConcept = () => {
  const [topMargin, setTopMargin] = useState("Loading...");
  const targetDiv = useRef(null);

//   useLayoutEffect(() => {
//    setTimeout(() => {
//     const rect = targetDiv.current.getBoundingClientRect();
//     setTopMargin(rect.top);
//   }, 2000);
//   }, []);


useEffect(() => {
  setTimeout(() => {
    const rect = targetDiv.current.getBoundingClientRect();   //dom ka build-in method h jo return me div ki detail in object me deta h
    setTopMargin(rect.top);
  }, 2000);
   }, []);


  return (
    <div style={{ marginTop: "120px" }}>
      <h1 ref={targetDiv}>
        Margin Top: {topMargin}px
      </h1>
    </div>
  );
};

export default HooksConcept;