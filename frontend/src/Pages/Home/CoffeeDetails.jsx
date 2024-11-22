import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const CoffeeDetails = () => {
    const {id} = useParams()
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
            <div className="bg-[#F5F4F1] flex items-center justify-between rounded jus">
              <img
                className="h-96"
                src={singleCoffeeInfo?.image}
                alt="product_image"
              />
              <div className="space-y-5">
                <h1 className="text-2xl font-bold text-[#331A15]">Niceties</h1>
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
                  <strong>Price:</strong>
                  <span className="text-gray-700">{singleCoffeeInfo?.price}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeDetails;