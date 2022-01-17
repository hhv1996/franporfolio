import React, { useEffect, useState } from 'react'
import './JobList.css'

const JobList = ({jobs}) => {
    const [listJob, setListJob] = useState([])
    useEffect(() => {
        let aux=1
        let auxJobs =[]
        let subJobs=[]
        jobs.forEach(j => {
            subJobs.push(j)
            aux++
            if (aux>4) {
                auxJobs.push(subJobs)
                subJobs=[]
                aux=1
            }
        });
        setListJob(auxJobs)
      }, [jobs])
    
    return (
        <div className='jobListContainer'>
            {
                jobs.map(j=>{
                    return(
                        <div  className='jobListItem'>
                            <img className="jobImg" src={j.img} alt={j.title}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default JobList
