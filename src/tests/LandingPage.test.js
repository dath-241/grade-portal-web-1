import React, { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LandingPage from '../pages/LandingPage/LandingPage';

describe('Landing Page', () => {
    test('renders the main title', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <LandingPage />
                </BrowserRouter>,
            );
        });
        const aboutHeading = screen.getByText(/Hệ thống tra cứu điểm/i);
        expect(aboutHeading).toBeInTheDocument();
    });

    //   test('renders the programs link', () => {
    //     render(<Landing />);
    //     const programsLink = screen.getByRole('link', { name: /login/i });
    //     expect(programsLink).toBeInTheDocument();
    //     expect(programsLink).toHaveAttribute('href', '/login');
    //   });
});
