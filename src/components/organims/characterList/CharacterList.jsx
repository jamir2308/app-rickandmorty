import React from "react";
import { Card } from "./../../atoms/card/Card";
import useFetch from "../../../hooks/useFetch";
import { CardContainer, CharacterContentTitle, CharacterTitle } from "./CharacterListStyles";

function CharacterList({FormattedMessage}) {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <CharacterContentTitle>
        <CharacterTitle><FormattedMessage id="characterList" /></CharacterTitle>
      </CharacterContentTitle>

      <CardContainer>
        {data && data.map(({id, name, species, image})=>(
            <Card
            key={id}
            title={name}
            description={species}
            imgUrl={image}
          />
        ))}
      </CardContainer>
    </div>
  );
}

export default CharacterList;
