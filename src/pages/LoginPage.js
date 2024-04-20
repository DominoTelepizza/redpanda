import PageHeader from '../components/PageHeader';
import '../styles/FormStyle.css'; 
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate(); // Użycie hooka useNavigate
  const [regData, setFormData] = useState({
    login: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logowanie...');
  };

    // Funkcja do nawigacji do strony rejestracji
    const handleRegister = () => {
      navigate('/register');
    };
    // Funkcja do nawigacji do strony plan
    const handleLogin = () => {
      navigate('/plan');
    };

  return (
    <div>
      <PageHeader title="Logowanie" />

    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <input className="form-field" type="text" name="login" placeholder="Wpisz login..." value={regData.login} onChange={handleChange} />
        <input className="form-field" type="text" name="password" placeholder="Wpisz hasło..." value={regData.password} onChange={handleChange} />
        <div className="button-container">
            <button className="form-button" type="submit" onClick={handleLogin}>Zaloguj</button>
            <button className="form-button" type="button" onClick={handleRegister}>Zarejestruj</button>
          </div>
      </form>
          <Link to="/forgot-password" className="forgot-password-link">Przypomnij hasło</Link>
      </div>
    </div>
  );
}

export default LoginPage;
