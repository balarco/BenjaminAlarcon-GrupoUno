// src/app/not-found.jsx

export default function Custom404() {
    return (
        <>
            <div style={{ height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#2d3748' }}>404</h1>
                <p style={{ fontSize: '1.5rem', color: '#4a5568' }}>Page Not Found</p>
            </div>
        </>
    );
}