'use client';

export default function Navigation({ onNavigate }) {
  return (
    <nav>
      <button onClick={() => onNavigate('home')}>Home</button>
      <button onClick={() => onNavigate('course')} style={{ marginLeft: '10px' }}>Course</button>
      <button onClick={() => onNavigate('contact')} style={{ marginLeft: '10px' }}>Contact</button>
    </nav>
  );
}
