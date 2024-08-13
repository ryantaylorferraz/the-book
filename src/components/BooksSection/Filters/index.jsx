import React from 'react'
import { SearchForm } from './SearchForm'
import { CategoryFilters } from './CategoryFilters'
import { PriceFilters } from './PriceFilters'

export const Filters = () => {
  return (
    <div>
        <SearchForm />
        <CategoryFilters />
        <PriceFilters />
        <button>Limpar filtro</button>
    </div>
  )
}
