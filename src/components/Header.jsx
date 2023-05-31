import Button from "./Button";
import logo from '/src/Zoom_logo.svg'
const Header = () => {
    return ( 
        <nav className=' flex justify-between items-center p-3 xl:w-3/4 w-full mx-auto pt-8'>
        <div className=' flex justify-between items-center space-x-10'>
        <img src={logo} alt="Logo" width={120}/>
        <ul className=' hidden  space-x-10 lg:text-lg text-sm sm:flex-row sm:inline-flex'>
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Plans & Pricing</li>
        </ul>
        
        </div>
        <div className=' space-x-5 hidden lg:inline-flex'>
          <Button text = "Contact Sales" />
          <Button text = "Sign Up Free" />
        </div>
        <div className=" sm:hidden flex">
          Menu
        </div>
      </nav>
     );
}
 
export default Header;
