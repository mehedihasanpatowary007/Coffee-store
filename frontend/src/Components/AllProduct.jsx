import { useContext, useEffect } from "react";
import { MdDelete, MdModeEditOutline, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AdminAuthContext } from "../Context/AdminAuthContext";

const AllProduct = () => {
  const { products, setProducts , loading, setLoading } = useContext(AdminAuthContext);
  const loadProducts = async () => {
    const response = await fetch("http://localhost:5000/all-coffee");
    const data = await response.json();
    setProducts(data.body);
    setLoading(false)
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "bg-green-500",
        cancelButton: "bg-red-500",
      },
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const response = await fetch(
            `http://localhost:5000/admin/all-coffee/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();

          if (response.ok) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: `${data.message}`,
              icon: "success",
            });
            loadProducts();
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };


  return (
    <div className="p-6 flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Details</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div className="min-h-screen flex justify-center items-center">
                <h1 className=" text-5xl">Loading.....</h1>
              </div>
            ) : (
              products.map((product, index) => (
                <tr key={product.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.details}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex gap-3">
                      <Link
                        to={`/all-coffee/${product.id}`}
                        className="bg-[#D2B48C] text-white p-2 flex items-center rounded"
                      >
                        <button>
                          <MdRemoveRedEye />
                        </button>
                      </Link>
                      <Link
                        to={`/admin/all-coffee/update/${product.id}`}
                        target="_top"
                        className="bg-[#3C393B] text-white p-2 flex items-center rounded"
                      >
                        <button>
                          <MdModeEditOutline />
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-[#EA4744] text-white p-2 flex items-center rounded"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProduct;
