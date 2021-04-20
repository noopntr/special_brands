import React from 'react';
import { Translation } from 'react-i18next';

export function TranslatedAboutTitle() {
  return (
    <Translation>
      {
        (t, { i18n }) => <div className="title"><h1>{t('About.title')}</h1></div>
      }
    </Translation>
  )
}