
import "./App.css";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Checkbox } from "./components/ui/checkbox";
import { Button } from "./components/ui/button";
function App() {
  return (
    <>
      <div className="">
        <div className="text-left">
          <h2 className="font-bold text-4xl">Contact Us</h2>
        </div>
       
        <div className="">
          <form action="">
            <div className="flex flex-row gap-4 items-start text-left pt-4">
              <div className="">
                <Label className="text-xs">First Name <span className="h-2 w-3"></span></Label>
                <Input type="text" />
              </div>
            
              <div>
                <Label className="text-xs">Last Name</Label>
                <Input type="text" />
              </div>
            </div>

            <div className="text-left pt-4 ">
              <Label htmlFor="email" className="text-xs">
                Email Address
              </Label>
              <Input type="text" />
            </div>

            <div className="flex text-sm font-medium pt-4 ">
              <p className="pb-4 text-xs">Query Type</p>
            </div>
            <RadioGroup name="myRadioGroup">
              <div className="flex justify-around gap-4">
                <div className="flex items-center gap-2 border-2 border-gray-100 w-full p-3 rounded-md">
                  <RadioGroupItem
                    value="general-enquiry"
                    id="general-enquiry"
                    className="rounded-sm bg-white p-1"
                  />
                  <Label className="text-xs">General Enquiry</Label>
                </div>
                <div className="flex items-center gap-2 border-2 border-gray-100 w-full p-3 rounded-md">
                  <RadioGroupItem
                    value="support-request"
                    id="support-request"
                    className="rounded-sm bg-white p-1"
                  />
                  <Label className="text-xs">Support Request</Label>
                </div>
              </div>
            </RadioGroup>

            <div className="flex flex-col items-start pt-4 gap-2">
              <Label className="text-xs">Message</Label>
              <Input type="text" />
            </div>

          
            <div className="flex gap-4 pt-4">
              <Checkbox id="terms1" className="rounded-sm bg-white p-1" />
              <div className="flex items-center">
                <label  htmlFor="terms1" className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I consent to being contacted by the team 
                </label>
              </div>
            </div>
            <div className="flex w-full pt-4">
              <Button type="submit" className="w-full bg-[#0c7d69] text-white hover:bg-green-600">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;