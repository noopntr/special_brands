import React from 'react';
import { Translation } from 'react-i18next';

export function TranslatedAboutContent() {
  return (
    <Translation>
      {
        (t, { i18n }) => 
        <div className="title">
            <p>
                <p dangerouslySetInnerHTML={{__html: t('AboutContent.part1', {company: 'Special Brands'})}}></p>
                <p dangerouslySetInnerHTML={{__html: t('AboutContent.part2', {company: 'Special Brands'})}}></p>
            </p>
        </div>
      }
    </Translation>
  )
}