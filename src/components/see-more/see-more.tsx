import {FC} from "react";
import {Wrap} from "../../ui/wrap";
import {Button} from "../../ui/button";
import {SubHeader} from "../../ui/sub-header";

import "./see-more.scss"

export const SeeMore: FC = () => {
  return (
    <Wrap className="see-more__wrap">
      <SubHeader> Embark on a space journey</SubHeader>
      <p className="see-more__text">
        Travelling into space is one of the most exciting and unforgettable adventures that can change your life
        forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready
        to help you realize this dream. We offer a unique experience that will allow you to go on a space journey
        and see all the secrets of the universe. We guarantee that every moment in space will be filled with
        incredible impressions, excitement and new discoveries. Our team of professionals takes care of your
        safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space
        excursions.
      </p>
      <details className="see-more__details">
        <Button variant="link" tag="summary">Read more</Button>
        <p className="see-more__text see-more__text--more">
          Travelling into space is one of the most exciting and unforgettable adventures that can change your
          life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company
          is ready to help you realize this dream. We offer a unique experience that will allow you to go on a
          space journey and see all the secrets of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries. Our team of professionals takes
          care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
      </details>
    </Wrap>
  )
}
