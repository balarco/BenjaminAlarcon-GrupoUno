"use client";

const ContactForm = () => {
    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block mb-1">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="surname" className="block mb-1">Apellido</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-1">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="message" className="block mb-1">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full bg-gray-700 text-white px-3 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            >
                ENVIAR
            </button>
        </form>
    );
};

export default ContactForm;