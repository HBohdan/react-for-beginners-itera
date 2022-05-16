type NameProps = {
  name: string;
}

const Name: React.FC<NameProps> = ({ name }) => {
  return (
    <h1>{name}</h1>
  );
}

export default Name;