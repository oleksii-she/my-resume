import { amTable, amMobile } from "../../Images";
import { Title, Wrapper } from "./Hero.styed";

import { useMatchMedia } from "../../Hooks/useMatchMedia";
export const Hero: React.FC = () => {
  const { isMobile }: any = useMatchMedia();
  return (
    <Wrapper>
      <div className="wrapper__contacts">
        <Title>
          Oleksii <br /> Shevchenko
          <p>Front-end developer</p>
        </Title>
        {/* {!isMobile && (
          <ul>
            <li>
              <a
                href="mailto:oleksii.shevchenko92@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcom />
                oleksii.shevchenko92@gmail.com
              </a>
            </li>
            <li>
              <div>
                <a
                  href="https://t.me/oleksii_she"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TelegramIcon />
                  Telegram
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/oleksii-shevchenko-36475a252"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon />
                  Linkedin
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/oleksii-she"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                  Github
                </a>
              </div>
            </li>
          </ul>
        )} */}
      </div>
      <img src={isMobile ? amMobile : amTable} alt="my_photo" />
      {/* {isMobile && (
        <ul>
          <li>
            <a
              href="mailto:oleksii.shevchenko92@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              oleksii.shevchenko92@gmail.com
            </a>
          </li>

          <li>
            <a href="https://t.me/oleksii_she" target="_blank" rel="noreferrer">
              <TelegramIcon />
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/oleksii-shevchenko-36475a252"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/oleksii-she"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              Github
            </a>
          </li>
        </ul>
      )} */}
    </Wrapper>
  );
};
