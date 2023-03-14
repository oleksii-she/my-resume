import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IPortfolio } from "../../Components/portfolioObj";
import { personalProject, commandProject } from "../../Components/portfolioObj";
import { useMatchMedia } from "../../Hooks/useMatchMedia";
import { Container } from "../../Styles/container.styled";
import { WrapperDetalies } from "./PortfolioDetalies.styled";
import { SectionNext } from "../Home/Home.styled";
const PortfilioDetalies: React.FC = () => {
  const { isMobile }: any = useMatchMedia();
  const { pathname } = useLocation();
  const [array, setArray]: any = useState([]);

  useEffect(() => {
    const detalies = () => {
      const detaliesPortfolio = [...personalProject, ...commandProject];
      const id = pathname.replace("/portfolio/", "");
      detaliesPortfolio.forEach((el) => {
        if (el.id === id) {
          return setArray([el]);
        }
      });
    };
    detalies();
  }, [pathname]);

  return (
    <SectionNext>
      <Container>
        <WrapperDetalies>
          {array.map(
            ({ id, img, imgMob, link, title, add, text, role }: IPortfolio) => {
              return (
                <div key={id}>
                  <div>
                    <h2>{title}</h2>
                    <p className="pre__title">{role}</p>
                    <div className="detalies">
                      <div>
                        <picture>
                          <img src={isMobile ? imgMob : img} alt="webStudio" />
                        </picture>
                      </div>
                      <div>
                        <div className="title_box">
                          <h3>{add}</h3>
                          <p className="description">{text}</p>
                          <a href={link} target="_blank" rel="noreferrer">
                            Go to the project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </WrapperDetalies>
      </Container>
    </SectionNext>
  );
};

export default PortfilioDetalies;
