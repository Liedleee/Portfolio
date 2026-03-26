import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <Link
        href="https://drive.google.com/drive/folders/1uxf7Mer3LB47hHA5druN2oGOQy8bFAHq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HackerBtn label='Download Resume' />
      </Link>
    </div>
  )
}

export default DownLoadResumeBtn