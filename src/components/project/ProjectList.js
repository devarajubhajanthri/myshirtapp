import React from 'react';
const imgBase= 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v15452177305/T-shirt%20Images/'

const ProjectLists = ({design}) => {
    return(
        <div className="item text-center">
            <div className="card card-body">
                <img className="img-fluid"
                src={`${imgBase}${design.tshirtColor}`} alt="t-shirt" />
                <p>{design.name}</p>
                <button className="btn btn-primary btn-sm">View Project</button>
            </div>
        </div>
    )
}

export default ProjectLists;