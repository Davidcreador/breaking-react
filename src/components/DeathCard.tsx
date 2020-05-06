import React from 'react'
import { DeathType } from "../types";

const DeathCard = ({ death }: { death: DeathType }): JSX.Element => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex items-center px-3 py-3 bg-gray-900">
        <h2 className="mx-3 text-white font-semibold text-lg">Death: {death.death}</h2>
      </div>
      <div className="py-4 px-6">
        <h3 className="text-2xl font-semibold text-gray-800">Cause: {death.cause}</h3>
        <h3 className="text-2xl font-semibold text-gray-800">Responsible: {death.responsible}</h3>
        <p className="py-2 text-lg text-gray-700">Last Words: {death.last_words}</p>
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
          </svg>
          <h1 className="px-2 text-sm">Season: {death.season}</h1>
        </div>
      </div>
    </div>
  )
}

export default DeathCard;
