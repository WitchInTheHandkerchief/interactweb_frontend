import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Layout from './components/Layout/Layout' ;
import NewsPage from "./pages/NewsPage/NewsPage";
import ActivityPage from "./pages/activityPage/Activity";
import CooperationPage from "./pages/CooperationPage/Cooperation";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/news" element={<NewsPage/>} />
          <Route path="/activity" element={<ActivityPage/>} />
          <Route path="/cooperation" element={<CooperationPage />} />
          <Route
              path="*"
              element={
                <div>
                  <h1>404 NOT FOUND</h1>
                </div>
              }
            />
        </Route>
      </Routes>
    </>
  );
}

export default App;

