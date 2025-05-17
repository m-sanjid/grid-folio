import React from 'react'

const Newsletter = () => {
    return (
        <div id="newsletter" className="bg-noise text-black dark:text-white rounded-3xl p-8 md:col-span-2">
          <h2 className="text-2xl font-medium mb-6">Get design tips & guides straight to your inbox for free!</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 dark:bg-zinc-800 bg-neutral-200 rounded-full px-6 py-3 text-black dark:text-white outline-none"
            />
            <button className="dark:bg-zinc-800 bg-neutral-200 rounded-full px-6 py-3 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
    )
}

export default Newsletter