/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            colors: {
                'themes-black-100': 'var(--themes-black-100)',
                'themes-black-20': 'var(--themes-black-20)',
                'themes-black-40': 'var(--themes-black-40)',
                'themes-black-5': 'var(--themes-black-5)',              
                primary: '#112D4E',
                secondary: '#DBE2EF',
                third: '#F9F7F7',
                fourth: '#0688B4',
                fifth: '#CBF1F5',
                sixth: '#0688B4',
                bgColor: '#F7F9FB',
                textColor: '#0B192C',
            },
            fontFamily: {
                '14-regular': 'var(--14-regular-font-family)',
            },
        },
    },
    plugins: [],
};
