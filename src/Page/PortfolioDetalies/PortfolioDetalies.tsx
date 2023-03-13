import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IPortfolio } from "../../Components/portfolioObj";
import { personalProject, commandProject } from "../../Components/portfolioObj";
import { useMatchMedia } from "../../Hooks/useMatchMedia";

const PortfilioDetalies: React.FC = () => {
  const { isMobile }: any = useMatchMedia();
  const { pathname } = useLocation();
  const [array, setArray]: any = useState([]);
  console.log(array);
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
    <div>
      <h2>detalies</h2>
      {array.map(({ id, img, imgMob, link, title, add, text }: IPortfolio) => {
        return (
          <li key={id}>
            <picture>
              <img src={isMobile ? imgMob : img} alt="webStudio" />

              <p>{title}</p>
            </picture>
          </li>
        );
      })}
    </div>
  );
};

export default PortfilioDetalies;
