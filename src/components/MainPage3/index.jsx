import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/pokedex_logo.png";
import { useGetItemsQuery } from "../../store/api";

import { PokemonCard, Wrapper } from "./styles";

const itemHeight = 40;
const limit = 20;
const threshold = 600;

export const MainPage = () => {
  const [offset, setOffset] = useState(0);
  const [fullData, setFullData] = useState([]);
  const scrollElementRef = useRef(null);
  const navigate = useNavigate();
  const { data = null, isFetching } = useGetItemsQuery({ limit, offset });

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

  const handleObserver = useCallback((entries) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setOffset((prev) => prev + limit);
    }
  }, []);

  const observer = useMemo(() => new IntersectionObserver(handleObserver, {
    rootMargin: `${threshold}px 0px`,
  }), [handleObserver]);

  useEffect(() => {
    const scrollElement = scrollElementRef.current;
    if (scrollElement) {
      observer.observe(scrollElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [observer]);

  const startIndex = Math.max(0, offset - limit);
  const endIndex = Math.min(fullData.length, offset + limit);

  const visibleData = useMemo(() => fullData.slice(startIndex, endIndex), [fullData, startIndex, endIndex]);

  return (
    <>
      <div>
        <Link to="/pokemon">
          <img alt="home" src={logo} title="home" />
        </Link>
      </div>
      <Wrapper ref={scrollElementRef} >
        {visibleData.map((item) => (
          <PokemonCard key={item.name} onClick={() => clickHandler(item.name)}>
            <div>{item.name}</div>
          </PokemonCard>
        ))}
        {isFetching && <div>Loading...</div>}
      </Wrapper>
    </>
  );
};

export default MainPage;
