import { useState } from 'react';
import './App.css'

function App() {
  const [bankai, setBankai] = useState('Tensa Zangetsu')

  const RandomElement = ()=> {
    const arr = [
      'Tensa Zangetsu',
      'Senbonzakura Kageyoshi',
      'Zanka no Tachi',
      'Soo Zabimaru',
      'Tekken Tachikaze',
      'Konjiki Ashisogi Jizo',
      'Daiguren Hyorinmaru',
      'Minazuki',
      'Mukojochu Muramasa',
      'Ryumon Hozukimaru',
      'Jakuho Raikoben',
      'Kamishini no Yari',
      'Kokujo Tengen Myo’o',
      'Kinshara Butōdan',
      'Katen Kyokotsu: Karamatsu Shinju',
      'Kannonbiraki Benihime Aratame',
      'Hakka no Togame',
      'Raika Goen Kaku',
      'Suzumushi Tsuishiki: Enma Kōrogi',
      'Koko Gonryou Rikyu',
      'Tekken Tachikaze'
    ];
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomElement);
    setBankai(randomElement)

  }

  return (
    <div className="App">
      <div className=''>
        <p>
          {bankai}
        </p>
      </div>
      <button className='btn-no-jutsu' onClick={RandomElement}>Bankai</button>
    </div>
  )
}

export default App
