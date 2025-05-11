import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
// import { stylePresets } from './constant/stylePresets';
import TshirtForm from './components/TshirtForm';
import PreviewBox from './components/PreviewBox';
import { stylePresets } from './constant/stylepresent';

function App() {
  const [styleIndex, setStyleIndex] = useState(0);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [text, setText] = useState('');

  const styles = stylePresets[styleIndex];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { height: styles.defaults.height, weight: styles.defaults.weight, build: 'athletic' } });

  const onSubmit = (data) => console.log('Form Submitted:', data);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.altKey && e.key === 'q') {
        const nextIndex = (styleIndex + 1) % stylePresets.length;
        setStyleIndex(nextIndex);
        const nextDefaults = stylePresets[nextIndex].defaults;
        reset({ height: nextDefaults.height, weight: nextDefaults.weight, build: 'athletic' });
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [styleIndex, reset]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={twMerge('min-h-screen p-6', styles.container)}>
      <h1 className="text-2xl font-bold mb-4">T-Shirt Customizer</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TshirtForm styles={styles} register={register} handleImageUpload={handleImageUpload} text={text} setText={setText} />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      <PreviewBox uploadedImage={uploadedImage} text={text} styles={styles} />

      <p className="mt-4 text-sm text-center opacity-60">Press <kbd className="px-2 py-1 bg-gray-300 rounded">Alt + Q</kbd> to switch style</p>
    </div>
  );
}

export default App;