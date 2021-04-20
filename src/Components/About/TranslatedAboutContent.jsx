import React from 'react';
import { Translation } from 'react-i18next';

export function TranslatedAboutContent() {
  return (
    <Translation>
      {
        (t, { i18n }) => 
        <div className="title">
            <p>
                {t('AboutContent.part1')}
                {t('AboutContent.part2')}
                {t('AboutContent.part3')}
                {t('AboutContent.part4')}
                {t('AboutContent.part5')}
                {t('AboutContent.part6')}
                {t('AboutContent.part8')}
                {t('AboutContent.part9')}
                {t('AboutContent.part10')}
                {t('AboutContent.part11')}
                {t('AboutContent.part12')}
                {t('AboutContent.part13')}
                {t('AboutContent.part14')}
                {t('AboutContent.part15')}
            </p>
        </div>
      }
    </Translation>
  )
}