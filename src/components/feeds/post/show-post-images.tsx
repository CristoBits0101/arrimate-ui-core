'use client'

import ArrimateCard from '@/components/marketing/card/arrimate-card'
import Image from 'next/image'
import { useFetchPhotos } from '@/hooks/useFetchPhotos'
import { randomUtils } from '@/utils/randomUtils'

export default function ShowPostImages() {
  const { photos, loading, error } = useFetchPhotos({
    query: 'happy',
    page: 4
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <section className='w-full h-fit flex flex-col justify-center items-center gap-8'>
      {photos.map((photo) => (
        <article
          key={photo.id}
          className='relative w-[25vw] h-fit flex flex-col items-center gap-4'
        >
          <header className='w-full h-fit absolute bottom-0 left-0 z-10 p-4'>
            <ArrimateCard
              nickname={photo.photographer}
              description={photo.photographer_url.replace('https://www.', '')}
              date={randomUtils.getRandomTime()}
              location={randomUtils.getImportantCapital()}
              trending={randomUtils.getRandomBoolean()}
              followers={randomUtils.getRandomFollowers()}
              reliable={randomUtils.getRandomBoolean()}
              verified={randomUtils.getRandomBoolean()}
              follower={true}
            />
          </header>
          <div className='relative w-full h-[75vh] overflow-hidden'>
            <Image
              src={photo.src.large2x}
              alt={photo.alt || 'Image from Pexels'}
              layout='fill'
              objectFit='cover'
              className='rounded-3xl drop-shadow-sm'
            />
          </div>
        </article>
      ))}
    </section>
  )
}
