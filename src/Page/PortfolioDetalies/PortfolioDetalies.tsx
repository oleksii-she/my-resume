import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IPortfolio } from "../../Components/portfolioObj";
import { personalProject, commandProject } from "../../Components/portfolioObj";
import { useMatchMedia } from "../../Hooks/useMatchMedia";
import { Container } from "../../Styles/container.styled";
import { WrapperDetails } from "./PortfolioDetails";
import { SectionNext } from "../Home/Home.styled";
const PortfilioDetalies: React.FC = () => {
  const { isMobile }: any = useMatchMedia();
  const { pathname } = useLocation();
  const [array, setArray]: any = useState([]);

  useEffect(() => {
    const details = () => {
      const detailsPortfolio = [...personalProject, ...commandProject];
      const id = pathname.replace("/portfolio=", "");
      detailsPortfolio.forEach((el) => {
        if (el.id === id) {
          return setArray([el]);
        }
      });
    };
    details();
  }, [pathname]);

  return (
    <SectionNext>
      <Container>
        <WrapperDetails>
          {array.map(
            ({ id, img, imgMob, link, title, add, text, role }: IPortfolio) => {
              return (
                <div key={id}>
                  <div>
                    <h2>{title}</h2>
                    <p className="pre__title">{role}</p>
                    <div className="details">
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
        </WrapperDetails>
      </Container>
    </SectionNext>
  );
};

export default PortfilioDetalies;
