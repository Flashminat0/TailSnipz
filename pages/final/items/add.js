import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import UploadPhotos from "../../components/SellNow/UploadPhotos";
// import TitleAndDescription from "../../components/SellNow/TitleAndDescription";
// import CategoryBrandCondition from "../../components/SellNow/CategoryBrandCondition";
// import PriceAndSwapping from "../../components/SellNow/PriceAndSwapping";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import { firebaseApp } from "../../../services/firebase"; //change this path
import axios from "axios";
import { useRouter } from "next/router";
import { useLocalStorage } from "@mantine/hooks";

// Remove these **** from
import UploadPhotos from "../../../components/sellnow/uploadphotos";
import TitleAndDescription from "../../../components/sellnow/titleanddescription";
import CategoryBrandCondition from "../../../components/sellnow/categorybrandcondition";
import PriceAndSwapping from "../../../components/sellnow/priceandswapping";
// Remove these to ****

const conditions = [
  {
    name: "New with tags",
    username: "A brand-new, unused item without tags or original packaging.",
  },
  {
    name: "Very good",
    username:
      "A lightly used item that may have slight imperfections, but still looks great. Include photos and descriptions of any flaws in your listing.",
  },
  {
    name: "Good",
    username:
      "A used item that may show imperfections and signs of wear. Include photos and descriptions of flaws in your listing.",
  },
  {
    name: "Satisfactory",
    username:
      "A frequently used item with imperfections and signs of wear. Include photos and descriptions of flaws in your listing.",
  },
];
const categoryFirst = ["Women", "Men", "Kids", "Home", "Entertainment"];
const categorySecond = [
  "Clothes",
  "Shoes",
  "Bags",
  "Accessories",
  "Beauty",
  "Grooming",
  "Toys & games",
  "Baby care",
  "Strollers",
  "Chairs",
  "School supplies",
  "Textile",
  "Home accessories",
  "Video games & consoles",
  "Games & puzzles",
  "Music & video",
  "Books",
];
const categoryThird = [
  "Coats & jackets",
  "Jumpers & sweaters",
  "Suits & blazers",
  "Dresses",
  "Skirts",
  "Jeans",
  "Pants & leggings",
  "Shorts & cropped pants",
  "Swimwear",
  "Boots",
  "Heels",
  "Flats",
  "Ankle boots",
  "Flip-flops",
  "Handbags",
  "Backpacks",
  "Tote bags",
  "Clutches",
  "Purses & wallets",
  "Makeup bags",
  "Jewelry",
  "Watches",
  "Belts",
  "Sunglasses",
  "Gloves",
  "Hats & caps",
  "Makeup",
  "Perfume",
  "Face care",
  "Pants",
  "Shorts",
  "T-shits",
  "Sneakers",
  "Sport shoes",
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL", "One size"];

const AddProduct = () => {
  const router = useRouter();

  const [sustyAuth, setSustyAuth] = useLocalStorage({
    key: "susty",
    defaultValue: {},
  });

  const [condition, setCondition] = useState(conditions[0]);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [swapping, setSwapping] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryOne, setCategoryOne] = useState(categoryFirst[0]);
  const [categoryTwo, setCategoryTwo] = useState(categorySecond[0]);
  const [categoryThree, setCategoryThree] = useState(categoryThird[0]);
  const [size, setSize] = useState(sizes[0]);
  const [imageList, setImageList] = useState([]);

  const [uploadedImageList, setUploadedImageList] = useState([]);
  const [uploadedFileCount, setUploadedFileCount] = useState(0);
  const [imagesObjList, setImagesObjList] = useState([]); //added one
  const [uploadedImages, setUploadedImages] = useState([]); //added one
  const [userId, setUserId] = useState("62c53a59dd41ef13b15366a8"); //added state

  const toastId = React.useRef(null);
  console.log(toastId);

  const onSubmitClick = () => {
    toastId.current = toast.loading("Uploading...");
    const storage = getStorage(firebaseApp);

    // **** TODO start
    if (imagesObjList.length > 0) {
      async function uploadImage() {
        await imagesObjList.map(async (itemO, idx) => {
          const imageRef = ref(
            storage,
            `images/${title}/${Date.now()}-${itemO.item.name}`
          );
          await uploadBytes(imageRef, imagesObjList[idx].item)
            .then((response) => {
              getDownloadURL(response.ref)
                .then((url) => {
                  setUploadedImages((prev) => [
                    ...prev,
                    { url: url, name: itemO.item.name },
                  ]);
                })
                .catch((error) => {
                  toast.error("Image upload Failed!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            })
            .then(() => {
              setUploadedFileCount((prev) => {
                return prev + 1;
              });
            });
        });
      }
      uploadImage();
    } else {
      console.log("Please input images...");
    }
    // TODO end ****
  };

  const addProductHandler = async () => {
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      categoryOne.trim() === "" ||
      categoryTwo.trim() === "" ||
      categoryThree.trim() === "" ||
      brand.trim() === "" ||
      size.trim() === "" ||
      condition.name.trim() === "" ||
      price.trim() === "" ||
      currency.trim() === "" ||
      imagesObjList.length === 0
    ) {
      console.log("Please fill all the fields!");
      toast.error("Please fill all the fields!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      toast.dismiss(toastId.current);
      return;
    } else {
      onSubmitClick();
    }
  };

  // TODO start *****
  useEffect(() => {
    if (
      imagesObjList.length == uploadedImages.length &&
      imagesObjList.length > 0
    ) {
      console.log("use effect");

      async function callBackend() {
        await axios
          .post("http://localhost:8000/api/product/add", {
            userId: userId, // userId added to test
            title,
            description,
            mainCategory: categoryOne,
            subCategory1: categoryTwo,
            subCategory2: categoryThree,
            brand,
            size,
            condition: condition.name,
            price,
            currency,
            swapping,
            images: uploadedImages,
          })
          .then(async (res) => {
            toast.dismiss(toastId.current);
            // toast.success('Product added successfully!', {
            //     delay: 1000,
            //     pauseOnHover: false,
            //     pauseOnFocusLoss: false,
            // })
            await router.push("/");
          })
          .catch((error) => {
            toast.dismiss(toastId.current);
            toast.error("Product adding failed!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      }
      callBackend();
    }
  }, [uploadedImages]);
  // TODO end *****

  return (
    <div
      className={`w-screen grid place-content-center font-susty p-4 w-[98vw]`}
    >
      <>
        <span className="font-semibold text-3xl py-4">Sell an item</span>
        <div className="max-w-4xl pb-4">
          <UploadPhotos
            imageList={imageList}
            setImageList={setImageList}
            imagesObjList={imagesObjList}
            setImagesObjList={setImagesObjList}
          />
        </div>
        <div className="max-w-4xl pb-4">
          <TitleAndDescription
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
          />
        </div>
        <div className="max-w-4xl pb-4">
          <CategoryBrandCondition
            categoryOne={categoryOne}
            setCategoryOne={setCategoryOne}
            categoryTwo={categoryTwo}
            setCategoryTwo={setCategoryTwo}
            categoryThree={categoryThree}
            setCategoryThree={setCategoryThree}
            selected={condition}
            setSelected={setCondition}
            brand={brand}
            setBrand={setBrand}
            size={size}
            setSize={setSize}
          />
        </div>
        <div className="max-w-4xl pb-4">
          <PriceAndSwapping
            price={price}
            setPrice={setPrice}
            setCurrency={setCurrency}
            setSwapping={setSwapping}
            currency={currency}
            swapping={swapping}
          />
        </div>

        <div className="grid place-content-center">
          <motion.button
            onClick={() => addProductHandler()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
          >
            Submit
          </motion.button>
        </div>
      </>
    </div>
  );
};

export default AddProduct;
