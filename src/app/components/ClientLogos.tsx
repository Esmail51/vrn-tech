import React from 'react';
import wellsfargoImg from '../../imports/wellsfargo.png';
import bofaImg from '../../imports/bofa.png';
import barclaysImg from '../../imports/barclays.png';
import amexImg from '../../imports/amex.png';
import usaaImg from '../../imports/usaa.png';
import metlifeImg from '../../imports/metlife.png';
import oncorImg from '../../imports/oncor.png';
import pncImg from '../../imports/pnc.png';
import truistImg from '../../imports/truist.png';
import attImg from '../../imports/att.png';
import tmobileImg from '../../imports/tmobile.png';
import googleImg from '../../imports/google.png';

export interface ClientLogo {
  id: string;
  name: string;
  src: string;
  alt: string;
  Component?: React.ComponentType<{ className?: string }>;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: 'wellsfargo',
    name: 'Wells Fargo',
    src: wellsfargoImg,
    alt: 'Wells Fargo logo',
    Component: ({ className }) => (
      <img
        src={wellsfargoImg}
        alt="Wells Fargo logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'bofa',
    name: 'Bank of America',
    src: bofaImg,
    alt: 'Bank of America logo',
    Component: ({ className }) => (
      <img
        src={bofaImg}
        alt="Bank of America logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'barclays',
    name: 'Barclays',
    src: barclaysImg,
    alt: 'Barclays logo',
    Component: ({ className }) => (
      <img
        src={barclaysImg}
        alt="Barclays logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'amex',
    name: 'American Express',
    src: amexImg,
    alt: 'American Express logo',
    Component: ({ className }) => (
      <img
        src={amexImg}
        alt="American Express logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'usaa',
    name: 'USAA',
    src: usaaImg,
    alt: 'USAA logo',
    Component: ({ className }) => (
      <img
        src={usaaImg}
        alt="USAA logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'metlife',
    name: 'MetLife',
    src: metlifeImg,
    alt: 'MetLife logo',
    Component: ({ className }) => (
      <img
        src={metlifeImg}
        alt="MetLife logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'oncor',
    name: 'Oncor',
    src: oncorImg,
    alt: 'Oncor logo',
    Component: ({ className }) => (
      <img
        src={oncorImg}
        alt="Oncor logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'pnc',
    name: 'PNC',
    src: pncImg,
    alt: 'PNC logo',
    Component: ({ className }) => (
      <img
        src={pncImg}
        alt="PNC logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'truist',
    name: 'Truist',
    src: truistImg,
    alt: 'Truist logo',
    Component: ({ className }) => (
      <img
        src={truistImg}
        alt="Truist logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'att',
    name: 'AT&T',
    src: attImg,
    alt: 'AT&T logo',
    Component: ({ className }) => (
      <img
        src={attImg}
        alt="AT&T logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'tmobile',
    name: 'T-Mobile',
    src: tmobileImg,
    alt: 'T-Mobile logo',
    Component: ({ className }) => (
      <img
        src={tmobileImg}
        alt="T-Mobile logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
  {
    id: 'google',
    name: 'Google',
    src: googleImg,
    alt: 'Google logo',
    Component: ({ className }) => (
      <img
        src={googleImg}
        alt="Google logo"
        loading="lazy"
        className={className || "max-h-7 max-w-[105px] w-auto h-auto object-contain"}
      />
    ),
  },
];
