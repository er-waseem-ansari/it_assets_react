import React, { useContext, useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import './BarGraph.css'
import AuthContext from '../../../context/AuthContext';
import CategoryService from '../../../services/employeeService/CategoryService';
function BarGraph() {
  const { auth } = useContext(AuthContext)
  const [categoryName, setCategoryName] = useState([])
  const [categoryQuantity, setCategoryQuantity] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    CategoryService.getAllCategory(auth.jwtToken).then((response) => {
      if (response && response.data) {
        const c_name = [];
        const c_data = [];

        response.data.forEach((current_category) => {
          c_name.push(current_category.categoryName);
          c_data.push(current_category.totalQuantity);
        });

        setCategoryName(c_name);
        setCategoryQuantity(c_data);
        setDataLoaded(true);
      } else {
        console.error("Response or response.data is undefined.");
      }
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    })
    return () => {};
  },[])


  if (dataLoaded) return (
    <>
      <h6>Asset Inventory</h6>
      <div className='bar-graph-inventory'>
        <BarChart
          xAxis={[
            {
              id: 'barCategories',
              data: categoryName,
              scaleType: 'band',
            },
          ]}
          series={[
            {
              data: categoryQuantity,
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