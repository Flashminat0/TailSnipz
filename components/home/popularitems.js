import axios from 'axios'
import React, {useState, useEffect} from 'react'
// import PopularItemLayout from '../../layouts/ItemRows/PopularItemLayout'
// import PopularItemCard from '../../Cards/Item/PopularItemCard'

import PopularItemLayout from '../layouts/itemrows/popularitemlayout'
import PopularItemCard from './popularitemcard'
import TermsAndConditions from './TermsAndConditions'


const PopularItems = () => {
    const [items, setItems] = useState(itemsStaticData)
    const [maxItems, setMaxItems] = useState()


    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
          width,
          height,
        };
      }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
    
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    useEffect(() => {
        if(windowDimensions.width < 460){
            console.log("Mobile screen")
            setMaxItems(10)
        }
        else if(windowDimensions.width >= 460 && windowDimensions.width < 768){
            console.log("Small screen")
            setMaxItems(4)
        }
        else if(windowDimensions.width >= 768 && windowDimensions.width < 1024 ){
            console.log("Medium screen")
            setMaxItems(4)
        }
        else if(windowDimensions.width >= 1024){
            console.log("Large screen")
            setMaxItems(4)
        }
    }, [windowDimensions])

    useEffect(() => {
        async function getProduct() {
            const result = await axios.get('http://localhost:8000/api/product/fetch-products', {
                params: {
                    productLimit: 10,
                },
            })

            console.log(result)
        }
        getProduct();
    
    }, [])


    return (
        <div>
            <PopularItemLayout>
                <>
                {/* {items.map((item) => (
                    <div key={item.id}>
                        <PopularItemCard
                            src={item.src}
                            alt={item.alt}
                            price={item.price}
                            size={item.size}
                            brand={item.brand}
                        />
                    </div>
                ))} */}

                {items.slice(0, maxItems).map((item) => (
                    <div key={item.id}>
                        <PopularItemCard
                            src={item.src}
                            alt={item.alt}
                            price={item.price}
                            size={item.size}
                            brand={item.brand}
                        />
                    </div>
                ))}
                </>
            </PopularItemLayout>

            <TermsAndConditions />
        </div>

    )
}

export default PopularItems

const itemsStaticData = [
    {
        id: 1,
        username: 'NickyMontana',
        src: 'https://cdn.shopify.com/s/files/1/0059/5879/5337/products/handknitted-butterfly-jacket-by-hanne-falkenberg-design-andet-hanne-falkenberg-kit-6-m-992013_620x.jpg?v=1631370781',
        alt: 'frock picture',
        price: '5.00',
        size: '12/L',
        brand: 'Shein',
    },
    {
        id: 121,
        username: 'NickyMontana',
        src: 'https://cdn.shopify.com/s/files/1/0059/5879/5337/products/handknitted-butterfly-jacket-by-hanne-falkenberg-design-andet-hanne-falkenberg-kit-6-m-992013_620x.jpg?v=1631370781',
        alt: 'frock picture',
        price: '5.00',
        size: '12/L',
        brand: 'Shein',
    },
    {
        id: 2,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 3,
        username: 'LeonZucchini',
        src: 'https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/L',
        brand: 'Shein',
    },
    {
        id: 4,
        username: 'IrynaSuprun',
        src: 'https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '12/L',
        brand: 'Shein',
    },
    {
        id: 14,
        username: 'IrynaSuprun',
        src: 'https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '12/L',
        brand: 'Shein',
    },
    {
        id: 15,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 16,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 17,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 18,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 19,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 20,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 21,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 22,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 23,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 24,
        username: 'Pedro123',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
]
