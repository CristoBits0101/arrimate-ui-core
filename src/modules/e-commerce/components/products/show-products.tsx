'use client'

// GIF
import noProductsAvailable from '@/modules/e-commerce/assets/images/no_products_available.webp'

// next/image
import Image from 'next/image'

// next-intl
import { useTranslations } from 'next-intl'

// react
import { useEffect, useState } from 'react'

// Spinner
import { PuffLoader } from 'react-spinners'

// Styles
import '@/modules/e-commerce/styles/show-products.css'

// Product type
interface Product {
  asin: string
  product_title: string
  product_price: string
  product_original_price: string | null
  currency: string
  product_star_rating: string
  product_num_ratings: number
  product_url: string
  product_photo: string
  product_num_offers: number
  product_minimum_offer_price: string
  is_best_seller: boolean
  is_amazon_choice: boolean
  is_prime: boolean
  climate_pledge_friendly: boolean
  sales_volume: string | null
  delivery: string
  has_variations: boolean
}

export default function ShowProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Translations
  const t = useTranslations('ECommerce')

  // Load products when rendering the component
  useEffect(() => {
    // Search products
    async function fetchProducts() {
      // Make the request
      try {
        const response = await fetch(
          'https://real-time-amazon-data.p.rapidapi.com/seller-products?seller_id=A02211013Q5HP3OMSZC7W&country=US&page=1&sort_by=RELEVANCE',
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
              'x-rapidapi-key':
                'ef988b195emshb65eb6ea77beacap16ea5ajsn5a86d4e4b901'
            }
          }
        )
        // Store the response
        const data = await response.json()
        // Filters the response and passes it to the state
        setProducts(data.data.seller_products)
      } catch (error) {
        console.error('Error fetching products: ', error)
        // Update search status an error
        setHasError(true)
      } finally {
        // Indicate that the product search has ended
        setLoading(false)
      }
    }

    // Fetch products when the component mounts
    fetchProducts()
  }, [])

  // Show banner when the query is process
  if (loading)
    return (
      <div className='w-full h-full grid place-content-center'>
        <PuffLoader color='' />
      </div>
    )

  if (hasError || !products.length) {
    return (
      <div className='w-full h-full grid place-content-center text-center gap-8'>
        <h2 className='text-5xl font-medium shakeFix'>{t('noProducts')}</h2>
        <Image
          src={noProductsAvailable}
          alt='No products available'
          width={400}
          height={400}
          className='m-auto drop-shadow-sm aspect-square object-contain'
        />
      </div>
    )
  }

  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8'>
      {products.map((product) => (
        <li key={product.asin}>
          <article>
            <header className='relative w-full h-40'>
              <Image
                src={product.product_photo}
                alt={product.product_title}
                fill
                loading='lazy'
                className='object-contain'
              />
            </header>
            <section className='p-4'>
              <h2 className='text-lg font-semibold'>{product.product_title}</h2>
              <p className='text-gray-700'>{product.product_price}</p>
              {product.product_original_price && (
                <p className='line-through text-gray-500'>
                  Original Price: {product.product_original_price}
                </p>
              )}
              <p className='text-yellow-500 font-medium'>
                Rating: ⭐ {product.product_star_rating}
              </p>
              <p className='mt-4'>
                <a
                  href={product.product_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  View on Amazon
                </a>
              </p>
            </section>
          </article>
        </li>
      ))}
    </ul>
  )
}