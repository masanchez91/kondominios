function Spinner() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="border-4 border-gray-200 rounded-full w-full h-full animate-spin" />
                </div>
                <div className="absolute inset-2 flex justify-center items-center">
                    <div className="border-4 border-gray-200 rounded-full w-8 h-8 animate-spin" />
                </div>
            </div>
        </div>
    );
}

export default Spinner;
