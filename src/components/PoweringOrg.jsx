import Button from "./Button";
import Card from "./Card";
import { ArchiveBoxIcon, BriefcaseIcon, BuildingLibraryIcon, CurrencyDollarIcon, HeartIcon, TagIcon } from '@heroicons/react/24/solid'

const PoweringOrg = () => {
    return ( 
        <section className="w-full p-10">
            <div className=" flex flex-col-reverse md:flex-row  items-center ">
                <div className="w-full md:w-1/2 space-y-4 md:p-10 md:text-left text-center mt-5 md:mt-0">
                    <h2 className="text-4xl font-semibold">Powering organizations across industries and geographies</h2>
                    <p className=" text-gray-500">Zoom helps consolidate communications, connect people, and collaborate
                    better together in the boardroom, classroom, operating room, and everywhere in between.</p>
                    <Button text='Explore Industry Solutions'/>
                </div>
                <div className=" w-full md:w-1/2 grid  grid-cols-1 md:grid-cols-2 justify-items-center gap-3">
                        <Card title='Education' icon={<BriefcaseIcon/>}/>
                        <Card title='Financial Services' icon={<CurrencyDollarIcon/>}/>
                        <Card title='Government'icon={<BuildingLibraryIcon/>}/>
                        <Card title='Healthcare' icon={<HeartIcon/>}/>
                        <Card title='Manufacturing' icon={<ArchiveBoxIcon/>}/>
                        <Card title='Retail' icon={<TagIcon/>}/>
                        
                </div>
            </div>
        </section>
     );
}
 
export default PoweringOrg;