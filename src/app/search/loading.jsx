export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="container mx-auto mt-10 flex flex-grow">
                <aside className="w-1/4 pr-8">
                    <h3 className="font-bold text-lg mb-4">Categories</h3>
                    <ul>
                        <li className="mb-2">
                            <div className="hover:text-amber-500 hover:underline cursor-pointer animate-pulse h-6 bg-gray-300 w-32"></div>
                        </li>
                        <li className="mb-2">
                            <div className="hover:text-amber-500 hover:underline cursor-pointer animate-pulse h-6 bg-gray-300 w-24"></div>
                        </li>
                        <li className="mb-2">
                            <div className="hover:text-amber-500 hover:underline cursor-pointer animate-pulse h-6 bg-gray-300 w-28"></div>
                        </li>
                    </ul>
                </aside>
                <div className="w-3/4">
                    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(3, minmax(0, 1fr))` }}>
                        <div className="animate-pulse h-80 bg-gray-300 rounded-2xl"></div>
                        <div className="animate-pulse h-80 bg-gray-300 rounded-2xl"></div>
                        <div className="animate-pulse h-80 bg-gray-300 rounded-2xl"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}