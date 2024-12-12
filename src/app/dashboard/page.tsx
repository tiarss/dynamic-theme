'use client'

import { Button, Modal } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const route = useRouter()
  const [isLoaded, setIsLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <div className="bg-secondary">
        <h1 className="text-3xl text-primary">Dashboard</h1>
        <button
          onClick={() => {
            route.push('/class')
          }}
        >
          go to class
        </button>
        <Button type="primary" onClick={() => setOpenModal(true)}>Create Theme</Button>
        <Modal
          title="Create Theme"
          open={openModal}
          onCancel={() => setOpenModal(false)}
          onOk={() => setOpenModal(false)}
        >
          <div>
            <p>Testing</p>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Dashboard