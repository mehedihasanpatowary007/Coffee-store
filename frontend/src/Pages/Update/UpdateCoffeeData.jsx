import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UpdateCoffeeData = () => {
  const oldCoffeeData = useLoaderData();
  const navigate = useNavigate()
  const [newCoffeeInfo, setNewCoffeeInfo] = useState(oldCoffeeData);
  const [newImage, setNewImage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    const coffeeInfo = { ...newCoffeeInfo, [name]: value };
    setNewCoffeeInfo(coffeeInfo);
  };

  const convertImageToBase64 = (file) => {
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
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const image = await convertImageToBase64(file);
    setNewImage(image);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...newCoffeeInfo };
    if(newImage){
      payload.image = newImage
      // setNewCoffeeInfo({ ...newCoffeeInfo, image: newImage }); x
    }else{
      payload.image = oldCoffeeData.image;
      // setNewCoffeeInfo({ ...newCoffeeInfo, image: oldCoffeeData.image }); x
    }

    const response = await fetch(
      `http://localhost:5000/admin/all-coffee/update/${oldCoffeeData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();

    if (response.ok) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.error(data.message, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  return (
    <div className="bg-add-coffee-bg bg-center bg-cover">
      <div className="container mx-auto mt-6 mb-10"> 
          <button className="ms-5 mt-5 text-xl" onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>
        <div className="mt-5 py-10 px-20">
          <div className="w-2/3 mx-auto space-y-4">
            <h1 className="text-3xl text-[#374151] font-bold text-center">
              Update Existing Coffee Details
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
                    onChange={handleChange}
                    defaultValue={oldCoffeeData.name}
                    id="name"
                    placeholder="Enter coffee name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="supplier">Supplier</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="supplier"
                    onChange={handleChange}
                    defaultValue={oldCoffeeData.supplier}
                    id="supplier"
                    placeholder="Enter coffee supplier"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category">Category</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="category"
                    onChange={handleChange}
                    defaultValue={oldCoffeeData.category}
                    id="category"
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
                    onChange={handleChange}
                    defaultValue={oldCoffeeData.chef}
                    id="chef"
                    placeholder="Enter coffee chef"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="test">Test</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="test"
                    onChange={handleChange}
                    defaultValue={oldCoffeeData.test}
                    id="test"
                    placeholder="Enter coffee test"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="details">Details</label>
                  <input
                    className="outline-none border-none ps-3 py-2"
                    type="text"
                    name="details"
                    onChange={handleChange}
                    defaultValue={oldCoffeeData.details}
                    id="details"
                    placeholder="Enter coffee details"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="price">Price</label>
              <input
                className="outline-none border-none ps-3 py-2"
                type="text"
                name="price"
                onChange={handleChange}
                defaultValue={oldCoffeeData.price}
                id="price"
                placeholder="Enter coffee price"
              />
            </div>
            <div className="mt-5 space-y-5">
              <div className="flex">
                <div className="flex flex-col gap-2">
                  <label htmlFor="image">Coffee Image</label>
                  <input
                    onChange={handleImage}
                    accept="image/*"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
                {
                  <div className="border shadow-lg p-4 bg-gray-400 shadow-gray-300">
                    <img
                      className="h-28 "
                      src={newImage || oldCoffeeData.image}
                      alt="product_preview_image"
                    />
                  </div>
                }
              </div>
            </div>
            <input
              className="bg-[#D2B48C] w-full border-2 border-[#331A15] py-1 mt-5"
              type="submit"
              value="Update Coffee Details"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateCoffeeData;
