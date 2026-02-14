import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import AdminRoute from './components/AdminRoute';
import ManageServices from './pages/Admin/ManageServices';
import ManageGallery from './pages/Admin/ManageGallery';
import ManageTestimonials from './pages/Admin/ManageTestimonials';
import './styles/global.css';

function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <AdminRoute>
                            <Dashboard />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/admin/services"
                    element={
                        <AdminRoute>
                            <ManageServices />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/admin/gallery"
                    element={
                        <AdminRoute>
                            <ManageGallery />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/admin/testimonials"
                    element={
                        <AdminRoute>
                            <ManageTestimonials />
                        </AdminRoute>
                    }
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
