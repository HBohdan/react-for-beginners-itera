import styles from './AppLink.module.scss';

type AppLinkProps = {
  link: string;
}

const AppLink: React.FC<AppLinkProps> = ({ link }) => {
  return (
    <a href={link}
      className={styles.link}
    >
      Learn React
    </a>
  );
}

export default AppLink;