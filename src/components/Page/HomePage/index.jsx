import React from 'react'
import { TitleSection } from '../../TitleSection'
import { BooksSection } from '../../BooksSection'
import { DefaultTemplate } from '../../DefaultTemplate'

export const HomePage = () => {
  return (
    <DefaultTemplate>
        <TitleSection />
        <BooksSection />

    </DefaultTemplate>
  )
}
