import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Layout from './components/Layout/Layout' ;
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/news" element={<NewsPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

