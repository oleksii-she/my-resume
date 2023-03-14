import {
  ContactsWrapper,
  ContactsBox,
  LinkedinIcon,
  GithubIcon,
  TelegramIcon,
} from "./Contacts.styled";

export const Contacts: React.FC = () => {
  return (
    <ContactsWrapper>
      <h2>Contacts</h2>

      <p>Want to know more or just chat? You are welcome!</p>
      <button>Send message</button>

      <ContactsBox>
        <div>
          <a
            href="mailto:oleksii.shevchenko92@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="email__link"
          >
            oleksii.shevchenko92@gmail.com
          </a>
        </div>
        <div className="icon__box">
          <div>
            <a href="https://t.me/oleksii_she" target="_blank" rel="noreferrer">
              <span>
                <TelegramIcon />
              </span>
              <span> Telegram</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/oleksii-shevchenko-36475a252"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <LinkedinIcon />
              </span>
              <span>Linkedin</span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/oleksii-she"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <GithubIcon />
              </span>
              <span>Github</span>
            </a>
          </div>
        </div>
      </ContactsBox>
    </ContactsWrapper>
  );
};
