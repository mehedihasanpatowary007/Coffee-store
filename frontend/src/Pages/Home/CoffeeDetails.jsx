import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const CoffeeDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id)
    const [singleCoffeeInfo, setSingleCoffeeInfo] = useState({})
    const loadSingleCoffeeInfo = async () => {
        const response = await fetch(`http://localhost:5000/all-coffee/${id}`);
        const data = await response.json()
        setSingleCoffeeInfo(data)
    }

    useEffect(()=>{
        loadSingleCoffeeInfo()
    },[])
    return (
      <div className="bg-add-coffee-bg bg-center bg-cover">
        <div className="container mx-auto mt-5 mb-10">
          <button className=" text-xl" onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>
          <div className="bg-[#F4F3F0] mt-5 py-10 px-20">
            <h1 className="text-3xl font-extrabold text-[#331A15] mb-4 text-shadow">
              Espresso Emporium
            </h1>
            <div className="bg-[#F5F4F1] flex items-center justify-between rounded">
              <img
                className="h-96"
                src={singleCoffeeInfo?.image}
                alt="product_image"
              />
              <div className="space-y-5 w-[55%]">
                <h1 className="text-xl">
                  <strong>Name:</strong>
                  <span className="text-gray-700">
                    {singleCoffeeInfo?.name}
                  </span>
                </h1>
                <p className="text-xl">
                  <strong>Chef:</strong>{" "}
                  <span className="text-gray-700">
                    {singleCoffeeInfo?.chef}
                  </span>
                </p>
                <p className="text-xl">
                  <strong>Supplier:</strong>{" "}
                  <span className="text-gray-700">
                    {singleCoffeeInfo?.supplier}
                  </span>
                </p>
                <p className="text-xl">
                  <strong>Test:</strong>{" "}
                  <span className="text-gray-700">
                    {singleCoffeeInfo?.test}
                  </span>
                </p>
                <p className="text-xl">
                  <strong>Category:</strong>{" "}
                  <span className="text-gray-700">
                    {singleCoffeeInfo?.category}
                  </span>
                </p>
                <p className="text-xl">
                  <strong>Details:</strong>{" "}
                  <span className="text-gray-700">
                    {singleCoffeeInfo?.details}
                  </span>
                </p>
                <p className="text-xl">
                  <strong>Price:</strong>
                  <span className="text-gray-700">
                    {singleCoffeeInfo?.price}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeDetails;