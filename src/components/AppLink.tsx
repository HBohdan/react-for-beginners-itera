type AppLinkProps = {
  link: string;
}

const AppLink: React.FC<AppLinkProps> = ({ link }) => {
  return (
    <a href={link}>
      Learn React
    </a>
  );
}

export default AppLink;