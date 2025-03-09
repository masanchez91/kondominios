import React, { useState } from 'react';

const initialInvoices = [
    {
        id: 3066,
        date: 'Jan 6, 2022',
        status: 'Paid',
        customer: 'Arthur Melo',
        email: 'authurmelo@example.com',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        id: 3065,
        date: 'Jan 5, 2022',
        status: 'Cancelled',
        customer: 'Andi Lane',
        email: 'andi@example.com',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        id: 3064,
        date: 'Jan 5, 2022',
        status: 'Paid',
        customer: 'Kate Morrison',
        email: 'kate@example.com',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        id: 3063,
        date: 'Jan 4, 2022',
        status: 'Paid',
        customer: 'Candice Wu',
        email: 'candice@example.com',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        id: 3062,
        date: 'Jan 4, 2022',
        status: 'Refunded',
        customer: 'Orlando Diggs',
        email: 'orlando@example.com',
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
];

const BillingDashboard = () => {
    const [invoices, setInvoices] = useState(initialInvoices);
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'asc',
    });

    const sortBy = key => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        const sortedInvoices = [...invoices].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setInvoices(sortedInvoices);
        setSortConfig({ key, direction });
    };

    const getStatusBadge = status => {
        const statusStyles = {
            Paid: 'text-emerald-500 bg-emerald-100/60',
            Cancelled: 'text-red-500 bg-red-100/60',
            Refunded: 'text-gray-500 bg-gray-100/60',
        };
        const icons = {
            Paid: 'M10 3L4.5 8.5L2 6',
            Cancelled: 'M3 3L9 9M9 3L3 9',
        };

        return (
            <div
                className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${statusStyles[status] || 'bg-gray-100/60 text-gray-500'}`}
            >
                {icons[status] && (
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d={icons[status]}
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
                <h2 className="text-sm font-normal">{status}</h2>
            </div>
        );
    };

    return (
        <div className="l-[max(0%,50%-(theme(maxWidth.lg)/2))] bg-gray-50 py-2 px-2 md:px-24 md:ml-44">
            {/* Plan Details */}
            <div className="flex flex-col md:flex-row py-2 overflow-x-visible bg-white rounded-lg shadow-md mb-4 p-20 md:p-4 pr-4">
                <div className="w-full md:w-2/3 flex-shrink-0 bg-white rounded-md p-2">
                    <div className="text-left">
                        <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
                            Plan Details
                        </h2>
                        <p className="text-sm">
                            Free team plan (Effective from Jul 15, 2024)
                        </p>
                        <p className="text-sm">0 KB / 100 GB bandwidth</p>
                        <p className="text-sm">0 / 300 build minutes</p>
                    </div>
                </div>
            </div>

            {/* Invoices List */}
            <div className="flex flex-col py-2 overflow-x-visible bg-white rounded-lg shadow-md mb-4 p-20 md:p-4 pr-4">
                <div className="px-4 sm:px-0">
                    <h3 className="text-xl font-semibold leading-7 text-gray-900 text-left">
                        Invoices
                    </h3>
                    <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-500 text-left">
                        Itemized statements of service charges
                    </p>
                </div>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b">
                            <th
                                className="py-2 cursor-pointer"
                                onClick={() => sortBy('id')}
                            >
                                Invoice
                            </th>
                            <th
                                className="cursor-pointer"
                                onClick={() => sortBy('date')}
                            >
                                Date
                            </th>
                            <th
                                className="cursor-pointer"
                                onClick={() => sortBy('status')}
                            >
                                Status
                            </th>
                            <th
                                className="cursor-pointer"
                                onClick={() => sortBy('customer')}
                            >
                                Customer
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map(invoice => (
                            <tr key={invoice.id} className="border-b">
                                <td className="py-2">#{invoice.id}</td>
                                <td>{invoice.date}</td>
                                <td>{getStatusBadge(invoice.status)}</td>
                                <td>{invoice.customer}</td>
                                <td>
                                    <a href="#" className="text-blue-500">
                                        Download
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillingDashboard;
