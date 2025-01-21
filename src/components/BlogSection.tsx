import React from 'react'
import Link from 'next/link'

const BlogSection = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="visible animate-[fadeIn] px-[7vw] py-28 w-full lg:w-6/12 bg-black text-white">
        <h6 className="mb-7 font-light uppercase text-sm">blog</h6>
        <h5 className="text-4xl font-light mb-7 lg:max-w-80 leading-10">
          Connecting Django to RDS via pg bouncer using IAM auth​{' '}
        </h5>
        <Link
          className="primary-button bg-white"
          href="/connecting-django-to-rds-via-pgbouncer-using-iam-auth/"
        >
          Read
        </Link>
      </div>
      <div className="visible animate-[fadeIn] px-[7vw] py-28 w-full lg:w-6/12 bg-[#313131] text-white">
        <h6 className="mb-7 font-light uppercase text-sm">INSIGHT</h6>
        <h5 className="text-4xl font-light mb-7 lg:max-w-80 leading-10">
          Frontend Performance Testing: Best Practices​
        </h5>
        <Link
          className="primary-button bg-white primary-button--blue"
          href="/frontend-performance-testing-best-practices/"
        >
          Read
        </Link>
      </div>
    </div>
  )
}

export default BlogSection
