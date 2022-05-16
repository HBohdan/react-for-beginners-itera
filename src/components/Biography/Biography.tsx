type BiographyProps = {
  biography: string;
}

const Biography: React.FC<BiographyProps> = ({ biography }) => {
  return (
    <p>{biography}</p>
  );
}

export default Biography;