const categoryObj = [
    {
        id: "463e989a-c4f2-4616-85c5-0cb610c5fff0",
        name: "Women",
        subCategory: [
            {
                id: "0e0712c5-0b5a-4d4e-acf5-3d7faf2caa2a",
                name: "Clothes",
                icon: "ClothesIcon",
                sections: [
                    {
                        id: "e5556122-66cd-4177-9214-5b42b33c60cf",
                        name: "Jumpers and Sweaters",
                        href: "Women/Clothes/Jumpers and Sweaters".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "ce861278-0beb-4170-be35-ab740d2b06f6",
                        name: "Dresses",
                        href: "Women/Clothes/Dresses".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "a0536f05-795c-46ca-82d6-778676cdd6fb",
                        name: "Tops & T-shirts",
                        href: "Women/Clothes/Tops & T-shirts".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "64d6f083-4be4-40d0-a6d8-efc3d0213f66",
                        name: "Pants & leggings",
                        href: "Women/Clothes/Pants & leggings".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "507aa5a8-aff9-4230-8ee3-6488ff07f0c3",
                        name: "Jumpsuits & rompers",
                        href: "Women/Clothes/Jumpsuits & rompers".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "a0d1635d-5121-4553-ba9a-56d4755f09cf",
                        name: "Lingerie & nightwear",
                        href: "Women/Clothes/Lingerie & nightwear".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "55d2c126-79fa-4dc3-b025-c8452801bc08",
                        name: "Activewear",
                        href: "Women/Clothes/Activewear".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "1bf587f1-3306-4f0c-a2f6-4d9c9429f337",
                        name: "Other clothing",
                        href: "Women/Clothes/Other clothing".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "4f8b8fb7-761e-4b02-add2-99c163288a3d",
                        name: "Coats & jackets",
                        href: "Women/Clothes/Coats & jackets".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "d1ec5c94-3407-436d-87a7-4872a73b50c8",
                        name: "Suits & blazers",
                        href: "Women/Clothes/Suits & blazers".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "25673599-b218-4c62-b9f8-372939922701",
                        name: "Skirts",
                        href: "Women/Clothes/Skirts".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "73b6e18a-1a34-4a11-9e9b-75c7fe87c971",
                        name: "Jeans",
                        href: "Women/Clothes/Jeans".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "8db58871-e32a-4e6c-ac61-c998f4fcca1b",
                        name: "Shorts & cropped pants",
                        href: "Women/Clothes/Shorts & cropped pants".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "5c2f06a8-0665-4796-94d6-2293cfd6aeaf",
                        name: "Swimwear",
                        href: "Women/Clothes/Swimwear".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "eb2dcbf2-1233-470b-bf41-fc3b3c43d0f4",
                        name: "Maternity clothes",
                        href: "Women/Clothes/Maternity clothes".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "3126db52-aba6-4133-8d78-9ae0f8f4ac07",
                        name: "Costumes & special outfits",
                        href: "Women/Clothes/Costumes & special outfits".split(' ').join('-').trim().toLowerCase()
                    },
                ]
            },
            {
                id: "1a386489-d2bd-4ffb-bfbc-e590a91815e3",
                name: "Shoes",
                icon: "ShoesIcon",
                sections: [
                    {
                        id: "5bc9c9a6-2f90-4f66-86ac-605c11a07c52",
                        name: "Heels",
                        href: "Women/Shoes/Heels".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "6c918a4f-8d94-40ae-8271-e87a2765efa6",
                        name: "Oxfords & loafers",
                        href: "Women/Shoes/Oxfords & loafers".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "3b84d467-30c6-41b3-81a1-cdbbb38a76be",
                        name: "Sandals",
                        href: "Women/Shoes/Sandals".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "41130b54-9ef5-4885-a069-fc2bcb2c4757",
                        name: "Flip-flops",
                        href: "Women/Shoes/Flip-flops".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "b7bedde6-bf35-4410-a009-664aa7c8c876",
                        name: "Other shoes",
                        href: "Women/Shoes/Other shoes".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "ac52ea9f-f1aa-4320-a023-4668f4940100",
                        name: "Boots",
                        href: "Women/Shoes/Boots".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "c4ec1000-8a55-4285-af8e-5224c09ee9ae",
                        name: "Flats",
                        href: "Women/Shoes/Flats".split(' ').join('-').trim().toLowerCase()
                    },                    
                    {
                        id: "3a9bb184-9c02-4ba3-921d-5d565094547d",
                        name: "Ankle boots",
                        href: "Women/Shoes/Ankle boots".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "7884461c-3593-4680-bf12-0eae6ef782c4",
                        name: "Sports shoes",
                        href: "Women/Shoes/Sports shoes".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "5d444800-f3f7-4ebb-b686-bfabc4573bdb",
                        name: "Slippers",
                        href: "Women/Shoes/Slippers".split(' ').join('-').trim().toLowerCase()
                    },
                ]
            },
            {
                id: "",
                name: "Bags",
                icon: "BagsIcon",
                sections: [
                    {
                        id: "",
                        name: "Shoulder bags",
                        href: "Women/Bags/Shoulder bags".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Tote bags",
                        href: "Women/Bags/Tote bags".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Purses & wallets",
                        href: "Women/Bags/Purses & wallets".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Satchels",
                        href: "Women/Bags/Satchels".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Patterned & embroidered bags",
                        href: "Women/Bags/Patterned & embroidered bags".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Luggage & suitcases",
                        href: "Women/Bags/Luggage & suitcases".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Handbags",
                        href: "Women/Bags/Handbags".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Backpacks",
                        href: "Women/Bags/Backpacks".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Clutches",
                        href: "Women/Bags/Clutches".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Makeup bags",
                        href: "Women/Bags/Makeup bags".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Bum bags",
                        href: "Women/Bags/Bum bags".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Carryalls, Holdalls",
                        href: "Women/Bags/Carryalls, Holdalls".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Other bags",
                        href: "Women/Bags/Other bags".split(' ').join('-').trim().toLowerCase()
                    }
                ]
            },
            {
                id: "",
                name: "Accessories",
                icon: "AccessoriesIcon",
                sections: [
                    {
                        id: "",
                        name: "Watches",
                        href: "Women/Accessories/Watches".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Sunglasses",
                        href: "Women/Accessories/Sunglasses".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Gloves",
                        href: "Women/Accessories/Gloves".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Hair accessories",
                        href: "Women/Accessories/Hair accessories".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Umbrellas",
                        href: "Women/Accessories/Umbrellas".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Other accessories",
                        href: "Women/Accessories/Other accessories".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Jewelry",
                        href: "Women/Accessories/Jewelry".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Belts",
                        href: "Women/Accessories/Belts".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Scarves & shawls",
                        href: "Women/Accessories/Scarves & shawls".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Hats & caps",
                        href: "Women/Accessories/Hats & caps".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Tech accessories",
                        href: "Women/Accessories/Tech accessories".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Keyrings",
                        href: "Women/Accessories/Keyrings".split(' ').join('-').trim().toLowerCase()
                    }
                ]
            },
            {
                id: "",
                name: "Beauty",
                icon: "BeautyIcon",
                sections: [
                    {
                        id: "",
                        name: "Perfume",
                        href: "Women/Beauty/Perfume".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Beauty tools",
                        href: "Women/Beauty/Beauty tools".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Nail Care",
                        href: "Women/Beauty/Nail Care".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Hair care",
                        href: "Women/Beauty/Hair care".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Makeup",
                        href: "Women/Beauty/Makeup".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Face care",
                        href: "Women/Beauty/Face care".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Hand Care",
                        href: "Women/Beauty/Hand Care".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Body care",
                        href: "Women/Beauty/Body care".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Other beauty items",
                        href: "Women/Beauty/Other beauty items".split(' ').join('-').trim().toLowerCase()
                    },
                ]
            },
        ]
    },
    {
        id: "",
        name: "Men",
        subCategory: [
            {
                id: "",
                name: "Clothes",
                icon: "ClothesIcon",
                sections: [
                    {
                        id: "",
                        name: "Coats & jackets",
                        href: "Men/Clothes/Coats & jackets".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Suits & blazers",
                        href: "Men/Clothes/Suits & blazers".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Pants",
                        href: "Men/Clothes/Pants".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Socks & underwear",
                        href: "Men/Clothes/Socks & underwear".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Activewear",
                        href: "Men/Clothes/Activewear".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Other men's clothing",
                        href: "Men/Clothes/Other men's clothing".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Jeans",
                        href: "Men/Clothes/Jeans".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Tops & T-shirts",
                        href: "Men/Clothes/Tops & T-shirts".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Jumpers & sweaters",
                        href: "Men/Clothes/Jumpers & sweaters".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Shorts",
                        href: "Men/Clothes/Shorts".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Swimwear",
                        href: "Men/Clothes/Swimwear".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Costumes & special outfits",
                        href: "Men/Clothes/Costumes & special outfits".split(' ').join('-').trim().toLowerCase()
                    }
                ]
            },
            {
                id: "",
                name: "Shoes",
                icon: "ShoesIcon",
                sections: [
                    {
                        id: "",
                        name: "Slippers & flip-flops",
                        href: "Men/Shoes/Slippers & flip-flops".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Sneakers",
                        href: "Men/Shoes/Sneakers".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Sandals",
                        href: "Men/Shoes/Sandals".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Other shoes",
                        href: "Men/Shoes/Other shoes".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Oxfords & loafers",
                        href: "Men/Shoes/Oxfords & loafers".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Formal shoes",
                        href: "Men/Shoes/Formal shoes".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Sports shoes",
                        href: "Men/Shoes/Sports shoes".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Boots",
                        href: "Men/Shoes/Boots".split(' ').join('-').trim().toLowerCase()
                    }
                ]
            },
            {
                id: "",
                name: "Accessories",
                icon: "AccessoriesIcon",
                sections: [
                    {
                        id: "",
                        name: "Bags & backpacks",
                        href: "Men/Accessories/Bags & backpacks".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Belts",
                        href: "Men/Accessories/Belts".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Sunglasses",
                        href: "Men/Accessories/Sunglasses".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Scarves & shawls",
                        href: "Men/Accessories/".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Other",
                        href: "Men/Accessories/Other".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Ties & pocket squares",
                        href: "Men/Accessories/Ties & pocket squares".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Jewelry",
                        href: "Men/Accessories/Jewelry".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Watches",
                        href: "Men/Accessories/Watches".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Hats & caps",
                        href: "Men/Accessories/Hats & caps".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Gloves",
                        href: "Men/Accessories/Gloves".split(' ').join('-').trim().toLowerCase()
                    },
                ]
            },
            {
                id: "",
                name: "Grooming",
                icon: "GroomingIcon",
                sections: [
                    {
                        id: "",
                        name: "Tools & accessories",
                        href: "Men/Grooming/Tools & accessories".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Body care",
                        href: "Men/Grooming/Body care".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Aftershave & cologne",
                        href: "Men/Grooming/Aftershave & cologne".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Grooming kits",
                        href: "Men/Grooming/Grooming kits".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Face care",
                        href: "Men/Grooming/Face care".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Hair care",
                        href: "Men/Grooming/Hair care".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "Hand & nail care",
                        href: "Men/Grooming/Hand & nail care".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "",
                        href: "Men/Grooming/".split(' ').join('-').trim().toLowerCase()
                    },
                    {
                        id: "",
                        name: "",
                        href: "Men/Grooming/".split(' ').join('-').trim().toLowerCase()
                    }
                ]
            },
        ]
    },








    {
        id: "",
        name: "Kids",
        subCategory: [
            {
                id: "",
                name: "Clothes",
                icon: "ClothesIcon",
                sections: [
                    {
                        id: "",
                        name: "",
                        href: "Kids/Clothes/".split(' ').join('-').trim().toLowerCase()
                    },
                ]
            },
        ]
    },











    {
        id: "",
        name: "Home",
        subCategory: [
            {
                id: "",
                name: "Clothes",
                icon: "ClothesIcon",
                sections: [
                    {
                        id: "",
                        name: "",
                        href: "Home/Clothes/".split(' ').join('-').trim().toLowerCase()
                    },
                ]
            },
        ]
    },

















    
    {
        id: "",
        name: "Home",
        subCategory: [
            {
                id: "",
                name: "Clothes",
                icon: "ClothesIcon",
                sections: [
                    {
                        id: "",
                        name: "",
                        href: "Home/Clothes/".split(' ').join('-').trim().toLowerCase()
                    },
                ]
            },
        ]
    },


















    {
        id: "",
        name: "Entertainment",
        subCategory: [
            {
                id: "",
                name: "Clothes",
                icon: "ClothesIcon",
                sections: [
                    {
                        id: "",
                        name: "",
                        href: "Entertainment/Clothes/".split(' ').join('-').trim().toLowerCase()
                    },
                ]
            },
        ]
    }






















]


console.log("Women/Clothes/Jumpers and Sweaters".split(' ').join('-').trim().toLowerCase());