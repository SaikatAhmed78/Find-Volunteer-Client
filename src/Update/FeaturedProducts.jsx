import React from 'react';

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: 'Community Health Program',
            description: 'Join our health initiatives to improve community health standards.',
            image: 'https://img.freepik.com/free-vector/family-visiting-modern-clinic_1262-19777.jpg?uid=R180156133&ga=GA1.1.1354445490.1737896363&semt=ais_hybrid',
            link: 'https://www.unicef.org/health/community-health',
        },
        {
            id: 2,
            title: 'Tree Plantation Campaign',
            description: 'Be a part of our tree plantation to save the environment.',
            image: 'https://img.freepik.com/free-psd/mother-earth-day-cover-template_23-2148131771.jpg?uid=R180156133&ga=GA1.1.1354445490.1737896363&semt=ais_hybrid',
            link: 'https://www.bssnews.net/news/129103',
        },
        {
            id: 3,
            title: 'Disaster Relief Effort',
            description: 'Help us provide relief materials to those affected by disasters.',
            image: 'https://img.freepik.com/free-vector/vintage-charity-background_23-2147558960.jpg?uid=R180156133&ga=GA1.1.1354445490.1737896363&semt=ais_hybrid',
            link: 'https://theret.org/from-emergency-aid-to-long-term-development-ret-internationals-comprehensive-programs/?gad_source=1&gclid=CjwKCAiA5Ka9BhB5EiwA1ZVtvJPkpK8lRTr1-mXCPjieLKpbpjQk2bcAPPcRIB3v8j9p9RPit2nfexoCLMwQAvD_BwE',
        },
        {
            id: 4,
            title: 'Blood Donation Drive',
            description: 'Your small contribution can save many lives. Join our blood drive.',
            image: 'https://img.freepik.com/free-vector/human-blood-donate-white-background_1308-111085.jpg?uid=R180156133&ga=GA1.1.1354445490.1737896363&semt=ais_hybrid',
            link: 'https://bdrcs.org/donate-blood/',
        },
    ];

    return (
        <div className="py-16 mt-10">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold uppercase text-lime-500 mb-3 tracking-wide
                
                ">Featured Products & Services</h2>
                <p className="text-xl text-blue-600 mb-12">Discover the most impactful volunteer opportunities we are offering right now.</p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white shadow-xl rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-cover group-hover:opacity-80 transition duration-300"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                <a
                                    href={product.link}
                                    className="text-white text-lg font-semibold px-6 py-2 bg-blue-600 rounded-full transform scale-110 group-hover:scale-100 transition duration-200"
                                >
                                    Learn More
                                </a>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-blue-600">{product.title}</h3>
                                <p className="text-gray-600 mt-3">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
