import './App.css'
import Scout from './ScoutEP_Logo2.png'
import generatePDF from './PdfObject'

function App() {
  return (
    <div className='App'>
      <button onClick={() => generatePDF()}>Generate PDF</button>
      {/* {generatePDF()} */}
    </div>
  )
}

export default App
