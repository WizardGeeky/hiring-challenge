"use client"

import useCanvasCursor from "./useCanvasCursor"

const CanvasCursor = () => {
    useCanvasCursor();
  
    return <canvas className='pointer-events-none fixed inset-0 w-full' id='canvas' />;
  };
  export default CanvasCursor;