import Link from 'next/link';

export default function HeroSection() {
    return (
        <section style={{ padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        color: 'var(--primary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        🚀 Launch your career today
                    </div>
                    <h1>
                        Master Your Internship <br />
                        <span style={{ color: 'var(--primary)' }}>Preparation Journey</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xl)', lineHeight: 1.6 }}>
                        Parse resumes, analyze skills, and get personalized roadmaps to bridge the gap between you and your dream offer.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/dashboard" className="btn btn-primary">
                            Start Preparing Now
                        </Link>
                        <Link href="#how-it-works" className="btn btn-outline">
                            How it Works
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
