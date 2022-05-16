import AppLink from '../AppLink/AppLink';
import styles from './Footer.module.scss';

type FooterProps = {
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <>
      <AppLink link='https://www.youtube.com/channel/UCg-txtmOEQ8BniR8008O1mA' />
      <footer className={styles.footer}>Footer {copyright}</footer>
    </>

  );
}

export default Footer;