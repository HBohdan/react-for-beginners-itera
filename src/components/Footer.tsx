import AppLink from './AppLink';

type FooterProps = {
  copyright: string;
}

// const Footer: React.FC<FooterProps> = (props) => (

//   <footer>
//     <AppLink link='https://www.youtube.com/channel/UCg-txtmOEQ8BniR8008O1mA' />
//     Footer {props.copyright}
//   </footer>
// );

const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <>
      <AppLink link='https://www.youtube.com/channel/UCg-txtmOEQ8BniR8008O1mA' />
      <footer>Footer {copyright}</footer>
    </>

  );
}

export default Footer;