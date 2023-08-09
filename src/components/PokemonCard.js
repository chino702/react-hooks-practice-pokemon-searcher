import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isFront, setIsFront] = useState(true);

  const toggleSprite = () => {
    setIsFront(prevIsFront => !prevIsFront);
  };

  return (
    <Card onClick={toggleSprite}>
      <div>
        <div className="image">
          <img alt="oh no!" src={isFront ? pokemon.sprites.front : pokemon.sprites.back} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;