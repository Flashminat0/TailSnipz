import React, {useState} from 'react';

const brandsStaticData = [
    { id: 1, name: "Vans"},
    { id: 2, name: "Ray-Ban"},
    { id: 3, name: "Levi's"},
    { id: 4, name: "Brandy Melville"},
    { id: 5, name: "adidas"},
    { id: 6, name: "Shein"},
    { id: 7, name: "Ralph Lauren"},
    { id: 8, name: "Gymshark"},
    { id: 9, name: "Victoria's Secret"},
    { id: 10, name: "Zara"},
    { id: 11, name: "Converse"},
    { id: 12, name: "Under Armour"},
    { id: 13, name: "Nike"},
    { id: 14, name: "Urban Outfitters"},
    { id: 15, name: "American Apparel"},
    { id: 16, name: "Vintage"},
    { id: 17, name: "The North Face"},
    { id: 18, name: "Laura Ashley"},
];

const Shopbybrand = () => {
    const [brands, setBrands] = useState(brandsStaticData);

    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"text-2xl px-3 lg:px-16 py-6"}>Shop by brand</div>
                <div className={"flex flex-wrap gap-2 px-3 lg:px-16"}>
                    {brands.map((brand)=>(
                        <div key={brand.id} className={"px-3 py-1.5 text-sm bg-white hover:bg-gray-50 border border-gray-200 shadow-inner-sm rounded-sm hover:cursor-pointer"}>{brand.name}</div>
                    ))}
                </div>
            </>
        </div>
    );
};

export default Shopbybrand;