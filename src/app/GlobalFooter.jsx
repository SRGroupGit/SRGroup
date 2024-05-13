'use client';
import React from 'react';

import { useState } from 'react';

export default function GlobalFooter() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setName('');
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type='submit' onClick={handleSubmit}>
        Send
      </button>
    </form>
  );
}
