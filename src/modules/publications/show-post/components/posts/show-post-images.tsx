// Components
import ArrimateImagesCard from '@/modules/publications/show-post/components/cards/arrimate-images-card'
import NoContent from '@/modules/publications/show-post/components/alerts/stock-empty'
import PostButton from '@/modules/publications/show-post/components/buttons/post-button'

// Custom
import { useFetchImages } from '@/modules/publications/show-post/hooks/useFetchImages'
import { randomUtils } from '@/utils/randomUtils'

// Image
import Image from 'next/image'

// Styles
import styles from '@/modules/publications/show-post/styles/show-post-images.module.css'
import '@//modules/publications/show-post/styles/show-post-products-style.css'

// Translations
import { useTranslations } from 'next-intl'

export default function ShowPostImages() {
  // Translations
  const t = useTranslations('Feeds')

  // Query images
  const { photos, loading } = useFetchImages({
    query: 'couples',
    orientation: 'portrait',
    per_page: 10,
    page: 3
  })

  // Show loading message while fetching photos
  if (loading) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <h2 className='text-center text-gray-500'>{''}</h2>
      </div>
    )
  }

  // Show no photos available message if photos array is empty
  if (!photos || photos.length === 0) return <NoContent text={t('noStories')} />

  // Render photos if available
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center gap-16'>
      {photos.map((photo) => {
        // Generate a unique description and hashtags for each photo
        const { description, hashtags } =
          randomUtils.getRandomImageDescription()

        return (
          <article
            key={photo.id}
            className='relative h-fit grid grid-cols-[25.19vw,auto] grid-rows-[auto,auto,auto] gap-4'
          >
            {/* Card */}
            <header className='col-span-1 row-span-1 w-full h-fit flex flex-col gap-4'>
              <ArrimateImagesCard
                nickname={photo.photographer}
                profesion={randomUtils.getRandomProfession()}
                intereses={randomUtils.getRandomInterests()}
                slogan={randomUtils.getRandomSlogan()}
                date={randomUtils.getRandomTime()}
                location={randomUtils.getRandomCapital()}
                trending={randomUtils.getRandomBoolean()}
                followers={randomUtils.getRandomFollowers()}
                reliable={randomUtils.getRandomBoolean()}
                verified={randomUtils.getRandomBoolean()}
                follower={true}
              />
            </header>
            {/* Empty */}
            <aside className='col-span-1 row-span-1 w-auto h-full flex flex-col'></aside>
            {/* Image */}
            <section
              className={`${styles.section} col-span-1 row-span-1 relative w-full overflow-hidden`}
            >
              <Image
                src={photo.src.large2x}
                alt={photo.alt || 'Image from Pexels'}
                fill
                sizes='
                  (max-width: 1023px) 100vw,
                  (max-width: 1279px) 50vw,
                  (max-width: 1365px) 50vw,
                  (max-width: 1439px) 50vw,
                  (max-width: 1599px) 33vw,
                  (max-width: 1920px) 33vw,
                  25vw'
                className='rounded-3xl drop-shadow-sm object-cover w-full h-full'
              />
            </section>
            {/* Buttons */}
            <aside className='col-span-1 row-span-1 w-full h-full flex flex-col gap-2 justify-center items-center'>
              <PostButton
                iconAlt='Like icon'
                iconDisplay='like'
                textDisplay={randomUtils.getRandomLikes().toString()}
              />
              <PostButton
                iconAlt='Comment icon'
                iconDisplay='comments'
                textDisplay={randomUtils.getRandomInteractions().toString()}
              />
              <PostButton
                iconAlt='Save icon'
                iconDisplay='save'
                textDisplay={randomUtils.getRandomInteractions().toString()}
              />
              <PostButton
                iconAlt='Share icon'
                iconDisplay='share'
                textDisplay={randomUtils.getRandomInteractions().toString()}
              />
              <PostButton iconAlt='Options icon' iconDisplay='options' />
            </aside>
            {/* Footer with Description and Hashtags */}
            <footer className='col-span-1 row-span-1 w-full h-fit flex flex-col'>
              <p className='w-full break-words'>✍️ {description}</p>
              <p className='w-full break-words text-cyan-800'>
                📸 {hashtags.join(' ')}
              </p>
            </footer>
            {/* Empty */}
            <aside className='col-span-1 row-span-1 w-auto h-full flex flex-col'></aside>
          </article>
        )
      })}
    </div>
  )
}
