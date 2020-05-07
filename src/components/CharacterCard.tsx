import React from 'react'
import { CharacterType } from "../types";

const CharacterCard = ({ character }: { character: CharacterType }): JSX.Element => {
  return (
    <div className="w-1/2 bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img className="w-full h-56 object-cover object-center" src={character.img} alt="avatar" />
      <div className="flex items-center px-3 py-3 bg-gray-900">
        <h2 className="mx-3 text-white font-semibold text-lg">Occupation: {character.occupation}</h2>
      </div>
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">Name: {character.name}</h1>
        <p className="py-2 text-lg text-gray-700">Birthday: {character.birthday}</p>
        <p className="py-2 text-lg text-gray-700">Portrayer: {character.portrayed}</p>
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
          </svg>
          <h1 className="px-2 text-sm">Status: {character.status}</h1>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard;
