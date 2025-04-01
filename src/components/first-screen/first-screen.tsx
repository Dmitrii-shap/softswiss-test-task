import {FC} from "react";
import {Button} from "../../ui/button";
import {Wrap} from "../../ui/wrap";

import Earth from "../../assets/images/EARTH.png";
import "./first-screen.scss";

export const FirstScreen: FC = () => {
  return (
    <div className='first-screen'>
      <Wrap className='first-screen__wrap'>
        <img src={Earth} className='first-screen__earth' alt=""/>
        <div className='first-screen__text-wrap'>
          <h1 className='first-screen__title'>
                    Discover the vast expanses of <span>space</span>
          </h1>

          <div className='first-screen__subtitle'>
                    Where the possibilities are <span>endless!</span>
          </div>

          <div>
            <Button variant='primary'>
                        Learn more
            </Button>
          </div>
        </div>
      </Wrap>
    </div>
  )
}
