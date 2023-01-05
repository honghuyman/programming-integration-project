import React from "react";
import Chart from 'react-apexcharts';

export default function Barchart() {
    return(
        <React.Fragment>
            <div className="container-fluid mb-5">
                <h3 className="text-center mt-3 mb-3">Bar Chart in ReactJS</h3>
            </div>
            <Chart
            type="bar"
            width={1000}
            height={500}

            series={ [
                {
                    name: "Social Media Subscriber",
                    data:[-5123, 0]
                }
            ]}
            options={ {

            }

            }
            >

            </Chart>
        </React.Fragment>

    );
}