import React from 'react';
import { twMerge } from 'tailwind-merge';

function PreviewBox({ uploadedImage, text, styles }) {
  return (
    <div className={twMerge('mt-10 p-6 rounded shadow-md w-full max-w-md mx-auto text-center', styles.preview)}>
      <div className="relative w-full h-60 flex items-center justify-center border border-dashed">
        {uploadedImage ? (
          <img src={uploadedImage} alt="preview" className="max-h-full max-w-full object-contain" />
        ) : (
          <span className="text-sm text-gray-500">Image Preview</span>
        )}
        {text && (
          <div className="absolute inset-0 flex items-end justify-center p-2 text-center text-xl font-semibold">
            <p className="whitespace-pre-line">{text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreviewBox;