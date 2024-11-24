import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SingleCoffeeInfo = ({ product }) => {
  console.log(product)

  return (
    <div className="relative bg-[#F5F4F1] flex items-center justify-between gap-2 ps-4 pe-7 rounded group">
      <img
        className="w-[185px] h-[240px] py-2"
        src={product?.image}
        alt="product_image"
      />
      <div className="space-y-2">
        <h1 className="text-xl">
          <strong>Name:</strong>
          <span className="text-gray-700">{product?.name}</span>
        </h1>
        <p className="text-xl">
          <strong>Chef:</strong>{" "}
          <span className="text-gray-700">{product?.chef}</span>
        </p>
        <p className="text-xl">
          <strong>Test:</strong>{" "}
          <span className="text-gray-700">{product?.test}</span>
        </p>
        <p className="text-xl">
          <strong>Category:</strong>{" "}
          <span className="text-gray-700">{product?.category}</span>
        </p>
        <p className="text-xl">
          <strong>Price:</strong>
          <span className="text-gray-700">{product?.price}</span>
        </p>
      </div>
      <div className="absolute inset-0 bg-black duration-300 bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center">
        <Link to={`/all-coffee/${product.id}`} target='_top' className="bg-[#B17457] text-white font-black text-xl px-4 py-2 rounded-md">View Details</Link>
      </div>
    </div>
  );
};

export default SingleCoffeeInfo;
SingleCoffeeInfo.propTypes = {
  product: PropTypes.object,
};