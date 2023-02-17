import React from 'react'
import Search from '../SearchPage'
import Filter from '../FilterPage'

const HomePage = ({movies,handleFilter}) => {
    const[search,setSearch]=React.useState('')
    console.log(movies)
    console.log(search)

    const data=movies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <div className='flex flex-row bg-gray-900 justify-end'>
                <Filter handleFilter={handleFilter}/>
                <Search setSearch={setSearch}/>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {data.map((product) => (
                            <div key={product.id}>
                                <div className="relative">
                                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                        <img
                                            src={product.poster}
                                            alt="Poster"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="relative mt-4 flex justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">{product.genre}</h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.year}</p>
                                    </div>
                                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                        />
                                        <p className="relative text-lg font-semibold text-white">{product.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage