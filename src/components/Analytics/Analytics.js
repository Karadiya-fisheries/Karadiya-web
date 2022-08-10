import React,{useEffect} from 'react';
import './Analytics.css';
import { IoMdAnalytics } from 'react-icons/io';
import Chart from '../UI/Chart';
//import { BaseOptionChartStyle } from'./../chart/BaseOptionChart';
// import Chart from 'chart.js/auto'
import AOS from "aos";
import "aos/dist/aos.css";


const Analytics = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <section id="analytics">
        <div className="container analytics">
            <div className="u-title" data-aos="fade-up">
                <IoMdAnalytics color="" size={30}/>
                <h2>Fishing Analytics</h2>
                <p className="u-text-small u-text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Eos molestias distinctio officia libero, id in dolor nobis tenetur 
                    
                </p>
            </div>
            <div className="analytics-content">
               <div className="analytics-left" data-aos="fade-right">
                   {/* <img src="" alt="" className="fishimg" /> */}
                   <div>
                       <p>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci reiciendis quam facere, libero illum dolor quos illo quibusdam magni at eius consequuntur minima repudiandae praesentium tenetur saepe rerum, possimus error!
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos, nesciunt nulla voluptatum nihil magni consectetur excepturi recusandae! Adipisci sint sequi natus laudantium dicta debitis blanditiis facilis alias quos eius.
                       </p>
                   </div>
        
                </div> 
               <div className="analytics-right" data-aos="fade-left">
                   {/* <Chart/> */}
                   
               </div>
            </div>
    </div>
    </section>
  )
}

export default Analytics;