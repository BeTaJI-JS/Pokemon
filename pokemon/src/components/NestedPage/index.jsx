import { Link, useParams } from "react-router-dom";
import { useGetItemQuery } from "../../store/api";
import logo from "../../assets/pokedex_logo.png";


export const NestedPage =()=> {
const {id} = useParams()
// console.log("id,", id);
  const { data: pokeInfo } = useGetItemQuery({ id });

// console.log("pokeInfo,", pokeInfo)

// сделат компонент карточки и пробрасывать значения туда либо соатвит ькак есть и стилизовать - посмотрим
  return (
    <>
      <div>
        <Link to="/">
          <img title="home" alt="home" src={logo} />
        </Link>
      </div>
      <div>
        <img
          src={pokeInfo?.sprites?.front_default}
          alt={pokeInfo?.name}
          style={{ width: 500, height: 400 }}
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
}

export default NestedPage