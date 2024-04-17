import { Link, useParams } from "react-router-dom";

import logo from "assets/pokedex_logo.png";
import { useGetItemQuery } from "store/api";

export const NestedPage = () => {
  const { id } = useParams();
  // console.log("id,", id);
  const { data: pokeInfo } = useGetItemQuery({ id });

  // console.log("pokeInfo,", pokeInfo)

  // сделат компонент карточки и пробрасывать значения туда либо соатвит ькак есть и стилизовать - посмотрим
  return (
    <>
      <div>
        <Link to="/pokemon">
          <img alt="home" src={logo} title="home" />
        </Link>
      </div>
      <div>
        <img
          alt={pokeInfo?.name}
          src={pokeInfo?.sprites?.front_default}
          style={{ height: 400, width: 500 }}
        />
      </div>
      <div>
        <div>Сharacteristics</div>
        <div>Name: {pokeInfo?.name}</div>
        <div>Weight: {pokeInfo?.weight}</div>
        <div>
          Types: {pokeInfo?.types?.map((el) => el.type.name).join(", ")}
        </div>
        <div>
          Abilities:{" "}
          {pokeInfo?.abilities?.map((el) => el.ability.name).join(", ")}
        </div>
      </div>
      <div>
        <div>Stats</div>
        {pokeInfo?.stats.map((el) => (
          <div key={el?.stat?.name}>
            <div>{el?.stat?.name} </div>
            <div>{el?.base_stat} </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NestedPage;
