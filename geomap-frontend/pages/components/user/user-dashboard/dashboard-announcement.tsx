import React from 'react'

function UserAnnouncement() {
   
   const divGenerator =()=>{ // get method how many post in the database
                          // ToDO need to fetch using api the posts data
    const divs =[]      // store the divs need to be rendered and return
    const numPost =10 // dummy Data
    for (let i = 0; i < numPost; i++){
      divs.push(<div key={i} className='bg-black flex flex-col items-center space-y-2 max-md:w-4/5 h-80 md:w-11/12 md:h-96 p-6 m-4'>{i+1}
        <div className='bg-white w-11/12'>Title</div>
        <div className='w-11/12 bg-white'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni, laboriosam laudantium atque sequi aut inventore optio possimus aperiam dignissimos recusandae, rerum velit error, neque laborum doloribus quo maiores in!</p>
        </div>

      </div>)
    }
    return divs
  }
  return (
    <div className='bg-red-500 relative h-auto top-20 -z-50 flex flex-col items-center lg:w-10/12 left-40 mx-2 md:w-9/12 md:mx-4
     sm: w-9/12 max-sm:left-0 max-sm:w-screen '>
        {divGenerator()}
    </div>
  )
}

export default UserAnnouncement