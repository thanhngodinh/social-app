import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './pages/Auth';

export default App;

function App() {
    return (
        <div className="App">
            <div className="blur" style={{ top: '-18%', right: '0' }}></div>
            <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>

            <Home />
            {/* <Profile /> */}
            {/* <Auth /> */}
        </div>
    );
}
