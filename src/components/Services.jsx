import React from 'react';

const Services = () => {
    const services = [
        { id: 1, title: 'Service 1', description: 'Description of Service 1' },
        { id: 2, title: 'Service 2', description: 'Description of Service 2' },
        { id: 3, title: 'Service 3', description: 'Description of Service 3' },
        // Add more services as needed
    ];

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Services</h1>
            <div className="grid grid-cols-3 gap-4">
                {services.map(service => (
                    <div key={service.id} className="p-4 border border-gray-300 rounded">
                        <h2 className="text-lg font-bold mb-2">{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;