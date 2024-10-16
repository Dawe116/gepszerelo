import './App.css';
import React, {useState} from 'react';

 export const App =() => {

  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);
  const [motherboard, setMotherboard] = useState(null);

  const motherboards =[
    {name: 'Asus', price: 30000},
    {name: 'MSI', price: 35000},
    {name: 'Gigabyte', price: 40000},
    {name: 'Intel', price: 45000},
  ]

  const processors = [
  {name: 'Intel Core i7', price: 86000},
  {name: 'AMD Ryzen 5', price: 62000},
  {name: 'AMD Ryzen 7', price: 78000},
  {name: 'Intel Core i5', price: 54000}];

  const memories = [
    {name: '4GB', price: 10000},
    {name: '8GB', price: 20000},
    {name: '16GB', price: 30000},
    {name: '32GB', price: 40000},
  ];
  
  const totalPrice = (processor?.price || 0) + (memory?.price || 0) + (motherboard?.price || 0);
  return (
      <div>
        <h2>Számítógép összeszerelő app</h2>
        <ComponentSelector
          name="Processzor"
          options={processors}
          selectedOption={processor}
          onSelect={setProcessor}
        />

        <ComponentSelector
          name="Memória"
          options={memories}
          selectedOption={memory}
          onSelect={setMemory}
        />

<ComponentSelector
          name="Motherboard"
          options={motherboards}
          selectedOption={motherboard}
          onSelect={setMotherboard}
        />

        <p>
          Teljes ár: {totalPrice} Ft
        </p>
      </div>
    
  );
}

const ComponentSelector = ({name, options, selectedOption, onSelect}) => {
  return(
    <div>
      <h3>{name}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          style={{
            backgroundColor: selectedOption?.name === option.name ? 'lightgreen' : 'lightgrey',
            margin: '5px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
          }}>{option.name} - {option.price} Ft</button>


      ))}
    </div>
  )



}

export default App;
