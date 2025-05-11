import React from 'react';
import { twMerge } from 'tailwind-merge';

function TshirtForm({ styles, register, handleImageUpload, text, setText }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          placeholder="Height (cm)"
          {...register('height', { required: true })}
          className={twMerge('px-4 py-2 rounded', styles.input)}
        />
        <input
          placeholder="Weight (kg)"
          {...register('weight', { required: true })}
          className={twMerge('px-4 py-2 rounded', styles.input)}
        />
        <select {...register('build')} className={twMerge('px-4 py-2 rounded', styles.input)}>
          <option value="lean">Lean</option>
          <option value="regular">Regular</option>
          <option value="athletic">Athletic</option>
          <option value="big">Big</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">Upload T-Shirt Design</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="block rounded border" />
      </div>

      <div>
        <label className="block mb-1">Text to print (max 3 lines)</label>
        <textarea
          maxLength={200}
          rows={3}
          placeholder="Type text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={twMerge('w-full px-4 py-2 rounded resize-none', styles.input)}
        ></textarea>
      </div>
    </>
  );
}

export default TshirtForm;