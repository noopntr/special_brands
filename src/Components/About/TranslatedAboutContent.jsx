import React from 'react';
import { Translation } from 'react-i18next';

export function TranslatedAboutContent() {
  return (
    <Translation>
      {
        (t, { i18n }) => 
        <div className="title">
            <p>
                {t('AboutContent', {company: 'Special Brands'})}
            </p>
        </div>
      }
    </Translation>
  )
}