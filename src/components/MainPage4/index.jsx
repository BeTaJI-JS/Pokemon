// import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";

// import logo from "../../assets/pokedex_logo.png";
// import { useGetItemsQuery } from "../../store/api";

// import { PokemonCard, Wrapper } from "./styles";

// const itemHeight = 40;
// const limit = 20;
// const threshold = 600;
// const containerHeight = 700;

// export const MainPage = () => {
//   const [offset, setOffset] = useState(0);
//   const [fullData, setFullData] = useState([]);

//   const scrollElementRef = useRef(null);
//   const navigate = useNavigate();
//   const { data = null, isFetching } = useGetItemsQuery({ limit, offset });

//   const clickHandler = useCallback(
//     (id) => {
//       navigate(`/pokemon/${id}`);
//     },
//     [navigate]
//   );


//   useEffect(() => {
//     if (data?.results?.length > 0) {
//       setFullData((prev) => [...prev, ...data.results]);
//     }
//   }, [data?.results]);

//   // const onScroll = () => {
//   //   const scrollElement = scrollElementRef?.current
//   //   if(!scrollElement){
//   //     return
//   //   }
//   //   if (
//   //     scrollElement.innerHeight + scrollElement.scrollTop + 1 >=
//   //     scrollElement.scrollHeight
//   //   ) {
//   //     setOffset((prev) => prev + limit);
//   //   }
//   // }


//   function handleScroll(e) {
//     if (
//       e.target.clientHeight + e.target.scrollTop >=
//       e.target.scrollHeight - threshold
//     ) {
//       if(offset >= data?.count) {
//         alert('asdasd')
//         return
//       }
//       setOffset((prev) => prev + limit);
//     }
// }
 


//   useEffect(()=> {
//     const scrollElement = scrollElementRef?.current;
//  if (!scrollElement) {
//    return;
//  }
//     scrollElement.addEventListener("scroll", handleScroll);
//     return () => scrollElement.removeEventListener("scroll", handleScroll);
//   },[])


//   return (
//     <>
//       <div>
//         <Link to="/pokemon">
//           <img alt="home" src={logo} title="home" />
//         </Link>
//       </div>
//       <Wrapper
//         $containerHeight={containerHeight}
//         ref={scrollElementRef}
//       >
//         {fullData.map((item) => (
//           <PokemonCard
//             $itemHeight={itemHeight}
//             key={item.name}
//             onClick={() => clickHandler(item.name)}
//           >
//             <div>{item.name}</div>
//           </PokemonCard>
//         ))}
//         {isFetching && <div>Loading...</div>}
//       </Wrapper>
//     </>
//   );
// };

// export default MainPage;

import { useCallback, useEffect, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/pokedex_logo.png";
import { useGetItemsQuery } from "../../store/api";

import { PokemonCard, Wrapper } from "./styles";

const itemHeight = 40;
const limit = 20;
const threshold = 600;
const containerHeight = 700;

export const MainPage = () => {
  const [offset, setOffset] = useState(0);
  const [fullData, setFullData] = useState([]);

  const scrollElementRef = useRef(null);
  const navigate = useNavigate();
  const { data = null, isFetching } = useGetItemsQuery({ limit, offset });

  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  const handleScroll = useCallback(() => {
    const scrollElement = scrollElementRef.current;
    if (isFetching || !scrollElement) return;

    if (
      scrollElement.clientHeight + scrollElement.scrollTop >=
      scrollElement.scrollHeight - threshold
    ) {
      if (offset >= data?.count) {
        return;
      }
      setOffset((prevOffset) => prevOffset + limit);
    }
  }, [offset, data?.count, isFetching]);

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

  }, [data?.results]);


  return (
    <>
      <div>
        <Link to="/pokemon">
          <img alt="home" src={logo} title="home" />
        </Link>
      </div>
      <Wrapper $containerHeight={containerHeight} ref={scrollElementRef}>
        {fullData.map((item) => (
          <PokemonCard
            $itemHeight={itemHeight}
            key={item.name}
            onClick={() => clickHandler(item.name)}
          >
            <div>{item.name}</div>
          </PokemonCard>
        ))}
        {isFetching && <div>Loading...</div>}
        {offset >= data?.count && <div>Покемонычи закончились</div>}
      </Wrapper>
    </>
  );
};

export default MainPage;