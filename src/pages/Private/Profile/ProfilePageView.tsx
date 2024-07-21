const UserProfileSettings = () => {
    return (
        <div className="l-[max(0%,50%-(theme(maxWidth.lg)/2))] bg-red-500 py-8 px-4 md:px-24">
            <div className="flex flex-col md:flex-row py-8 overflow-x-auto bg-green-500 rounded-lg shadow-md">
                <div className="w-full md:w-2/3 flex-shrink-0 bg-blue-500 rounded-md p-6 ml-10 md:ml-8">
                    <div className="text-left">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                            Ajustes de usuario
                        </h2>
                        <p className="text-white mb-4">
                            <span className="block mb-2">
                                mauro.sanchez.simental@gmail.com
                            </span>
                            Se unió a Netlify el 15 de julio.
                        </p>
                        <p className="text-white">
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
