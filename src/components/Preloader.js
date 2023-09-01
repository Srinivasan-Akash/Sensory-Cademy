import React from 'react'
import Image from 'next/image'

export default function Preloader() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(0deg, #10141F 0%, #10141F 100%), linear-gradient(0deg, #10141F 0%, #10141F 100%), linear-gradient(0deg, #10141F 0%, #10141F 100%), #10141F',
        color: 'white',
        fontSize: '24px',
        zIndex: 9999,
      }}
    >
      <Image src={"/preloader.gif"} width={213} height={120} />
    </div>
  )
}
