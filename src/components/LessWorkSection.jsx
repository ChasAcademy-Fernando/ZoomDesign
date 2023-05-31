const LessWorkSection = () => {
    return ( 
        <section className="my-10">
            <div className=" h-fit pb-5 md:pb-0 md:h-[360px] bg-[#00053d] flex items-center flex-col md:flex-row">
                <div className="max-w-[450px]">
                    <img src="https://st2.zoom.us/static/6.3.13242/image/home2/zm-product-wheel.png" alt="" className="w-full" />
                </div>
                <div className="mx-auto  w-fit md:w-[650px] text-blue-200 space-y-4 text-center md:text-left">
                    <h2 className="text-4xl">Make work less work</h2>
                    <p className="text-xl">Securely connect and collaborate so you can work better together. Simple to manage and delightful to use, Zoom powers the modern workforce.</p>
                    <div className="mt-5"><a href="#" className=" hover:text-gray-100 text-xl">Discover the Possibilities</a></div>
                </div>
            </div>
        </section>
     );
}
 
export default LessWorkSection;