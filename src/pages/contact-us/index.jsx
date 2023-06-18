import React from 'react'
import { useRouter } from 'next/router'

function ContactUs () {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>
      <h2>Contact</h2>
      <p>Slug: {slug}</p>
    </div>
  )
}

export default ContactUs
