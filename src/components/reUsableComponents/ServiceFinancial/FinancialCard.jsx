import React from 'react'
import {  FaShoppingBag,} from 'react-icons/fa';
const FinancialCard = ({Name, Date, Amount}) => {
  return (
    <div>
       <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center">
              <FaShoppingBag className="text-blue-800 text-xl" />
              <div className="ml-4">
                <p className="text-sm text-profilefont font-semibold">{Name}</p>
                <p className="text-xs text-profilefont font-semibold">{Date}</p>
              </div>
            </div>
            <p className="text-amount_red">{Amount}</p>
          </div>  

    </div>
  )
}

export default FinancialCard