import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Images } from './api/images'

const Home: NextPage = () => {


  const [images, setImages] = useState<Images[]>([])

  const loadImages = async () => {
    const data = await fetch("http://localhost:3000/api/images", { method: "GET" })
    const imagesToSet: Images[] = await data.json()
    setImages(imagesToSet)
  }

  useEffect(() => {
    (async () => {
      await loadImages()

    })()

  }, [])

  return (
    <>
      <main className='container'>
        <header>
          <h1>Coing</h1>
          <button onClick={loadImages}>Load Images</button>
        </header>

        <div className='gallery'>
          {images.map(img => {
            return <div key={img.id} className={"image-container"}>
              <img src={img.imageUrl} alt={img.title} />
              <p>{img.title}</p>
            </div>
          })}
        </div>
      </main>
    </>
  )
}

export default Home
