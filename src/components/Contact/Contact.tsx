import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Contact.css';
import { Title } from '../Title/Title';

const Contact = () => {
  return (
    <article className="contact__container">
      <Title text="Contact" />
      <p role={'paragraph'} className="contact__text">
        You're talking about Inception? Wubba lubba dub dub! This isn't Game of
        Thrones, Morty. Awwww thankss, save your preferences better that way.
        Plus, if you get in kind of a cool enough relationship, you can sort of
        follow each bies for 25 schmeckles!
      </p>
      <div className="contact__info">
        <a href="https://instagram.com" target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={brands('instagram')} />
        </a>
        <a href="https://twitter.com" target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={brands('twitter')} />
        </a>
        <a href="https://facebook.com" target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={brands('facebook')} />
        </a>
        <a href="https://youtube.com" target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={brands('youtube')} />
        </a>
      </div>
    </article>
  );
};

export default Contact;
