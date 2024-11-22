import coffeeMug from '../assets/images/more/logo1.png'
const Navbar = () => {

  return (
    <div className="bg-navbar-bg h-[80px] w-full object-cover bg-center border flex items-center gap-3 justify-center">
    <img width={55} height={70} src={coffeeMug} alt="coffee-img" />
      <h1 className='text-4xl text-white'>Espresso Emporium</h1>
    </div>
  );
};

export default Navbar;
