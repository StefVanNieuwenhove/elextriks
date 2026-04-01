import { ServiceContent } from '@/lib/types';
import React from 'react';

const ServicesCard = ({ title, description, image }: ServiceContent) => {
  return (
    <div
      className='win-window'
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Win2000 title bar */}
      <div className='win-titlebar' style={{ fontSize: '11px' }}>
        <span>&#128295;</span>
        <span>{title}</span>
      </div>

      {/* Image in inset frame */}
      <div
        className='win-inset'
        style={{
          margin: '6px',
          overflow: 'hidden',
          position: 'relative',
          height: '160px',
        }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* Clone image element with full-cover fill */}
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}>
            {React.cloneElement(image as React.ReactElement, {
              style: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              },
              fill: undefined,
              width: 400,
              height: 160,
            })}
          </div>
        </div>
      </div>

      {/* Description list */}
      <div
        style={{
          padding: '6px 10px',
          backgroundColor: '#d4d0c8',
          flex: 1,
        }}>
        <ul
          style={{
            margin: 0,
            paddingLeft: '16px',
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontSize: '11px',
            color: '#000000',
            lineHeight: '1.7',
          }}>
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Status bar */}
      <div className='win-statusbar'>
        <span style={{ fontSize: '11px', color: '#444' }}>Gereed</span>
      </div>
    </div>
  );
};

export default ServicesCard;
