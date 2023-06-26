import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardFooter,
  CardTextFooter
} from "./CardStyles";
import Tilt from "react-parallax-tilt";

export const Card = ({ title, imgUrl,description }) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} data-testid="card-image" data-imgurl={imgUrl}/>
        <CardTextWrapper>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {description}
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          <CardFooter>
            <CardTextFooter>Rick and Morty</CardTextFooter>
          </CardFooter>
        </CardStatWrapper>
      </CardWrapper>
      </Tilt>
  );
};
