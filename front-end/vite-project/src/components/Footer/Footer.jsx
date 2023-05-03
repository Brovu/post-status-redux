import "./Footer.css";
const Footer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpenPost, setOpenPost } = props;
  return (
    <footer>
      <div className="footer-title" onClick={() => setOpenPost(!isOpenPost)}>
        {isOpenPost ? "x" : "+"}
      </div>
    </footer>
  );
};

export default Footer;
