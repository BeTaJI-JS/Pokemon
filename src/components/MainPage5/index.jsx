import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/pokedex_logo.png";
import { useGetItemsQuery } from "../../store/api";

import { PokemonCard, Wrapper } from "./styles";

const itemHeight = 40;
const limit = 20;
const threshold = 600;
const containerHeight = 700;

const MainPage = () => {
  const [offset, setOffset] = useState(0);
  const [fullData, setFullData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
console.log("startIndex-->", startIndex);

  const scrollElementRef = useRef(null);
  const navigate = useNavigate();
  const { data = null, isFetching } = useGetItemsQuery({
    limit,
    offset,
  });

  const clickHandler = useCallback((id) => {
    navigate(`/pokemon/${id}`);
  }, [navigate]);

  const handleScroll = useCallback(() => {
    const scrollElement = scrollElementRef.current;
    if (isFetching || !scrollElement) return;

console.log("scrollElement.scrollHeight", scrollElement.scrollHeight);

console.log("scrollElement.clientHeight", scrollElement.clientHeight);
console.log("scrollElement.scrollTop", scrollElement.scrollTop);
console.log(
  "scrollElement.scrollHeight - threshold",
  scrollElement.scrollHeight - threshold
);

    if (
      scrollElement.clientHeight + scrollElement.scrollTop >=
      scrollElement.scrollHeight - threshold
    ) {
      if (offset >= data?.count) {
        return;
      }
      setOffset((prevOffset) => prevOffset + limit);
    }
      setStartIndex(Math.ceil(scrollElement.scrollTop / itemHeight));

    
  }, [offset, data?.count, isFetching]);

  useEffect(() => {
    const scrollElement = scrollElementRef.current;
    if (!scrollElement) return;
      // setStartIndex(Math.ceil(scrollElement.scrollTop / itemHeight));


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

  // const itemStart = Math.ceil(scrollElementRef?.current?.scrollTop / itemHeight);
  // const itemEnd = Math.ceil(itemStart + Math.ceil(containerHeight / itemHeight), fullData.length);
  // const visibleItems = fullData.slice(itemStart, itemEnd);

  // const visibleItems = useMemo(()=> {
  //   const itemStart = Math.min(0,Math.floor(scrollElementRef?.current?.scrollTop / itemHeight));
  //   const itemEnd = Math.ceil(itemStart + Math.ceil(containerHeight / itemHeight), fullData.length);
  //   console.log("itemStart-->", itemStart);
  //   console.log("itemEnd-->", itemEnd);

  //   return fullData.slice(itemStart, itemEnd);
  // },[fullData])

  const topSpaceHeight = useMemo(() => itemHeight * startIndex, [startIndex]);
  const bottomSpaceHeight = useMemo(
    () => fullData.length - (startIndex + limit),
    [startIndex, fullData.length]
  );

  console.log("topSpaceHeight-->", topSpaceHeight);
  console.log("bottomSpaceHeight-->", bottomSpaceHeight);


  return (
    <>
      <div>
        <Link to="/pokemon">
          <img alt="home" src={logo} title="home" />
        </Link>
      </div>
      <div style={{ height: `${topSpaceHeight}px` , position: "absolute"}} />
      <Wrapper $containerHeight={containerHeight} ref={scrollElementRef}>
        {fullData.slice(startIndex, startIndex + limit).map((item) => (
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
      <div style={{ height: `${bottomSpaceHeight}px` , position: "absolute"}} />
    </>
  );
};

export default MainPage;
