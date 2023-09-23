import Header from './components/Header'
import ResearchCards from './components/ResearchCards'
import DemoCarousel from './components/DemoCarousel'
import TextCarousel from './components/TextCarousel'

import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <ResearchCards />
    <DemoCarousel />
    <TextCarousel />
  </div>
)

export default App
