export default function FeaturesSection() {
    const features = [
        {
            title: "Smart Resume Parsing",
            description: "Instantly extract key skills and experience from your resume with our advanced AI parser.",
            icon: "📄"
        },
        {
            title: "Skill Gap Analysis",
            description: "Compare your profile against real job descriptions to identify exactly what you're missing.",
            icon: "🔍"
        },
        {
            title: "Personalized Roadmaps",
            description: "Get a step-by-step learning path tailored to close your skill gaps and land the interview.",
            icon: "🗺️"
        }
    ];

    return (
        <section id="features" style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: 'var(--background)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>Why Choose PrepOS?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Everything you need to streamline your preparation and stand out from the competition.
                    </p>
                </div>
                <div className="grid-responsive">
                    {features.map((feature, index) => (
                        <div key={index} className="card">
                            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>{feature.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
