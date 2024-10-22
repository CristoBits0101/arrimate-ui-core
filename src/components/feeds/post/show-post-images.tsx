'use client'

import ArrimateFollowCard from '@/components/marketing/user/arrimate-follow-card'
import Image from 'next/image'
import { useFetchPhotos } from '@/hooks/useFetchPhotos'
import { randomUtils } from '@/utils/randomUtils'

export default function ShowPostImages() {
  const { photos, loading, error } = useFetchPhotos({ query: 'momentos' })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <section className='w-full h-fit flex flex-col justify-center items-center gap-16'>
      {photos.map((photo) => (
        <article
          key={photo.id}
          className='w-[25vw] h-fit flex flex-col items-center gap-4'
        >
          <header className='w-full h-fit'>
            <ArrimateFollowCard
              nickname={photo.photographer}
              description={photo.photographer_url.replace('https://www.', '')}
              trending={randomUtils.getRandomBoolean()}
              followers={randomUtils.getRandomFollowers()}
              reliable={randomUtils.getRandomBoolean()}
              verified={randomUtils.getRandomBoolean()}
              date={randomUtils.getRandomTimeAgo()}
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