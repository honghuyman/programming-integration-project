import React from "react";
import Chart from "react-apexcharts";

function Piechart(){
    return(
        <React.Fragment>
            <div className="container-fluid">
                <h3>Welcome to Piechart</h3>
            </div>
            <Chart
                type="pie"
                width={1000}
                height={500}
                series={[23, 43, 50, 54, 65]}
                options={{
                    labels:['Hindi', 'Math', 'English', 'Literature', 'Science']
                }}
                >

                </Chart>
        </React.Fragment>
    );
}
export default Piechart;