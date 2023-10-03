import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-5">
            <h2 className="text-3xl ">All Categories {categories.length} </h2>
            <button className="btn w-11/12 mx-auto ml-3 bg-[#E7E7E7]">National News</button>
            {
                categories.map(category => <Link
                     key={category.id}
                    className="block ml-6 text-xl font-semibold"
                     >{category.name}
                     </Link>)
            }
        </div>
    );
};

export default LeftSideNav;