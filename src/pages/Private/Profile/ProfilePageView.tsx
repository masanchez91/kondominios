const UserProfileSettings = () => {
    return (
        <div className="l-[max(0%,50%-(theme(maxWidth.lg)/2))] bg-gray-50 py-2 px-2 md:px-24 md:ml-44">
            <div className="flex flex-col md:flex-row py-2 overflow-x- bg-white rounded-lg shadow-md mb-4 p-20 md:p-4 pr-4">
                <div className="w-full md:w-2/3 flex-shrink-0 bg-white rounded-md p-2">
                    <div className="text-left">
                        <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
                            Ajustes de usuario
                        </h2>
                        <p className="text-black mb-1">
                            <span className="block mb-1">
                                mauro.sanchez.simental@gmail.com
                            </span>
                            Se unió a Netlify el 15 de julio.
                        </p>
                        <p className="text-black">
                            Creó 0 sitios. Colabora en 1 equipo.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex items-center justify-center mt-4 md:mt-0">
                    <img
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full"
                        src="https://avatars.githubusercontent.com/u/10161169?s=200"
                        alt="Perfil de usuario"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default UserProfileSettings;
