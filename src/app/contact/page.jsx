import ContactForm from '../../components/Contact';

export default function ContactPage() {
    return (
        <div className="text-white min-h-screen flex items-center justify-center p-4 md:p-8">
            <div className="max-w-4xl w-full bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-3xl font-bold mb-6">CONTACTO</h1>
                    <ContactForm />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-semibold mb-4">Widun Artesanias</h2>
                    <p className="mb-2">Freire</p>
                    <p className="mb-2">Dalcahue, Los Lagos</p>
                    <p className="mb-4">Chile</p>
                    <p className="text-lg font-semibold mb-2">+56 9 0000 0000</p>
                    <p className="mb-2">
                        <a href="mailto:contacto@widun.cl" className="text-blue-400 hover:underline">
                            contacto@widun.cl
                        </a>
                    </p>
                    <p className="mt-4">
                        De Lunes a Viernes de 9:30 a 13:00 hrs. y de 15:30 a 19:00 hrs.
                        <br />
                        Sábados de 10:00 a 13:00 hrs. y de 15:30 a 17:00 hrs.
                    </p>
                </div>
            </div>
        </div>
    );
}