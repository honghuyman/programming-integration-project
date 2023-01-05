import React, { useState } from "react";
import Chart from 'react-apexcharts';
import "./Report.css";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();

export default function Report() {
    const[popup,setPop]=useState(false);
    const handleClickOpen=()=>{
        setPop(!popup);
    }
    const closePopup=()=>{
        setPop(false);
    }

    const initReport=()=>{
        if (month === 0) {
            document.querySelector(".prev").innerHTML = `${months[11] + "/" + year}`
        } else {
            document.querySelector(".prev").innerHTML = `${months[month - 1] + "/" + year}`
        }
        document.querySelector(".next").innerHTML = `${months[month] + "/" + year}`
    }

    const prevMonth=()=>{
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        this.initReport();
    }
    
    const nextMonth=()=>{
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        this.initReport();
    }

    return(
        <div className="Report">
            <div>
                <div className="main">
                    <div className="frame">
                        <div className="frame-header">
                            <h11>Opening balance</h11>
                            <button className="prev change-month" onClick={prevMonth}>{months[(month - 1 + 12) % 12] + "/" + year}</button>
                            <button className="next change-month" onClick={nextMonth}>{months[month] + "/" + year}</button>
                            <button className="today-btn change-month">Today</button>
                            <h11>Ending balance</h11>
                        </div>
                        <div className="below-header">
                            <h12>0đ</h12>
                            <h12>-345,000đ</h12>
                        </div>
                        <div className="middle">
                            <h10>Net income</h10>
                        </div>
                        <div className="below-middle">
                            <h2>-345,000đ</h2>
                            <React.Fragment>
                                <Chart
                                type="bar"
                                width={1050}
                                height={200}

                                series={ [
                                    {
                                        name: "Net income",
                                        data:[-345000, 0]
                                    }
                                ]}
                                options={ {
                                    colors:['#EE7621']
                                }}
                                >
                                </Chart>
                            </React.Fragment>
                        </div>
                        <div className="bottom">
                            
                            <div className="inside-bottom">
                                <React.Fragment>
                                    <Chart
                                        type="pie"
                                        width={400}
                                        height={400}
                                        series={[15,70]}
                                        options={{
                                            labels:['Part-time','Tutor'],
                                            colors:['#F09C42','#98D0B9']
                                        }}
                                    >
                                    </Chart>
                                    <Chart
                                        type="pie"
                                        width={400}
                                        height={400}
                                        series={[23, 43]}
                                        options={{
                                            labels:['Transport','Shopping'],
                                            colors:['#F08080','#94AAD6']
                                        }}
                                    >

                                    </Chart>
                                </React.Fragment>
                            </div>
                            <div className="container-fluid">
                                <button onClick={handleClickOpen}>Income</button>
                                <div>
                                {popup?
                                <div className="main1">
                                    <div className="popup1">
                                        <div className="popup-header1">
                                            <h2>Income</h2>
                                            <h3 onClick={closePopup}>x</h3>
                                        </div>
                                        <div className="reportContainer">
                                            <div className="transaction">
                                                <div className="date">15/12/2022</div>
                                                <div className="transaction detailin">
                                                    <div className="detailContainer">
                                                        <h3 className="spend">Spend</h3>
                                                        <h3 className="spend money">${500000}</h3>
                                                    </div>
                                                </div>
                                                <div className="transaction detailin">
                                                    <div className="detailContainer">
                                                        <h3 className="spend">Spend</h3>
                                                        <h3 className="spend money">${500000}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="transaction">
                                                <div className="date">15/12/2022</div>
                                                <div className="transaction detailin">
                                                    <div className="detailContainer">
                                                        <h3 className="income">Income</h3>
                                                        <h3 className="income money">${500000}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>:""}
                                </div>
                                <button>Expense</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}