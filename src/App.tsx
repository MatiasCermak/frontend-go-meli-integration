import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@material-ui/core';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { themeOptions } from './themes/PrimaryTheme';
import AuthenticationHandler from './components/authenticationHandler/AuthenticationHandler';
import MainPage from './views/MainPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { AppProvider } from './context/AppContext';

const theme = createTheme(themeOptions);

function App() {
  return (
    <AppProvider initialPayload={null} initialAuthData={null}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Header />

            <Routes>
              <Route path="/auth" element={<AuthenticationHandler />} />
              <Route path="/" element={<MainPage />} />
            </Routes>

            <Footer />
          </Router>

        </div>

      </ThemeProvider>
    </AppProvider>

  );
}

export default App;
