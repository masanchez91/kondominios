import { useState } from 'react';

const countryFlags = {
    '1': 'https://flagcdn.com/w20/us.png', // Estados Unidos
    '52': 'https://flagcdn.com/w20/mx.png', // México
    '54': 'https://flagcdn.com/w20/ar.png', // Argentina
    '55': 'https://flagcdn.com/w20/br.png', // Brasil
    '56': 'https://flagcdn.com/w20/cl.png', // Chile
    '57': 'https://flagcdn.com/w20/co.png', // Colombia
    '58': 'https://flagcdn.com/w20/ve.png', // Venezuela
    '51': 'https://flagcdn.com/w20/pe.png', // Perú
    '591': 'https://flagcdn.com/w20/bo.png', // Bolivia
    '593': 'https://flagcdn.com/w20/ec.png', // Ecuador
    '595': 'https://flagcdn.com/w20/py.png', // Paraguay
    '598': 'https://flagcdn.com/w20/uy.png', // Uruguay
    '503': 'https://flagcdn.com/w20/sv.png', // El Salvador
    '504': 'https://flagcdn.com/w20/hn.png', // Honduras
    '505': 'https://flagcdn.com/w20/ni.png', // Nicaragua
    '506': 'https://flagcdn.com/w20/cr.png', // Costa Rica
    '507': 'https://flagcdn.com/w20/pa.png', // Panamá
    '592': 'https://flagcdn.com/w20/gy.png', // Guyana
    '597': 'https://flagcdn.com/w20/sr.png', // Surinam
    '59': 'https://flagcdn.com/w20/gf.png', // Guayana Francesa
};

const getCountryCode = (phone: string) => {
    const countryCodes = Object.keys(countryFlags);
    for (const code of countryCodes) {
        if (phone.startsWith('+' + code)) {
            return code;
        }
    }
    return null;
};

const PhoneNumber = ({ phone }: { phone: string }) => {
    const countryCode = getCountryCode(phone);
    const flagUrl = countryFlags[countryCode as keyof typeof countryFlags];

    return (
        <span className="inline-block">
            {flagUrl && (
                <img
                    src={flagUrl}
                    className="inline-block w-5 h-3 mr-2"
                    alt="Country Flag"
                />
            )}
            {phone}
        </span>
    );
};

const UserProfileSettings = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: 'Mauro Eduardo Sánchez Simental',
        email: 'mauro@holy-code.com',
        phone: '+523321594848',
        alias: 'theholycode',
        password: '****************',
        avatar: 'https://avatars.githubusercontent.com/u/10161169?s=200',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = () => setIsEditing(true);
    const handleCancel = () => setIsEditing(false);
    const handleSave = () => {
        // Lógica para guardar los cambios
        setIsEditing(false);
        alert('Perfil actualizado');
    };

    return (
        <div className="l-[max(0%,50%-(theme(maxWidth.lg)/2))] bg-gray-50 py-2 px-2 md:px-24 md:ml-44">
            <div className="flex flex-col md:flex-row py-2 overflow-x-visible bg-white rounded-lg shadow-md mb-4 p-20 md:p-4 pr-4">
                <div className="w-full md:w-2/3 flex-shrink-0 bg-white rounded-md p-2">
                    <div className="text-left">
                        <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
                            Ajustes de usuario
                        </h2>
                        <p className="text-black mb-1">
                            <span className="block mb-1">
                                mauro@holy-code.com
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

            <div className="flex flex-col py-2 overflow-x-visible bg-white rounded-lg shadow-md mb-4 p-20 md:p-4 pr-4">
                <div className="px-4 sm:px-0">
                    <h3 className="text-xl font-semibold leading-7 text-gray-900 text-left">
                        Perfil
                    </h3>
                    <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-500 text-left">
                        Tu información personal
                    </p>
                </div>

                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900 text-left">
                                Nombre Completo:
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-justify">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full"
                                    />
                                ) : (
                                    formData.fullName
                                )}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900 text-left">
                                Correo electrónico:
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-justify">
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full"
                                    />
                                ) : (
                                    formData.email
                                )}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900 text-left">
                                Teléfono móvil:
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-justify">
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full"
                                    />
                                ) : (
                                    <PhoneNumber phone={formData.phone} />
                                )}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900 text-left">
                                Alias:
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-justify">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="alias"
                                        value={formData.alias}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded p-2 w-full"
                                    />
                                ) : (
                                    formData.alias
                                )}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900 text-left">
                                Contraseña:
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-justify">
                                {isEditing ? (
                                    <button
                                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                        onClick={() =>
                                            alert('Recuperar contraseña')
                                        }
                                    >
                                        Recuperar contraseña
                                    </button>
                                ) : (
                                    formData.password
                                )}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900 text-left">
                                Avatar:
                            </dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 text-justify">
                                <div className="w-full md:w-1/3 flex items-center justify-center mt-4 md:mt-0">
                                    <img
                                        className="w-14 h-14 md:w-12 md:h-12 object-cover rounded-full"
                                        src={formData.avatar}
                                        alt="Avatar"
                                    />
                                    {isEditing && (
                                        <button
                                            className="ml-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                            onClick={() =>
                                                alert('Subir imagen')
                                            }
                                        >
                                            Subir imagen
                                        </button>
                                    )}
                                </div>
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className="px-4 py-6 sm:flex sm:justify-end">
                    {isEditing ? (
                        <>
                            <button
                                className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mr-2"
                                onClick={handleSave}
                            >
                                Guardar
                            </button>
                            <button
                                className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                                onClick={handleCancel}
                            >
                                Cancelar
                            </button>
                        </>
                    ) : (
                        <button
                            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            onClick={handleEdit}
                        >
                            Editar
                        </button>
                    )}
                </div>
            </div>

            <div className="flex flex-col py-2 overflow-x-visible bg-white rounded-lg shadow-md mb-4 p-20 md:p-4 pr-4">
                <div className="px-4 sm:px-0">
                    <h3 className="text-xl font-semibold leading-7 text-gray-900 text-left">
                        Zona de peligro
                    </h3>
                    <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-500 text-left">
                        Eliminar usuario
                    </p>
                </div>

                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900 text-left">
                                Una vez que elimines tu usuario, no podrás
                                volver atrás.
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-justify">
                                <div className="px-4 py-6 sm:flex sm:justify-end">
                                    <button
                                        className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                        onClick={() =>
                                            alert('Usuario eliminado')
                                        }
                                    >
                                        Eliminar usuario
                                    </button>
                                </div>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default UserProfileSettings;
