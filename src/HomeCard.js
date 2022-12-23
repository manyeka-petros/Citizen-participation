import React from 'react'

const HomeCard = ({price,titl,dance}) => {
  return (
    <div>
        <div>
            <p>title {titl} </p>
        </div>
        <div>
            <p>
                dance {dance}
            </p>
        </div>
        <div>
            <b>
                price {price}
            </b>
        </div>
      
    </div>
  )
}

export default HomeCard
