import { useCallback, useEffect, useRef, useState } from "react";

// hook для навигации по роутам
import { Link, useNavigate } from "react-router-dom";

// лого для ссылки на главную страницу
import logo from "../../assets/pokedex_logo.png";

// хук для получения данных
import { useGetItemsQuery } from "../../store/api";

// стили для компонентов
import { Wrapper, WrapperContent } from "./styles";

// высота одного элемента в пикселях
const itemHeight = 40;

// высота контейнера в пикселях
const containerHeight = 700;

// количество элементов, которые должны отображаться на экране
const limit = 20;

// порог для загрузки новой порции данных в пикселях
const threshold = 600;

export const MainPage = () => {
  // массив с данными для отображения
  const [fullData, setFullData] = useState([]);

  // индекс элемента, с которого начинать отображение. Изменяется при скроле
  const [startIndex, setStartIndex] = useState([]);

  console.log("startIndex--->", startIndex);

  console.log("fullData--->>>", fullData);

  // смещение для запроса новых данных
  const [offset, setOffset] = useState(0);

  // ссылка на элемент, в котором происходит скролинг
  const scrollElementRef = useRef(null);

  const navigate = useNavigate();

  // данные для отображения
  const { data = null, isFetching } = useGetItemsQuery({ limit, offset }); // приходит только имя и ссылка

  // добавляем данные в массив при получении новой порции
  useEffect(() => {
    if (data?.results?.length > 0) {
      setFullData((prev) => [...prev, ...data.results]);
    }
  }, [data?.results]);

  // хук для запуска перехода по ссылке при клике на элемент списка
  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  // скролинг
  useEffect(() => {
    const scrollElement = scrollElementRef.current;

    // если элемент не найден, то не выполняем код
    if (!scrollElement) {
      return;
    }

    // обработчик скрола
    const onScroll = (e) => {
      // высота элемента
      // const rangeEnd = scrollElementRef?.current?.scrollTop + containerHeight;

      // индекс элемента, на котором находится верхняя граница экрана
      let startIndex = Math.ceil(
        scrollElementRef?.current?.scrollTop / itemHeight
      );

      // индекс элемента, на котором находится нижняя граница экрана
      // let endIndex = Math.ceil(rangeEnd / itemHeight);

      // ограничиваем индексы, чтобы они не выходили за пределы массива
      startIndex = Math.max(0, startIndex);
      // endIndex = Math.min(fullData.length - 1, endIndex);

      // если достигли нижнего порога, загружаем еще порцию данных
      // console.log("e.target.scrollHeight ", e.target.scrollHeight);
      if (
        e.target.clientHeight + e.target.scrollTop >=
        e.target.scrollHeight - threshold
      ) {
        setOffset((prevOffset) => prevOffset + limit);
      }
      setStartIndex(startIndex);
    };

    // подключаем обработчик скрола к элементу
    scrollElement.addEventListener("scroll", onScroll);

    // очищаем обра
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
