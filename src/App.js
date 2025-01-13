import NavBar from "./component/NavBar";
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Container className={styles.AppHead}>
                <Routes>
                    <Route 
                        exact path="/" 
                        element={
                          <h1>Home Page </h1>
                        }
                    />
                  <Route 
                    path="/aboutus" 
                    element={
                      <h1>About Page </h1>
                    } 
                  />
                  <Route 
                    path="/contact" 
                    element={
                      <h1>
                        Contact Page 
                      </h1>
                    } 
                  />
                  <Route 
                    path="/testimonials" 
                    element={
                      <h1>Testimonials Page</h1>
                    } 
                  />
                  <Route 
                    path="/support" 
                    element={
                      <h1>Support Page </h1>
                    } 
                  />
                </Routes>
            </Container>  
        </div>
    );
}

export default App;