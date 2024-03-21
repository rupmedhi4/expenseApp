import React from 'react';

export default function Chart() {
    let months = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop:"10px"}}>
            {months.map((month, index) => (
                <div style={{display:"flex", flexDirection:"column"}}>
                     <div className="chartBar" style={{height:"100px"}}></div>
                     <span key={index} className='month'>{month.label}</span>
                </div>
               
            ))}
        </div>
    );
}
