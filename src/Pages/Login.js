import background from './background.jpg';
import {Routes, Route, useNavigate} from 'react-router-dom'

function Login(){
    const navigate = useNavigate();

    const userlogin = () => {
        navigate('/LoginForm');
      };

  return (
    <div className='bg'>
        <img className= 'pic' src={background} alt="food" />
        <div className="container">
            <h1>Welcome to Food Ordering ChatBot</h1>
            <center><button type='submit'onClick={userlogin}>Log In</button></center>
        </div>
    </div>
  );
};

export default Login;