import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {

  const location = useLocation()

  const [pageData, setPageData] = useState()

  useEffect(() => {
    setPageData(location?.state?.productData)
  }, [location])


  return (
    <div>
    
    
    </div>
  )
}

export default Product