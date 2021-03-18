import style from './App.module.css';
import Header from './components/Header/Header';
//ako e s index.js:
// import Header from './components/Header'
import AsideMenu from './components/AsideMenu/AsideMenu';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <section className={style.container}>
      <section className={style.app}>
        <Header/>
        <AsideMenu/>
        <Main/>
        <Footer/>
      </section>
    </section>
  );
}

export default App;
