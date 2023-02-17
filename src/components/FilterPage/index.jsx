import React from 'react'
import { Disclosure} from '@headlessui/react'
import { FunnelIcon } from '@heroicons/react/20/solid'

const filters = {
  year: [
    { value: '2018', label: '2018', checked: false },
    { value: '2019', label: '2019', checked: false },
    { value: '2020', label: '2020', checked: false },
    { value: '2021', label: '2021', checked: false },
    { value: '2022', label: '2022', checked: false },
    { value: '2023', label: '2023', checked: false },

  ],

  genre: [
    { value: 'Action', label: 'Action', checked: false },
    { value: 'Drama', label: 'Drama', checked: false },
    { value: 'Documentary', label: 'Documentary', checked: false },
    { value: 'Sci-Fi', label: 'Sweatshirts', checked: false },
    { value: 'Horror', label: 'Horror', checked: false },
  ],
}


export default function Filter({handleFilter}) {
  const[year, setYear]=React.useState('')
  const[genre, setGenre]=React.useState('')
  function handleChange(e){
    setGenre(e.target.value)
    setYear(e.target.value)
    handleFilter(genre, year)
  }
  

  return (
    <div className="pr-10 bg-gray-900  ">
      <Disclosure
      >
        <div className="relative col-start-1 row-start-1 py-4">
          <Disclosure.Button className="group flex items-center font-medium text-white">
            <FunnelIcon
                  className="mr-2 h-5 w-10 flex-none text-white"
                  aria-hidden="true"
                />
                 Filter
          </Disclosure.Button>
        </div>
        <Disclosure.Panel className="border-t border-gray-200 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block text-white font-medium">Year</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.year.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center text-white sm:text-sm">
                      <input
                        onChange={handleChange}
                        id={`price-${optionIdx}`}
                        name="price[]"
                        // defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-white focus:ring-indigo-500"
                        defaultChecked={option.checked}
                      />
                      <label htmlFor={`price-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-white">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block text-white font-medium">Genre</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.genre.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center text-base sm:text-sm">
                      <input
                        onChange={handleChange}
                        id={`category-${optionIdx}`}
                        name="category[]"
                          // defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        defaultChecked={option.checked}
                      />
                      <label htmlFor={`category-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-white">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )

}
