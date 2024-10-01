import { Grid, GridItem } from "@chakra-ui/react"
import DashBoardLayout from "../../Components/DashBoardLayout"
import PortFolioSection from "./Components/PortFolioSection"
import PriceSection from "./Components/PriceSection"
import Transaction from "./Components/Transaction"
import InfoCard from "./Components/InfoCard"


const Dashboard = () => {
  return (
   
      <DashBoardLayout title="Dashboard" >
     <Grid
       gridTemplateColumns={{
          base:"repeat(1,1fr)",
          xl:"repeat(2,1fr)",
       }}
       gap="6"
     >
      <GridItem colSpan={
      {
        base:1,
        xl:2,
      }}>
      <PortFolioSection/>
      </GridItem>
      <GridItem colSpan={1}>
      <PriceSection/>
      </GridItem>
      <GridItem colSpan={1}>
      <Transaction/>
      </GridItem>
      <GridItem colSpan={1}>
      <InfoCard imgUrl="/public/dot_bg.svg" 
       tagText="Loan"
       inverted={false}
        text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
      />
      </GridItem>
      <GridItem colSpan={1}>
      <InfoCard imgUrl="/public/grid_bg.svg"
        tagText="Contact"
        inverted={true}
        text="Learn more about our real estate, mortgage, and  corporate account services"

      />
      </GridItem>
     </Grid>
  
      </DashBoardLayout>
  )
}

export default Dashboard
