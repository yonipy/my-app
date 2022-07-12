import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function Page() {
    return (
      <div className='page'>
        <div className='name'>
          <h4>Yoni</h4>
          <a className='button1' href='https://discord.com/users/675104167345258506/'><FontAwesomeIcon icon={faDiscord}/></a>
          <a className='button2' href='https://www.instagram.com/py.yoni/'><FontAwesomeIcon icon={faInstagram}/></a>
          <a className='button3' href='https://github.com/yonipy'><FontAwesomeIcon icon={faGithub}/></a>
        </div>
  
      </div>
    );
  }
  
export default Page;