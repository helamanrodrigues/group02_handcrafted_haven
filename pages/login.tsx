import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';

const LoginPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Login />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
