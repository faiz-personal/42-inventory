import LoginButton from "~/_components/login-button";
import LandingHero from "~/_components/landing-hero";
import TopBar from "~/_components/topbar";
import Input from "~/_components/input";
import Select from "~/_components/select";
import Card from "~/_components/card";
import Timer from "~/_components/timer";
import ProductTable from "~/_components/product-inventory";
import SuppliesTable from "~/_components/supplies-inventory";

export default function HomePage() {
  return (
    <main className="flex h-[100%] flex-col items-center justify-start to-[#0B1215] text-white">
      
      <TopBar
        page={['Contact', 'About']}
        collapsed={false}
        logoUrl={"/42-logo.svg"}
      ></TopBar>

      { /**

      <div className='flex flex-col w-[100%] pl-[2em] gap-[20px] items-start justify-start'>

        <Select 
          text={'Placeholder'} 
          label={'Product'}
          options={['Knit Jersey', 'T-Shirt', 'All Product']}
        ></Select>

        <Input text={"Ex. 1000"} label={'Total Units'} name="totalUnits"></Input>

      </div>

      */}

      <div className="flex flex-col md:flex-row justify-center gap-4 p-10 w-full">

        {/* Left Column */}

        <div className="flex flex-col w-full md:w-1/2 items-center justify-start gap-4">
          
          {/* Current Order Period Card */}

          <Card
            title="Current Order Period"
            centerAlign={true}
            content={""}
            darkMode={false}
          >
            
            <Timer targetDate="2024-06-31"></Timer>
          
          </Card>

          {/* Order Queue Card */}

          <Card
            title="Order Queue"
            centerAlign={false}
            content={""}
            darkMode={false}
          >

            <ProductTable products={[{ 
              itemName: "Knit Jamaica Jersey", 
              totalQuantity: 300, 
              sQuantity: 60, 
              mQuantity: 80, 
              lQuantity: 100, 
              xlQuantity: 40, 
              xxlQuantity: 20 ,
              rowColor: 'red'
            }]}/>

          </Card>

        </div>

        {/* Right Column */}

        <div className="flex flex-col w-full md:w-1/2 items-center justify-start gap-4">
          
          {/* Supplies Inventory Card */}

          <Card 
            title="Supplies" 
            centerAlign={false}
            content={""} 
            darkMode={false}
          >

            <SuppliesTable products={[
              { 
              itemName: "Newspapers", 
              totalQuantity: 1200, 
              supplier: "The Newspaper Club" 
              },
              { 
                itemName: "FOOTYTWO Green Stadium Boxes", 
                totalQuantity: 499, 
                supplier: "Stella Xu" 
              }
            ]}></SuppliesTable>

          </Card>

          {/* Products Inventory Card */}

          <Card 
            title="Products" 
            centerAlign={false}
            content={""} 
            darkMode={false}
          >
          
            <ProductTable products={[{ 
              itemName: "Knit Argentina Jersey", 
              totalQuantity: 150, 
              sQuantity: 30, 
              mQuantity: 40, 
              lQuantity: 50, 
              xlQuantity: 20, 
              xxlQuantity: 10 ,
              rowColor: 'green'
            }]}/>

          </Card>

        </div>

      </div>
      
      <div className="hidden flex flex-col items-center gap-[0.5em] w-[100vw]">

        <LoginButton text={'ENTER'}></LoginButton>
        <LoginButton gray={true} text={'INFO'}></LoginButton>

      </div>

    </main>
  );
}
