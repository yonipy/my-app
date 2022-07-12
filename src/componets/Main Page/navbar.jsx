import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <div className='navbar'>

      <div className='header'><h4>Made with React! <FontAwesomeIcon icon={faReact} className='react'/></h4></div>

    </div>
  );
}

export default Navbar;
