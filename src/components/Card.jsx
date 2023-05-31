const Card = ({title,icon}) => {
    return ( 
        <div className="w-full md:w-44 p-10 md:p-5 lg-p-0 lg:w-60 h-40 outline outline-1 rounded-3xl flex-col justify-center items-center text-lg md:text-xl font-semibold
        hover:shadow-md hover:outline-sky-500 outline-sky-200 text-center space-y-3 "><div className="h-10 w-10 mx-auto">{icon}</div><div>{title}</div></div>
    );
}
 
export default Card;