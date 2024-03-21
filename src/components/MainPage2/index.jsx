import { useCallback, useEffect, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/pokedex_logo.png";
import { useGetItemsQuery } from "../../store/api";

import { Wrapper, WrapperContent } from "./styles";

const itemHeight = 40;
const containerHeight = 700;
const limit = 20;
// const overscan = 3;

const threshold = 600;

export const MainPage = () => {
  const [fullData, setFullData] = useState([]);
  const [startIndex, setStartIndex] = useState([]);
  console.log("startIndex--->", startIndex);

  console.log("fullData--->>>", fullData);

  const [offset, setOffset] = useState(0);

  const scrollElementRef = useRef(null);

  const navigate = useNavigate();
  const { data = null, isFetching } = useGetItemsQuery({ limit, offset }); // приходит только имя и ссылка

  useEffect(() => {
    if (data?.results?.length > 0) {
      setFullData((prev) => [...prev, ...data.results]);
    }
  }, [data?.results]);

  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    const scrollElement = scrollElementRef.current;
    if (!scrollElement) {
      return;
    }

    const onScroll = (e) => {
      // const rangeEnd = scrollElementRef?.current?.scrollTop + containerHeight;
      let startIndex = Math.ceil(
        scrollElementRef?.current?.scrollTop / itemHeight
      );
      // let endIndex = Math.ceil(rangeEnd / itemHeight);

      startIndex = Math.max(0, startIndex);
      // endIndex = Math.min(fullData.length - 1, endIndex);

      console.log("e.target.scrollHeight ", e.target.scrollHeight);
      if (
        e.target.clientHeight + e.target.scrollTop >=
        e.target.scrollHeight - threshold
      ) {
        setOffset((prevOffset) => prevOffset + limit);
      }
      setStartIndex(startIndex);
    };
    scrollElement.addEventListener("scroll", onScroll);

    return () => {
      scrollElement.removeEventListener("scroll", onScroll);
    };
  }, []);
  // const onScroll = useCallback(
  //   (e) => {
  //     // const rangeEnd = scrollElementRef?.current?.scrollTop + containerHeight;
  //     let startIndex = Math.ceil(
  //       scrollElementRef?.current?.scrollTop / itemHeight
  //     );
  //     // let endIndex = Math.ceil(rangeEnd / itemHeight);

  //     startIndex = Math.max(0, startIndex);
  //     // endIndex = Math.min(fullData.length - 1, endIndex);

  //     console.log("e.target.scrollHeight ", e.target.scrollHeight);
  //     if (
  //       e.target.clientHeight + e.target.scrollTop >=
  //       e.target.scrollHeight - threshold
  //     ) {
  //       setOffset((prevOffset) => prevOffset + limit);
  //     }
  //     setStartIndex(startIndex);

  //   },
  //   []
  // );

  console.log(
    "scrollElementRef.current.scrollHeight=========>>>",
    scrollElementRef?.current?.scrollHeight
  );

  return (
    <>
      <div>
        <Link to="/">
          <img alt="home" src={logo} title="home" />
        </Link>
      </div>
      {/* <h1>ПОКЕМОНЫ ЕПТА</h1> */}
      {/* <div
        ref={scrollElementRef}
        style={{
          border: "3px solid red",
          height: containerHeight,
          overflowY: "scroll",
          position: "relative",
        }}
        // onScroll={(e) => onScroll(e)}
      > */}
      <Wrapper ref={scrollElementRef}>
        {/* <WrapperContent> */}
        {fullData?.slice(startIndex, startIndex + limit)?.map((pokemon) => {
          // console.log("el", el);
          // const pokemon = fullData[el.index];
          // console.log("pokemon--->>>", pokemon);
          return (
            <div
              key={pokemon.name}
              style={{
                backgroundColor: "white",
                border: "1px solid blue",
                boxSizing: "border-box",
                color: "red",
                height: itemHeight,
                top: 0,
                // transform: `translateY(${el.offsetTop})px`,
              }}
              // value={el.offsetTop}
              onClick={() => {
                clickHandler(pokemon.name);
              }}
            >
              <div>{pokemon.name}</div>
            </div>
          );
        })}
        {/* </WrapperContent> */}
        {isFetching && <div>Loading...</div>}
      </Wrapper>
    </>
  );
};

export default MainPage;
