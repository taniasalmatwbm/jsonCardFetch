what is UpLifting in States?
 //  live data update aur preview krna 


  //---------Rule-1--------------
// data ko parent se firstChild component me as prop accept krna 

//---------Rule-2--------------
// firstChild se data ko change/update krna using setState 

//------------Rule-3------------
// updated state ko parent state se SecondChild component me as props accept krna 


//this process is called uplifting in state.  

//  live data update aur preview krna 



//Difference between useCallback and useMemo



// ----------------UseCallback hook---------------------
// jaise hi dependencies change huti h fun ka new version create krta h 
//memoize functions ya memoize callbacks return krta h using dependencies
// apni marzi se fun call krte hn 

// for example countapp ko use callback me rakh le ky updated state dependencies me rakh le gy jaisy jaisy 
// state me updation hu gi useCallback call hu ga aur updated state return kre ga

//--------------------useMemo hook----------------------------
// kesi calculation ya value ko memoize kr ky return krta h using dependencies
// agr koi value again calulate ki gai h tu useMemo again calculate nhi karta 
// previous value rewrite kr deta h using dependencies



//=========useEffect==/===useEffectLayout============================

===> useEffect hook UI paint hone ky baad run huta h yani html page ky baad


===> useEffectLayout hook UI paint hone se pahle run huta h  
//rare case me use huta h like dom measure
// mobile app me jati happ wase hi UI paint hune se pahle khxh changing krni hu tu 


//===============================useReducer hook====================================
//react build-in hook small state managment ky liye use hu ga


const initialState = 0;
const [count, dispatch] = useReducer(reducer, initialState);


// count = current state
//dispatch = reducer ko action bhejne ka function
//reducer = state update karne wala function
//initialState = sirf pehli baar initial value dene ke liye use hoti hai.


