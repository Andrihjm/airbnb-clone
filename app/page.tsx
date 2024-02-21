import { Button } from '@/components/ui/button'
import React from 'react'
import MapFilterItems from './components/MapFilterItems'

const page = () => {
  return (
   <>
    <div className='container mx-auto px-5 lg:px-10'>
      <MapFilterItems />
    </div>
   </>
  )   
}

export default page