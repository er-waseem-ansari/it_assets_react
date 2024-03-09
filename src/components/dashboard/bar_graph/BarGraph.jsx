import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import './BarGraph.css'
function BarGraph() {
  
  return (
    <>
    <h6>Asset Inventory</h6>
    <div className='bar-graph-inventory'>
    <BarChart 
      xAxis={[
        {
          id: 'barCategories',
          data: ['Laptop', 'Keyboard', 'Printer', 'Monitor', 'Tablet', 'Router', 'CPU'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [200, 300, 100, 500, 600, 100, 200],
          color: "#b0b0b0",
        },
      ]}
      // width={100}
      height={230}
    />
    </div>
    </>
  )
}

export default BarGraph