import React, { useState } from 'react';
import '../styles/FormStyle.css'; 
import PageHeader from '../components/PageHeader';

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
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
    console.log('Dane do rejestracji:', formData);
  };

  return (
    <div>
      <PageHeader title="Rejestracja" />
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input className="form-field" type="text" name="firstName" placeholder="Wpisz imię..." value={formData.firstName} onChange={handleChange} />
        <input className="form-field" type="text" name="lastName" placeholder="Wpisz nazwisko..." value={formData.lastName} onChange={handleChange} />
        <input className="form-field" type="email" name="email" placeholder="Wpisz email..." value={formData.email} onChange={handleChange} />
        <input className="form-field" type="text" name="username" placeholder="Wpisz login..." value={formData.username} onChange={handleChange} />
        <input className="form-field" type="password" name="password" placeholder="Wpisz hasło..." value={formData.password} onChange={handleChange} />
        <input className="form-field" type="password" name="confirmPassword" placeholder="Powtórz hasło..." value={formData.confirmPassword} onChange={handleChange} />
        <button className="form-register-button" type="submit">Zarejestruj</button>
      </form>
    </div>
    </div>
  );
}

export default RegisterPage;
