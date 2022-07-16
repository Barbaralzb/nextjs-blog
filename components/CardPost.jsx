import Image from 'next/image'

export default function CardPost ({ title, body, sourceAvatar }) {
  return (
    <div className='card w-9/12'>
      <div className='card-content h-full grid grid-cols-4'>
        <div className='col-span-1 m-auto'>
          <Image
            priority
            src={sourceAvatar}
            className='rounded-full shadow'
            height={100}
            width={100}
            alt={title}
          />
        </div>

        <div className='col-span-3'>
          <p className='title'>
            {title}
          </p>
          <p>
            {body}
          </p>
        </div>
      </div>
      <footer className='card-footer'>
        <p className='card-footer-item'>
          <span>
            View on <a href='https://twitter.com/codinghorror/status/506010907021828096'>Twitter</a>
          </span>
        </p>
        <p className='card-footer-item'>
          <span>
            Share on <a href='#'>Facebook</a>
          </span>
        </p>
      </footer>
    </div>
  )
}
