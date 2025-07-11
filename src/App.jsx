
import './App.css'
import CodingCommunity from './component/CodingCommunity';
import Hero from './component/Hero';
import JobCompanies from './component/JobCompanies';
import Navbar from './component/Navbar';
import NewPlacementSection from './component/NewPlacementSection';
import SelectedStudent from './component/SeclectedStudent';

function App() {
 

  return (
    <>

    <Navbar></Navbar>
    <Hero></Hero>
    <CodingCommunity></CodingCommunity>
    <NewPlacementSection></NewPlacementSection>
    <JobCompanies></JobCompanies>
    <SelectedStudent></SelectedStudent>
   
      
    </>
  )
}

export default App;
