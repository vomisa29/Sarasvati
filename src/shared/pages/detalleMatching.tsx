import { InfoMatching } from "@/shared/ui/infoMatching";
import Card from "@/shared/ui/Card";

export default function DetalleMatching() {
  return (
    <div className="bg-gray-500 grid grid-cols-2 h-screen flex justify-evenly">
      <div className="flex justify-center items-center">
        <Card index={0} img="/mainpage3.jpg" title="Evento 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut lobortis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>  
      </div>
      
      <InfoMatching/>
    </div>
  );
}