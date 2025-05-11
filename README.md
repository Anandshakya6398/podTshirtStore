# 🧥 T-Shirt Customizer

A modern React-based single-page app that allows users to customize their T-shirts visually with text and design uploads. Switch between three UI themes, enter body measurements, preview in real-time, and enjoy a slick experience powered by Tailwind CSS and React Hook Form.

![Preview Screenshot]() <!-- Replace this with your actual screenshot filename -->

---

## ✨ Features

- 🎨 **Live Design Preview** with uploaded image and text overlay
- 👕 **Form with Height, Weight, Build** selector
- 🖼️ **Image Upload Support**
- 🌈 **Three Style Presets** — press `Alt + Q` to cycle
- 🎯 **Text Area Limited to 3 Lines (200 chars max)**
- 🧠 Powered by **React**, **Tailwind CSS**, **React Hook Form**, and `tailwind-merge`

---

## 📁 Project Structure

```bash
src/
│
├── App.jsx                  # Main app component
├── components/
│   ├── TshirtForm.jsx       # Handles form UI and inputs
│   └── PreviewBox.jsx       # Displays preview of uploaded image + text
└── constants/
    └── stylePresets.js      # Theme/style definitions with default values

git clone https://github.com/your-username/tshirt-customizer.git
cd tshirt-customizer
npm install
npm run dev
npm run build
