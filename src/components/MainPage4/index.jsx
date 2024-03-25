// // // import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// // // import { Link, useNavigate } from "react-router-dom";

// // // import logo from "../../assets/pokedex_logo.png";
// // // import { useGetItemsQuery } from "../../store/api";

// // // import { PokemonCard, Wrapper } from "./styles";

// // // const itemHeight = 40;
// // // const limit = 20;
// const threshold = 200;
// const containerHeight = 700;

// // // export const MainPage = () => {
// // //   const [offset, setOffset] = useState(0);
// // //   const [fullData, setFullData] = useState([]);

// // //   const scrollElementRef = useRef(null);
// // //   const navigate = useNavigate();
// // //   const { data = null, isFetching } = useGetItemsQuery({ limit, offset });

// // //   const clickHandler = useCallback(
// // //     (id) => {
// // //       navigate(`/pokemon/${id}`);
// // //     },
// // //     [navigate]
// // //   );


// // //   useEffect(() => {
// // //     if (data?.results?.length > 0) {
// // //       setFullData((prev) => [...prev, ...data.results]);
// // //     }
// // //   }, [data?.results]);

// // //   // const onScroll = () => {
// // //   //   const scrollElement = scrollElementRef?.current
// // //   //   if(!scrollElement){
// // //   //     return
// // //   //   }
// // //   //   if (
// // //   //     scrollElement.innerHeight + scrollElement.scrollTop + 1 >=
// // //   //     scrollElement.scrollHeight
// // //   //   ) {
// // //   //     setOffset((prev) => prev + limit);
// // //   //   }
// // //   // }


// // //   function handleScroll(e) {
// // //     if (
// // //       e.target.clientHeight + e.target.scrollTop >=
// // //       e.target.scrollHeight - threshold
// // //     ) {
// // //       if(offset >= data?.count) {
// // //         alert('asdasd')
// // //         return
// // //       }
// // //       setOffset((prev) => prev + limit);
// // //     }
// // // }
 


// // //   useEffect(()=> {
// // //     const scrollElement = scrollElementRef?.current;
// // //  if (!scrollElement) {
// // //    return;
// // //  }
// // //     scrollElement.addEventListener("scroll", handleScroll);
// // //     return () => scrollElement.removeEventListener("scroll", handleScroll);
// // //   },[])


// // //   return (
// // //     <>
// // //       <div>
// // //         <Link to="/pokemon">
// // //           <img alt="home" src={logo} title="home" />
// // //         </Link>
// // //       </div>
// // //       <Wrapper
// // //         $containerHeight={containerHeight}
// // //         ref={scrollElementRef}
// // //       >
// // //         {fullData.map((item) => (
// // //           <PokemonCard
// // //             $itemHeight={itemHeight}
// // //             key={item.name}
// // //             onClick={() => clickHandler(item.name)}
// // //           >
// // //             <div>{item.name}</div>
// // //           </PokemonCard>
// // //         ))}
// // //         {isFetching && <div>Loading...</div>}
// // //       </Wrapper>
// // //     </>
// // //   );
// // // };

// // // export default MainPage;

// import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";

// import logo from "../../assets/pokedex_logo.png";
// import { useGetItemsQuery } from "../../store/api";

// import { PokemonCard, Wrapper } from "./styles";

// const itemHeight = 40;
// const limit = 20;
// // const threshold = 600;
// // const containerHeight = 700;

// // export const MainPage = () => {
// //   const [offset, setOffset] = useState(0);
// //   const [fullData, setFullData] = useState([]);

// //   const scrollElementRef = useRef(null);
// //   const navigate = useNavigate();
// //   const { data = null, isFetching } = useGetItemsQuery({ limit, offset });

// //   const clickHandler = useCallback(
// //     (id) => {
// //       navigate(`/pokemon/${id}`);
// //     },
// //     [navigate]
// //   );

// //   const handleScroll = useCallback(() => {
// //     const scrollElement = scrollElementRef.current;
// //     if (isFetching || !scrollElement) return;

// //     if (
// //       scrollElement.clientHeight + scrollElement.scrollTop >=
// //       scrollElement.scrollHeight - threshold
// //     ) {
// //       if (offset >= data?.count) {
// //         return;
// //       }
// //       setOffset((prevOffset) => prevOffset + limit);
// //     }
// //   }, [offset, data?.count, isFetching]);

// //   useEffect(() => {
// //     const scrollElement = scrollElementRef.current;
// //     if (!scrollElement) return;

// //     scrollElement.addEventListener("scroll", handleScroll);
// //     return () => {
// //       scrollElement.removeEventListener("scroll", handleScroll);
// //     };
// //   }, [handleScroll]);

// //   useEffect(() => {
// //     if (data?.results?.length > 0) {
// //       setFullData((prev) => [...prev, ...data.results]);
// //     }

// //   }, [data?.results]);

// //   return (
// //     <>
// //       <div>
// //         <Link to="/pokemon">
// //           <img alt="home" src={logo} title="home" />
// //         </Link>
// //       </div>
// //       <Wrapper $containerHeight={containerHeight} ref={scrollElementRef}>
// //         {fullData.map((item) => (
// //           <PokemonCard
// //             $itemHeight={itemHeight}
// //             key={item.name}
// //             onClick={() => clickHandler(item.name)}
// //           >
// //             <div>{item.name}</div>
// //           </PokemonCard>
// //         ))}
// //         {isFetching && <div>Loading...</div>}
// //         {offset >= data?.count && <div>Покемонычи закончились</div>}
// //       </Wrapper>
// //     </>
// //   );
// // };

// // export default MainPage;

// const MainPage = () => {
//   const [currentPostStart, setCurrentPostStart] = useState(0);
//   //   const [offset, setOffset] = useState(0);

//   // const { data: posts, isLoading } = postApi.useFetchAllPostsQuery({
//   //   limit: 7,
//   //   start: currentPostStart,
//   // });

//   const { data = null, isFetching } = useGetItemsQuery({
//     limit,
//     offset:currentPostStart,
//   });
//     const scrollElementRef = useRef(null);

//   const [isMyFetching, setIsFetchingDown] = useState(false);
//   const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);

//   const scrollHandler = (e) => {
// console.log("e.target.scrollHeight--->>", e.target.scrollHeight);
// console.log(" e.target.scrollTop--->>", e.target.scrollTop);


//     if (e.target.scrollTop < 50) {
//       setIsMyFetchingUp(true);
//     }
//     if (
//       e.target.clientHeight + e.target.scrollTop >=
//       e.target.scrollHeight - threshold
//     ) {
//       setIsFetchingDown(true);
//     }
//   };
//   useEffect(() => {
//     if (isMyFetching) {
//       setCurrentPostStart((prev) => {
//         // return prev < 93 ? prev + 1 : prev;
//         return prev + 20;
//       });
//       setIsFetchingDown(false);
//     }
//   }, [isMyFetching]);
//   useEffect(() => {
//     if (isMyFetchingUp) {
//       // setCurrentPostStart((prev) => {
//       //   return prev > 0 ? prev - 20 : prev;
//       // });
//       setIsMyFetchingUp(false);
//     }
//   }, [isMyFetchingUp]);
//   useEffect(() => {
//         const scrollElement = scrollElementRef.current;
//         if (!scrollElement){
//           return 
//         }
//           scrollElement.addEventListener("scroll", scrollHandler);
//     return () => {
//       scrollElement.removeEventListener("scroll", scrollHandler);
//     };
//   }, []);

//   return (
//     <Wrapper $containerHeight={containerHeight} ref={scrollElementRef}>
//       {data?.results?.map((post) => {
//         // console.log("post", post);
//         return (
//           <PokemonCard $itemHeight={itemHeight} key={post.name}>
//             {post.name}
//           </PokemonCard>
//         );
//       })}
//     </Wrapper>
//     // {isFetching && <div>Загрузка данных</div>}
//   );
// };
// export default MainPage;


import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/pokedex_logo.png";
import { useGetItemsQuery } from "../../store/api";

import { PokemonCard, Wrapper } from "./styles";

const itemHeight = 40;
const limit = 20;
const threshold = 200;
const containerHeight = 700;

const MainPage = () => {
  const [offset, setOffset] = useState(0);
  const [fullData, setFullData] = useState([]);
  // const [startIndex, setStartIndex] = useState(0);

  const loadingRef = useRef(false);
  const scrollElementRef = useRef(null);
  const navigate = useNavigate();
  const { data = null, isFetching } = useGetItemsQuery({ limit, offset });

  const clickHandler = useCallback((id) => {
    navigate(`/pokemon/${id}`);
  }, [navigate]);

  const handleScroll = useCallback(() => {
    const scrollElement = scrollElementRef.current;
    if (loadingRef.current || !scrollElement) return;

    // setStartIndex(scrollElement.scrollTop / itemHeight);
    
    if (scrollElement.scrollHeight - scrollElement.scrollTop <= scrollElement.clientHeight + threshold) {
      if (offset >= data?.count) return;
      setOffset((prevOffset) => prevOffset + limit);
    }
  }, [offset, data?.count]);

  useEffect(() => {
    const scrollElement = scrollElementRef.current;
    if (!scrollElement) return;

    scrollElement.addEventListener("scroll", handleScroll);
    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (data?.results?.length > 0) {
      setFullData((prev) => [...prev, ...data.results]);
    }
    loadingRef.current = false;
  }, [data?.results]);

  useEffect(() => {
    loadingRef.current = isFetching;
  }, [isFetching]);

  console.log(
    "scrollElementRef?.current?.scrollTop / itemHeight---->",
    scrollElementRef?.current?.scrollTop / itemHeight
  );

  const foo = useRef(0)
  const startIndex = useMemo(
    () => {
      if(scrollElementRef?.current ){

        const start =  Math.floor(scrollElementRef?.current?.scrollTop / itemHeight)
        console.log('start==>>',start);
return start
      }
    },
    []
  );
  // foo.current = startIndex;
foo.current = startIndex;

console.log("foo!!!!!---->>>>", foo);
console.log("startIndex!!!!!---->>>>", startIndex);

  return (
    <>
      <div>
        <Link to="/pokemon">
          <img alt="home" src={logo} title="home" />
        </Link>
      </div>
      <Wrapper
        ref={scrollElementRef}
        style={{ height: containerHeight, overflow: "auto" }}
      >
        {fullData.slice(foo.current, foo.current + limit + 1).map((item, index) => (
          <PokemonCard
            $itemHeight={itemHeight}
            key={item.name}
            onClick={() => clickHandler(item.name)}
          >
            <div>{item.name}</div>
          </PokemonCard>
        ))}
        {isFetching && <div>Loading...</div>}
      </Wrapper>
    </>
  );
};

export default MainPage;