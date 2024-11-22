import { Link } from "react-router-dom";
import coffeeIcon from "../../assets/images/icons/1.png";
import quality from "../../assets/images/icons/2.png";
import grade from "../../assets/images/icons/3.png";
import roasting from "../../assets/images/icons/4.png";
import { FaCoffee } from "react-icons/fa";
import coffee1 from "../../assets/images/cups/Rectangle 9.png";
import coffee2 from "../../assets/images/cups/Rectangle 10.png";
import coffee3 from "../../assets/images/cups/Rectangle 11.png";
import coffee4 from "../../assets/images/cups/Rectangle 12.png";
import coffee5 from "../../assets/images/cups/Rectangle 13.png";
import coffee6 from "../../assets/images/cups/Rectangle 14.png";
import coffee7 from "../../assets/images/cups/Rectangle 15.png";
import coffee8 from "../../assets/images/cups/Rectangle 16.png";
import { useEffect, useState } from "react";
import SingleCoffeeInfo from "./SingleCoffeeInfo";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


const Home = () => {
  const [allCoffeeInfo, setAllCoffeeInfo] = useState([]);
  console.log(allCoffeeInfo);
  const loadCoffeeInfo = async () => {
    const response = await fetch("http://localhost:5000/all-coffee");
    const data = await response.json();
    setAllCoffeeInfo(data.body);
  };

  useEffect(() => {
    loadCoffeeInfo();
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
            `http://localhost:5000/all-coffee/${id}`,
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
            loadCoffeeInfo();
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
    <div>
      <div className="bg-hero-bg h-[500px] w-full bg-cover bg-center flex justify-end items-center">
        <div className="w-[55%] space-y-5">
          <h2 className="text-5xl text-white">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-base text-gray-400">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] px-4 py-2">Learn more</button>
        </div>
      </div>
      <div className=" bg-[#ECEAE3]">
        <div className="container mx-auto flex gap-4 py-10">
          <div className="space-y-2">
            <img className="size-[70px]" src={coffeeIcon} alt="coffee_icon" />
            <h4 className="text-2xl">Awesome Aroma</h4>
            <p className="text-base text-gray-700">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2">
            <img className="size-[70px]" src={quality} alt="coffee_icon" />
            <h4 className="text-2xl">High Quality</h4>
            <p className="text-base text-gray-700">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="space-y-2">
            <img className="size-[70px]" src={grade} alt="coffee_icon" />
            <h4 className="text-2xl">Pure Grades</h4>
            <p className="text-base text-gray-700">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="space-y-2">
            <img className="size-[70px]" src={roasting} alt="coffee_icon" />
            <h4 className="text-2xl">Proper Roasting</h4>
            <p className="text-base text-gray-700">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
      <div className="bg-product-bg bg-cover bg-center my-20">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl text-[#331A15] font-bold">
            Our Popular Products
          </h1>
          <Link target="_top" to={"/add-coffee"}>
            <button className="bg-[#E3B577] flex items-center text-base gap-2 px-4 py-2 rounded">
              <span className="text-white font-bold">Add Coffee</span>
              <span className="text-[#331A15]">
                <FaCoffee />
              </span>
            </button>
          </Link>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-4 mt-10">
          {allCoffeeInfo?.map((singleCoffee) => {
            return (
              <SingleCoffeeInfo
                key={singleCoffee?._id}
                handleDelete={handleDelete}
                singleCoffee={singleCoffee}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-20">
        <div className="flex flex-col items-center ">
          <p className="text-base">Follow Us Now</p>
          <h2 className="text-4xl font-bold">Follow on Instagram</h2>
        </div>
        <div className="grid grid-cols-4 gap-6 container mx-auto mt-5">
          <img src={coffee1} alt="coffee-image" />
          <img src={coffee2} alt="coffee-image" />
          <img src={coffee3} alt="coffee-image" />
          <img src={coffee4} alt="coffee-image" />
          <img src={coffee5} alt="coffee-image" />
          <img src={coffee6} alt="coffee-image" />
          <img src={coffee7} alt="coffee-image" />
          <img src={coffee8} alt="coffee-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
