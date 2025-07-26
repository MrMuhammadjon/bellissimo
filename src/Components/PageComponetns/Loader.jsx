import React from 'react'

const Loader = () => {
    console.log('ishaldi');

    return (
        <div className="fixed inset-0 bg-white bg-opacity-70 z-[9999] flex items-center justify-center">
            <div className="flex flex-col items-center">
                <img
                    src="https://bellissimo.uz/android-chrome-192x192.png"
                    alt="Bellissimo Logo"
                    className="w-16 h-16 animate-bounce mb-2"
                />
                <h1 className="text-green-600 font-bold text-lg animate-pulse">Yuklanmoqda...</h1>
            </div>
        </div>
    )
}

export default Loader
