import React, { useEffect, useState } from 'react'
import { Plock } from "react-plock";
import { MdVisibility } from "react-icons/md";
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
      const breakpoints = [
        { size: 640, columns: 1 },
        { size: 768, columns: 2 },
        { size: 1024, columns: 4 }
      ];
    return (
        <Plock nColumns={breakpoints} gap={10} className='jobListContainer'>
            {
                jobs.map(j=>{
                    return(
                        <div  className='jobListItem'>
                            <img className="jobImg" src={j.img} alt={j.title}/>
                            <div>     
                                <div className='jobListButtoms'>
                                    <p className='jobListDescription'>{j.title}</p>
                                    <MdVisibility className='jobListVisibilityIcon'/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Plock>
    )
}

export default JobList
