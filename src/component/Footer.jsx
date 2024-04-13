import { FaReact } from 'react-icons/fa';
import './footer.css';
function Footer() {
  return (
    <footer className="outer-container-footer">
        <div className="inner-container-footer">
        <p>Powered by: <FaReact /> React</p>
        <p>Created by: Tom</p>
      <p>14-04-2024</p>
        </div>
    </footer>
  );
}

export default Footer;