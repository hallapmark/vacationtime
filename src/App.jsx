import React from 'react';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen space-y-8 p-8">
      <h1 className="text-3xl font-bold">VacationTime Theme Showcase</h1>

      {/* Primary Button */}
      <button className="bg-primary text-primary-foreground rounded-md px-4 py-2">
        Primary Buttonnn
      </button>

      {/* Secondary Button */}
      <button className="bg-secondary text-secondary-foreground rounded-md px-4 py-2">
        Secondary Button
      </button>

      {/* Accent Button */}
      <button className="bg-accent text-accent-foreground rounded-md px-4 py-2">
        Accent Button
      </button>

      {/* Card */}
      <div className="bg-muted text-muted-foreground rounded-lg p-6 shadow-md">
        <h2 className="mb-2 text-xl font-semibold">Card Title</h2>
        <p>This is a muted card to demonstrate background and foreground contrast.</p>
      </div>

      {/* Inline Text */}
      <p>
        Background: <span className="bg-background rounded px-2 py-1">background</span> |
        Foreground: <span className="text-foreground">foreground</span> | Primary:{' '}
        <span className="text-primary">primary</span> | Secondary:{' '}
        <span className="text-secondary">secondary</span> | Accent:{' '}
        <span className="text-accent">accent</span>
      </p>
    </div>
  );
}

export default App;
