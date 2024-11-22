import { MdDelete, MdModeEditOutline, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const SingleCoffeeInfo = ({ singleCoffee, handleDelete }) => {
  return (
    <div className="bg-[#F5F4F1] flex items-center justify-between gap-2 ps-4 pe-7 rounded jus">
      <img
        className="w-[185px] h-[240px] py-2"
        src={singleCoffee?.image}
        alt="product_image"
      />
      <div>
        <h1 className="text-xl">
          <strong>Name:</strong>
          <span className="text-gray-700">{singleCoffee?.name}</span>
        </h1>
        <p className="text-xl">
          <strong>Chef:</strong>{" "}
          <span className="text-gray-700">{singleCoffee?.chef}</span>
        </p>
        <p className="text-xl">
          <strong>Price:</strong>
          <span className="text-gray-700">{singleCoffee?.price}</span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          to={`/all-coffee/${singleCoffee.id}`}
          className="bg-[#D2B48C] text-white p-2 flex items-center rounded"
        >
          <button>
            <MdRemoveRedEye />
          </button>
        </Link>
        <Link
          to={`/all-coffee/update/${singleCoffee.id}`}
          target="_top"
          className="bg-[#3C393B] text-white p-2 flex items-center rounded"
        >
          <button>
            <MdModeEditOutline />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(singleCoffee.id)}
          className="bg-[#EA4744] text-white p-2 flex items-center rounded"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default SingleCoffeeInfo;
SingleCoffeeInfo.propTypes = {
  singleCoffee: PropTypes.object,
};