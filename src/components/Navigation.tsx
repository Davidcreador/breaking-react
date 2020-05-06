import React from "react";
import {
  Link
} from "react-router-dom";

const Navigation = () => (
  <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <div className="container mx-auto flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-between">
      <div className="mb-2 sm:mb-0">
        <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
          HOME
        </Link>
      </div>
      <div>
        <Link to="/episodes" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
          EPISODES
        </Link>
      </div>
    </div>
  </nav>
)

export default Navigation
