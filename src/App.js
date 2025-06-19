import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img src="/vet-logo2.svg" alt="VetCard Logo" className="logo" />
        <nav className="nav">
          <a href="#" className="nav-link active">Главная</a>
          <a href="#" className="nav-link">О проекте</a>
          <a href="#" className="nav-link">Войти</a>
        </nav>
      </header>

      <main className="main">
        <div className="text-content">
          <h1>VetCard — умный помощник<br />по здоровью питомцев</h1>
          <p>
            Цифровая медицинская карта для вашего питомца.
            Напоминания, AI-советы, история здоровья — всё в одном месте.
          </p>
          <button className="register-btn">Зарегистрироваться</button>
        </div>

        <div className="image-content">
          <img src="/Veterinary-bro.svg" alt="Veterinary illustration" className="main-image" />
        </div>
      </main>
    </div>
  );
}

export default App;
