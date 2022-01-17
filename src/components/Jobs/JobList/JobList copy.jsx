import React from 'react'
import './JobList.css'

const JobList = ({jobs}) => {
    let aux = 0
    let jobClass='hola'
    return (
        <div  className='jobListContainer'>
            {
                jobs.map(j=>{
                    aux++
                    switch (aux) {
                        case 1:
                            jobClass='jobList_short1'
                            break;
                        case 2:
                            jobClass='jobList_short2'
                        break;
                        default:
                            aux=0
                        break;
                    }
                    console.log(jobClass)
                    return (
                    <div className={jobClass}>
                        <img className={"jobImg_"+jobClass} src={j.img} alt={j.title}/>
                        <div className="hoverDiv">
                            {j.title+'-'+j.from}
                        </div>
                    </div>)
                })
            }
        </div>
    )
}

export default JobList
