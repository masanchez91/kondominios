import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';

const getCardType = (number: string) => {
    const visaRegex = /^4/;
    const masterCardRegex = /^5[1-5]/;
    const amexRegex = /^3[47]/;

    if (visaRegex.test(number))
        return <FaCcVisa className="text-blue-600 text-3xl" />;
    if (masterCardRegex.test(number))
        return <FaCcMastercard className="text-yellow-600 text-3xl" />;
    if (amexRegex.test(number))
        return <FaCcAmex className="text-green-600 text-3xl" />;
    return null;
};

interface PricingCardPropsType {
    title: string;
    desc: string;
    price: string[];
    options: {
        icon: string;
        info: string;
    }[];
    onSelect: () => void;
    isCurrentPlan: boolean;
    isAnnual: boolean;
}

function PricingCard({
    title,
    desc,
    price,
    options,
    onSelect,
    isCurrentPlan,
    isAnnual,
}: PricingCardPropsType) {
    return (
        <div
            className={`bg-white shadow-lg rounded-lg p-6 border-2 ${isCurrentPlan ? 'border-gray-300' : 'border-magenta-500'} transform transition duration-300 hover:scale-105`}
        >
            <h2 className="text-xl font-bold text-magenta-700 capitalize mb-1">
                {title}
            </h2>
            <p className="text-magenta-500 mb-4">{desc}</p>

            {/* Precio y mensaje de ahorro */}
            <p className="text-4xl font-bold text-magenta-700 flex items-center">
                {price[0]}
                {price[1]}
                <span className="text-lg font-bold text-magenta-500 self-end">
                    /{price[2]}
                </span>
            </p>
            {isAnnual && ( // Mostrar mensaje de ahorro solo si el plan es anual
                <p className="text-sm text-magenta-500 mt-1">
                    Ahorras un 20% con el plan anual
                </p>
            )}

            {/* Lista de características */}
            <ul className="flex flex-col gap-3 mb-6">
                {options.map((option, key) => (
                    <li
                        key={key}
                        className="flex items-center gap-3 text-magenta-700"
                    >
                        <span className="h-5 w-5 bg-magenta-700 text-white flex items-center justify-center rounded-full">
                            {option.icon}
                        </span>
                        <span className="text-magenta-700">{option.info}</span>
                    </li>
                ))}
            </ul>

            {/* Botón de acción */}
            <button
                className={`w-full ${isCurrentPlan ? 'bg-gray-300 cursor-not-allowed' : 'bg-black hover:bg-gray-800'} text-white py-2 rounded-lg transition border-2 ${isCurrentPlan ? 'border-gray-300' : 'border-magenta-500'}`}
                onClick={onSelect}
                disabled={isCurrentPlan}
            >
                {isCurrentPlan ? 'Plan Actual' : 'Comenzar'}
            </button>
        </div>
    );
}

export function AccountPageView() {
    const [step, setStep] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState('Empresa');
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [isAnnual, setIsAnnual] = useState(false); // false = mensual, true = anual

    const handleChange = (e: { target: { value: string } }) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Eliminar cualquier carácter no numérico

        if (value.length <= 4) {
            setSecurityCode(value);
        }
    };

    const formatCardNumber = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{4})/g, '$1 ')
            .trim();
    };

    const formatExpirationDate = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length >= 2) {
            return cleaned.slice(0, 2) + ' / ' + cleaned.slice(2, 4);
        }
        return cleaned;
    };

    const cards = [
        {
            title: 'Básico',
            desc: `Acceso gratuito para 1 administrador y 10 residentes`,
            price: isAnnual ? ['$', '2,112', 'año'] : ['$', '220', 'mes'], // Aplicar descuento del 20% para anual
            options: [
                { icon: '✅', info: 'Generación de reportes' },
                {
                    icon: '✅',
                    info: 'Envío de avisos y notificaciones a residentes',
                },
                {
                    icon: '✅',
                    info: 'Cobranza manual de cuotas y pagos (no automatizada)',
                },
                { icon: '✅', info: 'Soporte' },
            ],
            isCurrentPlan: false,
        },
        {
            title: 'Estándar',
            desc: `Acceso gratuito para 2 administradores y 30 residentes`,
            price: isAnnual ? ['$', '4,608', 'año'] : ['$', '480', 'mes'], // Aplicar descuento del 20% para anual
            options: [
                {
                    icon: '✅',
                    info: 'Generación de reportes financieros y de mantenimiento',
                },
                {
                    icon: '✅',
                    info: 'Envío de avisos y notificaciones a residentes',
                },
                { icon: '✅', info: 'Control de acceso mediante códigos QR' },
                {
                    icon: '✅',
                    info: 'Cobranza manual de cuotas y pagos (no automatizada)',
                },
                { icon: '✅', info: 'Soporte prioritario' },
            ],
            isCurrentPlan: false,
        },
        {
            title: 'Intermedio',
            desc: `Acceso gratuito para 4 administradores y 50 residentes`,
            price: isAnnual ? ['$', '7,200', 'año'] : ['$', '750', 'mes'], // Aplicar descuento del 20% para anual
            options: [
                {
                    icon: '✅',
                    info: 'Generación de reportes financieros y de mantenimiento',
                },
                {
                    icon: '✅',
                    info: 'Envío de avisos y notificaciones a residentes',
                },
                { icon: '✅', info: 'Control de acceso mediante códigos QR' },
                { icon: '✅', info: 'Cobranza automatizada de cuotas y pagos' },
                { icon: '✅', info: 'Soporte prioritario' },
            ],
            isCurrentPlan: false,
        },
        {
            title: 'Premium',
            desc: `Acceso gratuito para 7 administradores y 100 residentes`,
            price: isAnnual ? ['$', '13,440', 'año'] : ['$', '1,400', 'mes'], // Aplicar descuento del 20% para anual
            options: [
                {
                    icon: '✅',
                    info: 'Generación de reportes financieros y de mantenimiento',
                },
                {
                    icon: '✅',
                    info: 'Envío de avisos y notificaciones a residentes',
                },
                { icon: '✅', info: 'Control de acceso mediante códigos QR' },
                { icon: '✅', info: 'Cobranza automatizada de cuotas y pagos' },
                {
                    icon: '✅',
                    info: 'Soporte prioritario y asistencia personalizada',
                },
            ],
            isCurrentPlan: true, // Este plan está seleccionado inicialmente
        },
    ];

    const handleSelectPlan = (planTitle: string) => {
        if (planTitle !== selectedPlan) {
            setSelectedPlan(planTitle);
            setStep(2);
        }
    };

    const handleAddPaymentMethod = () => {
        setShowPaymentForm(true);
    };

    const handleSavePaymentMethod = () => {
        alert('Método de pago guardado');
        setShowPaymentForm(false);
    };

    const handleCancelPaymentMethod = () => {
        setShowPaymentForm(false);
    };

    if (step === 1) {
        return (
            <section className="py-24 px-8 bg-magenta-50">
                <div className="max-w-7xl mx-auto bg-white py-10 px-6 md:px-24 rounded-lg shadow-xl">
                    <div className="text-center mb-10">
                        <h3 className="text-lg font-bold text-magenta-700">
                            Planes de Precios
                        </h3>
                        <h1 className="text-2xl lg:text-2xl font-bold text-magenta-900 mb-4 leading-snug max-w-2xl mx-auto">
                            Invierte en un plan a la medida de tu condominio.
                        </h1>
                        <p className="text-magenta-600 max-w-screen-xl mx-auto">
                            Compara los planes y elige el que mejor se ajuste a
                            tu presupuesto y objetivos. Nuestra solución
                            facilita la gestión, optimiza procesos y mejora la
                            experiencia de los residentes.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-4 mb-8">
                        <span
                            className={`text-purple-700 font-medium ${!isAnnual ? 'font-bold' : 'opacity-50'}`}
                        >
                            Mensual
                        </span>
                        <div
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-12 h-6 bg-purple-500 rounded-full p-1 cursor-pointer"
                        >
                            <div
                                className={`bg-white w-4 h-4 rounded-full transition-transform ${
                                    isAnnual ? 'transform translate-x-6' : ''
                                }`}
                            ></div>
                        </div>
                        <span
                            className={`text-purple-700 font-medium ${isAnnual ? 'font-bold' : 'opacity-50'}`}
                        >
                            Anual
                        </span>
                    </div>

                    <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 max-w-5xl mx-auto">
                        {cards.map(
                            (
                                { title, desc, options, price, isCurrentPlan },
                                key,
                            ) => (
                                <PricingCard
                                    key={key}
                                    title={title}
                                    desc={desc}
                                    price={price}
                                    options={options}
                                    onSelect={() => handleSelectPlan(title)}
                                    isCurrentPlan={isCurrentPlan}
                                    isAnnual={isAnnual}
                                />
                            ),
                        )}
                    </div>

                    <p className="mt-10 text-magenta-600 text-center">
                        Todos los planes incluyen actualizaciones ilimitadas y
                        soporte. 🚀
                    </p>
                </div>
            </section>
        );
    }

    if (step === 2) {
        return (
            <section className="py-24 px-8 bg-magenta-50">
                <div className="max-w-3xl mx-auto bg-white py-10 px-6 md:px-12 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold text-pink-700 mb-4">
                        Detalles del Plan
                    </h2>
                    <p className="mb-6 text-magenta-600">
                        Has seleccionado el plan <strong>{selectedPlan}</strong>
                        . Revisa los detalles y completa el proceso de pago.
                    </p>

                    <div className="border rounded-lg p-6 bg-gray-50">
                        <h3 className="text-lg font-bold text-magenta-700 mb-4">
                            {selectedPlan}
                        </h3>
                        <p className="text-magenta-600 mb-4">
                            Colaboración en equipo para proyectos web
                            profesionales.
                        </p>

                        <div className="mb-6">
                            <p className="text-magenta-700 font-bold">
                                1 miembro pagado
                            </p>
                            <p className="text-4xl font-bold text-magenta-700">
                                $19
                            </p>
                            <p className="text-magenta-600">
                                Total mensual: $19
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="text-magenta-700 font-bold">
                                $19 por miembro /mes
                            </p>
                            <ul className="text-magenta-700 space-y-2">
                                {cards
                                    .find(card => card.title === selectedPlan)
                                    ?.options.map((option, key) => (
                                        <li
                                            key={key}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="h-5 w-5 bg-magenta-700 text-white flex items-center justify-center rounded-full">
                                                {option.icon}
                                            </span>
                                            <span>{option.info}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        {showPaymentForm ? (
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-magenta-700 mb-4">
                                    Añadir método de pago
                                </h3>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <label className="block text-magenta-700">
                                            Número de tarjeta
                                        </label>
                                        <input
                                            type="text"
                                            value={cardNumber}
                                            onChange={e =>
                                                setCardNumber(
                                                    formatCardNumber(
                                                        e.target.value,
                                                    ),
                                                )
                                            }
                                            maxLength={19}
                                            className="w-full p-2 border border-magenta-500 rounded-lg pr-16"
                                            placeholder="1234 1234 1234 1234"
                                        />
                                        <div className="absolute right-3 top-7 text-sm text-magenta-500">
                                            {getCardType(
                                                cardNumber.replace(/\s/g, ''),
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-magenta-700">
                                                Fecha de expiración
                                            </label>
                                            <input
                                                type="text"
                                                maxLength={7}
                                                value={expirationDate}
                                                onChange={e =>
                                                    setExpirationDate(
                                                        formatExpirationDate(
                                                            e.target.value,
                                                        ),
                                                    )
                                                }
                                                className="w-full p-2 border border-magenta-500 rounded-lg"
                                                placeholder="MM / YY"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-magenta-700">
                                                Código de seguridad
                                            </label>
                                            <input
                                                type="text"
                                                value={securityCode}
                                                onChange={handleChange}
                                                className="w-full p-2 border border-magenta-500 rounded-lg"
                                                maxLength={4}
                                                minLength={3}
                                                placeholder="CVC"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-magenta-700">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-magenta-500 rounded-lg"
                                            placeholder="Nombre completo"
                                        />
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        <button
                                            className="bg-white text-black py-2 px-4 rounded-lg border-2 border-magenta-500 hover:bg-gray-100 transition"
                                            onClick={handleCancelPaymentMethod}
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            className="bg-black text-white py-2 px-4 rounded-lg border-2 border-magenta-500 hover:bg-gray-800 transition"
                                            onClick={handleSavePaymentMethod}
                                        >
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="mb-6">
                                <p className="text-magenta-700 font-bold">
                                    Método de pago
                                </p>
                                <p className="text-magenta-600">
                                    Se requiere al menos un método de pago para
                                    completar el proceso.
                                </p>
                                <button
                                    className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition border-2 border-magenta-500"
                                    onClick={handleAddPaymentMethod}
                                >
                                    Añadir método de pago
                                </button>
                            </div>
                        )}

                        <div className="flex justify-between">
                            <button
                                className="bg-white text-black py-2 px-4 rounded-lg border-2 border-magenta-500 hover:bg-gray-100 transition"
                                onClick={() => setStep(1)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="bg-black text-white py-2 px-4 rounded-lg border-2 border-magenta-500 hover:bg-gray-800 transition"
                                onClick={() => alert('Plan actualizado')}
                            >
                                Actualizar a Pro por $19/mes
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return null;
}

export default AccountPageView;
