import { useEffect, useState } from "react";
import VolunteerCard from "../VolunteerCard/VolunteerCard";

const Banner = () => {
    const [volunteers, setVolunteers] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/volunteer')
        .then(res => res.json())
        .then(data=> {
            setVolunteers(data);
        })
    }, [])

    return (
        <div className="mt-16 mx-8 md:mx-16 lg:mx-32">
            <div className="w-full">
                <h1 className="text-center font-bold text-4xl">I grow by helping people in need.</h1>
                <div className="form-control mt-6">
                   <div className="input-group">
                     <div className="mx-auto">
                     <input type="text" placeholder="Search…" className="input input-bordered" />
                     <button className="btn btn-primary rounded-e-md w-20">
                      Search
                      </button>
                     </div>
                  </div>
                </div>
            </div>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
            {
              volunteers &&  
              volunteers.map(volunteer => <VolunteerCard key={volunteer._id} volunteer={volunteer}/>)
            }
            </div>
        </div>
    );
};

export default Banner;