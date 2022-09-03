import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiFishingBoat } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsCompass } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs"

export const CardData = [
  {
    id: 1,
    icon: <SiDatabricks color="red" size={22} />,
    heading: "ELog Book",
    text: "Fisherman can enter the daily catch records very easily from this Application.",
  },
  {
    id: 2,
    icon: <GiFishingBoat sx={{ fontSize: 15 ,alignItems:'center'}} />,
    heading: "Departure Approval",
    text: "Karadiya Mobile provide facility for get Departure Approval quickly ",
  },
  {
    id: 3,
    icon: <TiWeatherPartlySunny sx={{ fontSize: 15 ,alignItems:'center'}} />,
    heading: "Nara Prediction",
    text: "Fishermen can get weather forecasting details very efficiently before fishing.It is very useful feature for the fishermen.",
  },
  {
    id: 4,
    icon: <BsCompass sx={{ fontSize: 15 ,alignItems:'center'}} />,
    heading: "Compass",
    text: "Within the Compass feature fishermen can see the  direction in th sea",
  },
  {
    id: 5,
    icon: <BsFillPinMapFill sx={{ fontSize: 15 ,alignItems:'center'}} />,
    heading: "Way Points Map",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae veniam dolorum repellendus obcaecati minus voluptas neque dolore similique.",
  },
];
