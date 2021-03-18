import style from './App.module.css';
import Header from './components/Header/Header';
//ako e s index.js:
// import Header from './components/Header'

function App() {
  return (
    <section className={style.app}>
        <Header>
        </Header>
    </section>
  );
}

export default App;
