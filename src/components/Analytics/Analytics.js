import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import './Analytics.css';
import { IoMdAnalytics } from 'react-icons/io';
import Chart from '../UI/Chart';
//import { BaseOptionChartStyle } from'./../chart/BaseOptionChart';
// import Chart from 'chart.js/auto'
import AOS from "aos";
import "aos/dist/aos.css";
import AppWebsiteVisits from './../chart/AppWebsiteVisits';


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
                 <Box>
                 <AppWebsiteVisits
              title="Fishing Trips"
              subheader="(-5%) than last year"
              chartLabels={[
                "01/01/2022",
                "02/01/2022",
                "03/01/2022",
                "04/01/2022",
                "05/01/2022",
                "06/01/2022",
                "07/01/2022",
                "08/01/2022",
                "09/01/2022",
                "10/01/2022",
                "11/01/2022",
              ]}
              chartData={[
                {
                  name: "Western Province",
                  type: "area",
                  fill: "gradient",
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: "Southern Province",
                  type: "area",
                  fill: "gradient",
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: "Northern Province",
                  type: "area",
                  fill: "gradient",
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
                 </Box>
                   
               </div>
            </div>
    </div>
    </section>
  )
}

export default Analytics;