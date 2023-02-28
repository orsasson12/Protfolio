import React from 'react'
import FooterIcons from './FooterIcons'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center  flex-col gap-3">
                <div className="text-lg">
                    &copy; Uzi or Sasson {new Date().getFullYear()}
                </div>
                <FooterIcons />
            </div>
        </footer>
    )
}

export default Footer