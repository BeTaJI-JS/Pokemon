import { useState } from "react";

const VirtualScroll = ({
  containerHeight,
  items,
  rowHeight,
  totalItems,
  visibleItemsLength,
}) => {
console.log("!!!!!!!!! items", items);
  const totalHeight = rowHeight * totalItems;

  const [scrollTop, setScrollTop] = useState(0);

  const startNodeElem = Math.ceil(scrollTop / rowHeight);

  const visibleItems = items?.slice(
    startNodeElem,
    startNodeElem + visibleItemsLength
  );

  const offsetY = startNodeElem * rowHeight;

  const handleScroll = (e) => {
    console.log('e---->',e);
    setScrollTop(e?.currentTarget?.scrollTop);
  };

  return (
    <div
      style={{
        border: "5px solid black",
        height: containerHeight,
        overflow: "auto",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems}
        </div>
      </div>
    </div>
  );
};

export default VirtualScroll;
