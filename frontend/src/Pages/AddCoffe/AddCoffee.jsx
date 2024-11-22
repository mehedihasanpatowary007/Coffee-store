import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const AddCoffee = () => {
  const [coffeeInfo, setCoffeeInfo] = useState({
    name: "",
    supplier: "",
    category: "",
    chef: "",
    test: "",
    details: "",
    price:"",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newCoffeeInfo = {...coffeeInfo, id: uuidv4(), [name] : value}
    setCoffeeInfo(newCoffeeInfo)
  };

  const convertImageToBase64 = (file) =>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        reject(new Error("No file provided"));
      }
    });
  }
 const handleImage = async (e) => {
   const file = e.target.files[0];
   const image = await convertImageToBase64(file);
   setCoffeeInfo({ ...coffeeInfo, image: image });
 };

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const response = await fetch("http://localhost:5000/all-coffee",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coffeeInfo)
    });
    const data = await response.json()
    if(response.ok){
        setCoffeeInfo({
          name: "",
          supplier: "",
          category: "",
          chef: "",
          test: "",
          details: "",
          price:"",
          image: "",
        });
        toast.success(data.message,{
            position:"top-center",
            autoClose:2000
        })
    }else{
        toast.error(data.message,{
            position:"top-center",
            autoClose:2000
        })
    }
  }
  return (
    <div className="bg-add-coffee-bg bg-center bg-cover">
      <div className="container mx-auto mt-6 mb-10">
        <div>
          <Link
            to={"/"}
            className="text-[#374151] text-xl flex items-center gap-3"
          >
            <span>
              <FaArrowLeft />
            </span>
            <span>Back to home</span>
          </Link>
        </div>
        <div className="bg-[#F4F3F0] mt-10 py-10 px-20">
          <div className="w-2/3 mx-auto space-y-4">
            <h1 className="text-3xl text-[#374151] font-bold text-center">
              Add New Coffee
            </h1>
            <p className="text-base text-gray-700 text-center">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="grid grid-cols-2 gap-10">
              <div className=" space-y-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="name"
                    id="name"
                    value={coffeeInfo.name}
                    onChange={handleChange}
                    placeholder="Enter coffee name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="supplier">Supplier</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="supplier"
                    id="supplier"
                    value={coffeeInfo.supplier}
                    onChange={handleChange}
                    placeholder="Enter coffee supplier"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category">Category</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="category"
                    id="category"
                    value={coffeeInfo.category}
                    onChange={handleChange}
                    placeholder="Enter coffee category"
                  />
                </div>
              </div>
              <div className=" space-y-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="chef">Chef</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="chef"
                    id="chef"
                    value={coffeeInfo.chef}
                    onChange={handleChange}
                    placeholder="Enter coffee chef"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="test">Test</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="test"
                    id="test"
                    value={coffeeInfo.test}
                    onChange={handleChange}
                    placeholder="Enter coffee test"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="details">Details</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="details"
                    id="details"
                    value={coffeeInfo.details}
                    onChange={handleChange}
                    placeholder="Enter coffee details"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <input
                className="outline-none border-none ps-3 py-2 w-full"
                type="text"
                name="price"
                id="price"
                value={coffeeInfo.price}
                onChange={handleChange}
                placeholder="Enter coffee details"
              />
            </div>
            <div className="mt-5 space-y-5">
              <div className="flex">
                <div className="flex flex-col gap-2">
                  <label htmlFor="coffee-image">Coffee Image</label>
                  <input
                    onChange={handleImage}
                    accept="image/*"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
                {coffeeInfo.image && (
                  <div className="border shadow-lg p-4 bg-gray-400 shadow-gray-300">
                    <img
                      className="h-28 "
                      src={coffeeInfo.image}
                      alt="product_preview_image"
                    />
                  </div>
                )}
              </div>
              <input
                className="bg-[#D2B48C] w-full border-2 border-[#331A15] py-1 cursor-pointer"
                type="submit"
                value="Add Coffee"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddCoffee;
