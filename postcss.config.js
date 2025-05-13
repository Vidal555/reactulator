/** @type {import('postcss').Config} */
export default {
  plugins: {
    "@tailwindcss/postcss": {}, //  ⬅️  התוסף החדש
    autoprefixer: {},           //  נשאר כרגיל
  },
};
