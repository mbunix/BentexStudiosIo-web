import React from 'react'
import { useRouter } from 'next/router'
function About() {
  const router = useRouter()
const { slug } = router.query
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

export default About
