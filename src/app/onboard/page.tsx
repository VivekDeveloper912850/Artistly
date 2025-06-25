'use client';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  fee: yup.string().required('Fee is required'),
  location: yup.string().required('Location is required'),
});

const categories = ['Singer', 'Dancer', 'Speaker', 'DJ'];
const languages = ['Hindi', 'English', 'Marathi', 'Tamil'];

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const onSubmit = (data: any) => {
    const existing = JSON.parse(localStorage.getItem('artistSubmissions') || '[]');
    const updated = [...existing, data];
    localStorage.setItem('artistSubmissions', JSON.stringify(updated));
    alert('✅ Artist onboarded successfully!');
    reset();
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">🎨 Artist Onboarding</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow-lg p-6 rounded-xl">

          <div>
            <label className="block font-medium">🎤 Name</label>
            <input {...register('name')} className="input" placeholder="Enter artist's name" />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>

          <div>
            <label className="block font-medium">📄 Bio</label>
            <textarea {...register('bio')} rows={3} className="input" placeholder="Short artist bio" />
            <p className="text-red-500 text-sm">{errors.bio?.message}</p>
          </div>

          <div>
            <label className="block font-medium">🎭 Category</label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <input type="checkbox" value={cat} {...register('category')} />
                  {cat}
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm">{errors.category?.message}</p>
          </div>

          <div>
            <label className="block font-medium">🗣️ Languages Spoken</label>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <label key={lang} className="flex items-center gap-2">
                  <input type="checkbox" value={lang} {...register('languages')} />
                  {lang}
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm">{errors.languages?.message}</p>
          </div>

          <div>
            <label className="block font-medium">💰 Fee Range</label>
            <select {...register('fee')} className="input">
              <option value="">Select Fee Range</option>
              <option value="₹0 - ₹10,000">₹0 - ₹10,000</option>
              <option value="₹10,001 - ₹20,000">₹10,001 - ₹20,000</option>
              <option value="₹20,001+">₹20,001+</option>
            </select>
            <p className="text-red-500 text-sm">{errors.fee?.message}</p>
          </div>

          <div>
            <label className="block font-medium">📍 Location</label>
            <input {...register('location')} className="input" placeholder="Enter city name" />
            <p className="text-red-500 text-sm">{errors.location?.message}</p>
          </div>

          <div>
            <label className="block font-medium">🖼️ Profile Image (Optional)</label>
            <input type="file" className="block mt-2" />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ✅ Submit Artist
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
