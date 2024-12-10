import AboutContent from '../../components/About';

export default function AboutPage() {
    return (
        <div className="text-white min-h-screen">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Sobre Nosotros
                </h1>
                <AboutContent />
            </div>
        </div>
    );
}