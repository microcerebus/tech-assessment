import Image from 'next/image'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import { ABSINTHE_LOGO_URL } from '@/constants'

const Footer = () => {
  return (
    <footer className="flex items-center bg-elevation-2 px-28 text-secondary">
      <div className="flex items-center gap-2" id="icons-row">
        <FaDiscord className="size-8" />
        <FaXTwitter className="size-8" />
        <FaGithub className="size-8" />
      </div>
      <div className="flex w-full justify-center px-4 py-2">
        <div className="flex items-center" id="logo-container">
          <div
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(0, 98, 83, 0.13) 0%, rgba(207, 233, 0, 0.0832) 100%)',
              border: '1px solid',
              borderImageSource:
                'linear-gradient(91.46deg, rgba(0, 98, 88, 0.15) 1.24%, rgba(207, 233, 0, 0.15) 55.67%)',
            }}
            id="logo"
            className="flex items-center rounded-xl p-2"
          >
            <p className="text-sm font-normal">Powered by</p>
            <Image
              src={ABSINTHE_LOGO_URL}
              height={18}
              width={108}
              alt="Brand Logo Footer"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
