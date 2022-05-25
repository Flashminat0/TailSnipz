import React, {useState} from 'react'
import Categorybrandcondition from '../../components/sellnow/categorybrandcondition'
import Priceandswapping from '../../components/sellnow/priceandswapping'
import Titleanddescription from '../../components/sellnow/titleanddescription'
import Uploadphotos from '../../components/sellnow/uploadphotos'
import {motion} from "framer-motion";
import {ArrowUpIcon} from '@heroicons/react/solid'


const people = [
    {name: 'New with tags', username: 'A brand-new, unused item with tags attached or in the original packaging.'},
    {name: 'New with tags', username: 'A brand-new, unused item without tags or original packaging.'},
    {name: 'Very good', username: 'A lightly used item that may have slight imperfections, but still looks great. Include photos and descriptions of any flaws in your listing.'},
    {name: 'Good', username: 'A used item that may show imperfections and signs of wear. Include photos and descriptions of flaws in your listing.'},
    {name: 'Satisfactory', username: 'A frequently used item with imperfections and signs of wear. Include photos and descriptions of flaws in your listing.'},
]

const categoryFirst = [
    "Women", "Men", "Kids", "Home", "Entertainment"
]

const categorySecond = [
    "Clothes", "Shoes", "Bags", "Accessories", "Beauty", "Grooming", "Toys & games", "Baby care", "Strollers", "Chairs", "School supplies", "Textile", "Home accessories", "Video games & consoles", "Games & puzzles", "Music & video", "Books"
]

const categoryThird = [
    "Coats & jackets", "Jumpers & sweaters", "Suits & blazers", "Dresses", "Skirts", "Jeans", "Pants & leggings", "Shorts & cropped pants", "Swimwear", "Boots", "Heels", "Flats", "Ankle boots", "Flip-flops", "Handbags", "Backpacks", "Tote bags", "Clutches", "Purses & wallets", "Makeup bags", "Jewelry", "Watches", "Belts", "Sunglasses", "Gloves", "Hats & caps", "Makeup", "Perfume", "Face care", "Pants", "Shorts", "T-shits", "Sneakers", "Sport shoes"
]

function home() {

    const [selected, setSelected  ] = useState(people[3]);
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState();
    const [currency, setCurrency] = useState("USD");
    const [swapping, setSwapping] = useState(false)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categoryOne, setCategoryOne] = useState(categoryFirst[0]);
    const [categoryTwo, setCategoryTwo] = useState(categorySecond[1]);
    const [categoryThree, setCategoryThree] = useState(categoryThird[10]);


    const onSubmitClick = () => {

        console.log(selected)
        console.log(brand)
        console.log(categoryOne);
        console.log(categoryTwo);
        console.log(categoryThree);

        console.log(price)
        console.log(currency)
        console.log(swapping)

        console.log(title)
        console.log(description)
    }

  return (
    <div className={`w-screen grid place-content-center font-susty p-4`}>
        <>
            <span className='font-semibold text-3xl py-4'>Sell an item</span>
            <div className='max-w-4xl pb-4'>
                <Uploadphotos />
            </div>
            <div className='max-w-4xl pb-4'>
                <Titleanddescription title = {title} setTitle = {setTitle} description = {description} setDescription = {setDescription} />
            </div>
            <div className='max-w-4xl pb-4'>
                <Categorybrandcondition categoryOne= {categoryOne} setCategoryOne= {setCategoryOne} categoryTwo = {categoryTwo} setCategoryTwo = {setCategoryTwo} categoryThree = {categoryThree} setCategoryThree= {setCategoryThree} selected = {selected} setSelected = {setSelected} brand = {brand} setBrand = {setBrand}/>
            </div>
            <div className='max-w-4xl pb-4'>
                <Priceandswapping price = {price} setPrice = {setPrice} setCurrency = {setCurrency} setSwapping = {setSwapping} currency = {currency} swapping = {swapping} />
            </div>
        
        
            <div className='grid place-content-center'>
                <motion.button
                    onClick={() => onSubmitClick()}
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                    Submit
                </motion.button>
            </div>
        </>
    </div>


  )
}

export default home