import { useEffect, useRef, useState } from "react";


const VirtualScroll2 = ({ data, rowHeight, visibleRows })=> {
  const rootRef = useRef();
  const [start, setStart] = useState(0);
  
  
  function getTopHeight() {
    return rowHeight * start;
  }
  function getBottomHeight() {
    return rowHeight * (data.length - (start + visibleRows + 1));
  }
  
  useEffect(() => {
    function onScroll(e) {
      setStart(Math.min(
        data.length - visibleRows - 1,
        Math.floor(e.target.scrollTop / rowHeight)
      ));
    }
    rootRef.current.addEventListener('scroll', onScroll);

    return () => rootRef.current.removeEventListener('scroll', onScroll)
    
  }, [data.length, visibleRows, rowHeight]);

    return (
      <div>
        {data?.map((el) => {
          // console.log("el", el);
          const pokemon = fullData[el.index];
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
                transform: `translateY(${el.offsetTop})px`,
              }}
              onClick={() => {
                clickHandler(pokemon.name);
              }}
            >
              <div>{pokemon.name}</div>
              {/* <img alt={`${pokemon.name}`} src={pokemon.url} /> */}
            </div>
          );
        })}
      </div>
    );
}