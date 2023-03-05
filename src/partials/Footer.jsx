import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer class="text-center text-white mt-3" style={{backgroundColor: '#f1f1f1'}}>
        <div class="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2023 Copyright by
          <Link class="text-dark" to={'/'}>
            <span> mdwiastika</span>
          </Link>
        </div>
      </footer>
    </>
  );
};
export default Footer;
