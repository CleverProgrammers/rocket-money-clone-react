// Importing the stylesheet for the App component
import './App.css'

// Importing the Main component
import Main from './components/Main/Main'

// Importing the SideBar component
import SideBar from './components/Sidebar/SideBar'

// The App component, which is the root component of the application
function App() {
  return (
    // The main container of the App component
    <div className='App'>
      {/* Render the SideBar component */}
      <SideBar />

      {/* Render the Main component */}
      <Main />
    </div>
  )
}

// Exporting the App component
export default App
