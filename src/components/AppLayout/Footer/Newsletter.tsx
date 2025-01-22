import React from 'react'

const Newsletter = () => {
  return (
    <>
      <h5 className="text-xl mt-12 mb-3 font-bold leading-[1.2]">Newsletter</h5>
      <div>
        <div>
          <form className="pb-14">
            <label className="text-white mb-1.5 inline-block" htmlFor="name">
              Name
            </label>
            <span className="relative">
              <input
                size={40}
                maxLength={400}
                type="text"
                name="Name"
                className="w-full bg-white border border-[#dee2e6] h-full rounded-md py-1.5 px-2.5 text-[#3850B4] text-xl mb-2.5"
              />
            </span>
            <label className="text-white mb-1.5 inline-block" htmlFor="email">
              Email
            </label>
            <span className="relative">
              <input
                size={40}
                maxLength={400}
                type="email"
                name="Email"
                className="w-full bg-white border border-[#dee2e6] h-full rounded-md py-1.5 px-2.5 text-[#3850B4] text-xl mb-2.5"
              />
            </span>
            <button className="primary-button bg-white text-[#4A65D6] mt-2.5">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Newsletter
