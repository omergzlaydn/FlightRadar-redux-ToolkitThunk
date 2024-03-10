import { useSelector } from "react-redux"


const Header = () => {

 const state = useSelector((store) => store)

 console.log(state);

  return (
    <header>
        <div>
            <img src="/pl1.png" />
            <h3>Flight Radar</h3>
        </div>


        <p>
         {
          state.isLoading ? "Flights are being calculated..."
          : state.isError ? "There is a problem"
          : state.flights.length + " Flight Found"
         } 
        </p>
    </header>
  )
}

export default Header