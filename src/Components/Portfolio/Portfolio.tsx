import { Link } from "react-router-dom";
import { WrapperPortfolio } from "./Portfolio.styled";
import { useMatchMedia } from "../../Hooks/useMatchMedia";
import { IPortfolio } from "../portfolioObj";
import { personalProject } from "../portfolioObj";

export const Portfolio: React.FC = () => {
  const { isMobile }: any = useMatchMedia();

  return (
    <WrapperPortfolio>
      <h2>Portfolio</h2>

      <h3>My personal projects</h3>
      <ul>
        {personalProject.map(
          ({ id, img, imgMob, link, title, add, text }: IPortfolio) => {
            return (
              <li key={id}>
                <picture>
                  <img src={isMobile ? imgMob : img} alt="webStudio" />
                  <Link to={`/portfolio/${id}`}>
                    <p>{title}</p>
                  </Link>
                </picture>
              </li>
            );
          }
        )}
      </ul>
      <div>
        <h3>Team projects</h3>
      </div>
    </WrapperPortfolio>
  );
};
