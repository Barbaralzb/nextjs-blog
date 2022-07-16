import Image from 'next/image'

export default function Hero ({ title, subtitle }) {
  return (
    <section className='hero is-small is-link lg:px-24'>
      <div className='hero-body flex'>
        <Image
          priority
          src='/../public/images/proj.jpeg'
          className='rounded-full'
          height={64}
          width={64}
          alt={title}
        />
        <div className='ml-6'>
          <p className='title'>
            {title}
          </p>
          <p className='subtitle'>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
