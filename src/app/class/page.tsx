'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Class = () => {
  const route = useRouter()
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <div className="bg-secondary">
        <h1 className="text-3xl text-primary">Class</h1>
        <button
          onClick={() => {
            route.push('/')
          }}
        >
          Home
        </button>
      </div>
    </>
  )
}

export default Class