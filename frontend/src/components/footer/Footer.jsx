import React from 'react'
import { Trophy } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="h-6 w-6" />
              <span className="text-xl font-bold">Arab Cup 2025</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Arab Cup. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
