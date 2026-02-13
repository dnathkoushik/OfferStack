export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)', padding: 'var(--spacing-2xl) 0', marginTop: 'auto' }}>
            <div className="container">
                <div className="grid-responsive" style={{ gap: 'var(--spacing-2xl)' }}>
                    <div>
                        <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>PrepOS</h4>
                        <p style={{ maxWidth: '300px' }}>
                            The intelligent internship preparation system designed to help you land your dream job.
                        </p>
                    </div>
                    <div>
                        <h5 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-md)' }}>Product</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            <a href="#" style={{ color: 'var(--text-muted)' }}>Features</a>
                            <a href="#" style={{ color: 'var(--text-muted)' }}>Pricing</a>
                            <a href="#" style={{ color: 'var(--text-muted)' }}>Integrations</a>
                        </div>
                    </div>
                    <div>
                        <h5 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-md)' }}>Company</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            <a href="#" style={{ color: 'var(--text-muted)' }}>About</a>
                            <a href="#" style={{ color: 'var(--text-muted)' }}>Blog</a>
                            <a href="#" style={{ color: 'var(--text-muted)' }}>Careers</a>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 'var(--spacing-2xl)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} PrepOS. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
