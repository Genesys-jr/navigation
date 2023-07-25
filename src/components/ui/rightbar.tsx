
import Image from "next/image";
import logo from '../../../public/menu.svg'


const navigation = ({}) => {
  return (
    <div>
      <div>
        <Image src={"/public/menu.svg"} alt={""}width={20} height={20} className="object-contain " />
      </div>
    </div>
  );
};

export default navigation;
