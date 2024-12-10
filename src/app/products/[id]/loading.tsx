export default function Loading() {
    return (
        <div className="container mx-auto mt-10 px-4">
            <div className="animate-pulse border-2 border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row">
                <div className="md:w-2/3 md:pr-8 flex justify-center">
                    <div className="w-full rounded-2xl h-[600px] bg-gray-300"></div>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col items-center md:items-start">
                    <div className="h-8 w-48 bg-gray-300 mb-4"></div>
                    <div className="h-6 w-32 bg-gray-300 mb-6"></div>
                    <div className="h-4 w-full bg-gray-300 mb-6"></div>
                    <div className="h-4 w-full bg-gray-300 mb-6"></div>
                    <div className="h-4 w-full bg-gray-300 mb-6"></div>
                    <div className="h-10 w-40 bg-gray-300"></div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center">Explore More</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="animate-pulse w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <div className="h-80 bg-gray-300 rounded-2xl"></div>
                    </div>
                    <div className="animate-pulse w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <div className="h-80 bg-gray-300 rounded-2xl"></div>
                    </div>
                    <div className="animate-pulse w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <div className="h-80 bg-gray-300 rounded-2xl"></div>
                    </div>
                    <div className="animate-pulse w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <div className="h-80 bg-gray-300 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}