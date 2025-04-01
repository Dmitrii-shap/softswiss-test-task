import {FC} from "react";
import {SubHeader} from "../../ui/sub-header";
import {Wrap} from "../../ui/wrap";
import {Card} from "../../ui/card/card.tsx";

import {cards} from "./cards.ts";

import "./cards-screen.scss";

export const CardsScreen: FC = () => {

  return <Wrap className="cards-screen">
    <SubHeader>Offers</SubHeader>
    <div className="cards-screen__content">
      {cards.map((item, index) => (
        <Card key={item.header} type={index === 0 || index === 3 ? "big" : "default"} className="cards-screen__item" {...item} actionClick={() => console.log(item.header)} />
      ))}
    </div>
  </Wrap>
}
