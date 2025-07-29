import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, afterEach } from 'vitest';
import Contact from './Contact';

afterEach(() => {
  vi.restoreAllMocks(); // Reset mocks after each test
});

describe('Contact Component', () => {
  test('renders contact form heading', () => {
    render(<Contact />);
    const heading = screen.getByText(/Contact Me/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders all input fields', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Message/i)).toBeInTheDocument();
  });

  test('submits the form successfully', async () => {
    // mock successful fetch
    vi.stubGlobal('fetch', () =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText(/Your Name/i), {
      target: { value: 'Scud' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Your Email/i), {
      target: { value: 'scud@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Your Message/i), {
      target: { value: 'This is a test.' },
    });

    fireEvent.click(screen.getByText(/Send Message/i));

    await waitFor(() =>
      expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument()
    );
  });
});
