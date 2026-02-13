import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)', textDecoration: 'none' }}>
                    PrepOS
                </Link>
                <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
                    <Link href="/" style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Home</Link>
                    <Link href="#features" style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Features</Link>
                    <Link href="/dashboard" style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Dashboard</Link>
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                    <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 600, padding: '0.5rem 1rem' }}>
                        Log in
                    </Link>
                    <Link href="/signup" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
