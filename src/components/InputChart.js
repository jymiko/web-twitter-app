import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";
import CardSection from '../components/CardSection';

const InputChart = () => {
    const options = {
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: ['positif', 'negatif', 'netral']
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 90, 45]
            }
          ]
    };
    return(
        <div className="container mx-auto">
            <form className="m-4 flex">
                <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-full" placeholder="Paste your tweet here"/>
                <button className="px-8 rounded-r-lg bg-green-500  text-white font-bold p-4 uppercase">Search</button>
            </form>
            <CardSection/>
            <div className="w-4/6 mx-auto">
                <Chart
                options={options.options}
                series={options.series}
                type="bar"
                />
            </div>
        </div>
    )
}

export default InputChart