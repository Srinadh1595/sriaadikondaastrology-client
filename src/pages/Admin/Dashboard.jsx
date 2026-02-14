import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../styles/global.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    return (
        <div className="page-container">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h1 style={{ margin: 0 }}>Admin Dashboard</h1>
                    <button onClick={handleLogout} className="btn-small" style={{ background: '#333' }}>Logout</button>
                </div>

                <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <div className="dashboard-card" style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <h3>Manage Services</h3>
                        <p>Add, edit, or remove services.</p>
                        <Link to="/admin/services" className="btn-small" style={{ display: 'inline-block', marginTop: '15px' }}>Go to Services</Link>
                    </div>
                    <div className="dashboard-card" style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <h3>Manage Testimonials</h3>
                        <p>Update client reviews.</p>
                        <Link to="/admin/testimonials" className="btn-small" style={{ display: 'inline-block', marginTop: '15px' }}>Go to Testimonials</Link>
                    </div>
                    <div className="dashboard-card" style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <h3>Manage Gallery</h3>
                        <p>Upload layout photos.</p>
                        <Link to="/admin/gallery" className="btn-small" style={{ display: 'inline-block', marginTop: '15px' }}>Go to Gallery</Link>
                    </div>
                </div>

                <div style={{ marginTop: '40px', padding: '20px', background: '#ffe', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <h4>Quick Tips:</h4>
                    <ul>
                        <li>Ensure images are optimized before uploading.</li>
                        <li>Keep service descriptions concise.</li>
                        <li>Regularly update testimonials to build trust.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
