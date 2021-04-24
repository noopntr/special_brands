import React from 'react';
import { Translation } from 'react-i18next';

export function TranslatedAboutContent() {
  return (
    <Translation>
      {
        (t, { i18n }) => 
        <div className="txt-content">
                <p dangerouslySetInnerHTML={{__html: t('AboutContent.part1', {company: 'Special Brands'})}}></p>
                <p dangerouslySetInnerHTML={{__html: t('AboutContent.part2', {company: 'Special Brands'})}}></p>
        </div>
      }
    </Translation>
  )
}