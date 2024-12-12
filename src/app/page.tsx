'use client';

import { useEffect, useState } from "react";
import CustomThemeCreator from "../components/colorSelector";
import { useRouter } from "next/navigation";
import { Button, DatePicker } from "antd"

export default function Home() {
  const route = useRouter()
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-centerjustify-center">
        <h1 className="text-center">Home</h1>
        <CustomThemeCreator />
        <div className="mt-2 p-4 flex flex-row gap-2">
          <button
            className="bg-primary text-white px-4 py-2 rounded"
            onClick={() => {
              route.push('/class')
            }}
          >
            Class
          </button>
          <button
            className="bg-secondary text-white px-4 py-2 rounded"
            onClick={() => {
              route.push('/dashboard')
            }}
          >
            Dashboard
          </button>
        </div>
        <Button type="primary">Primary Button</Button>
        <Button type="dashed">Primary Button</Button>
        <DatePicker />
        <div className="flex flex-row gap-2 mt-2">
          <div className="bg-primary p-8">
            Primary
          </div>
          <div className="bg-secondary p-8">
            Secondary
          </div>
        </div>
      </div>
    </div>
  );
}
