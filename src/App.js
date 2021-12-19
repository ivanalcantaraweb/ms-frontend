import './App.css';
import { Routes, Route} from "react-router-dom";

//Pages
import Home from './Pages/home';
import About from './Pages/about';
import Profile from './Pages/profile';
import Discover from './Pages/discover';
import Friends from './Pages/friends';
import Settings from './Pages/settings';
import NotFound from './Pages/404.jsx';

//Layouts
import GeneralLayout from './Pages/Layouts/generalLayout';
import BodyLayout from './Pages/Layouts/bodyLayout';

// Navigation
import Navbar from './Components/Navbar/Navbar/Navbar';
import SidebarMenu from './Components/SidebarMenu/sidebarMenu';

//Footer
import Footer from './Components/Footer/footer';

function App() {
  return (
    <GeneralLayout>
      <SidebarMenu/>
      <BodyLayout>
        <Navbar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="discover" element={<Discover />} />
            <Route path="friends" element={<Friends />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
        </Routes>    
      </BodyLayout>
      <Footer/> 
    </GeneralLayout>
  );
}

export default App;
