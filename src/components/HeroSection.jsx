import Button from './Button'
const HeroSection = () => {
    return ( 
<section className='flex p-8 w-full lg:w-3/4 h-fit mx-auto items-center'>
          <div className='w-full flex justify-between items-center flex-col-reverse xl:flex-row'>
          <div className='w-full lg:h-3/4 space-y-[30px] text-center mt-10 xl:mt-0'>
          <h1 className=' text-4xl xl:text-7xl md:text-6xl'>One platfrom <br/> to innovate</h1>
          <p className=' text-md'>Bring teams together, reimagine workspaces, engage new <br/> audiences, and delight your customers — all on the Zoom <br/> platform you know and love.</p>
          <div className=' flex space-x-2 justify-center'>
          <Button text={"Plans & Pricing"}/>
          <Button text={"Sign up, it's free"}/>
          </div>
        </div>
        <div className=' w-full'>
          <div className='xl:p-10 w-full' >
          <img className=' rounded-2xl ' src="/src/hero-zoom.png" alt="A graphic of a person in a zoom meeting" />
          </div>
          
        </div>
          </div>
       
        </section>

     );
}
 
export default HeroSection;