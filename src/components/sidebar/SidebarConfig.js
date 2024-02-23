import {AiFillCompass, AiFillHeart, AiFillHome, AiFillPlusCircle, AiOutlineCompass, AiOutlineHeart, AiOutlineHome, AiOutlineMacCommand, AiOutlinePlusCircle, AiOutlineSearch} from "react-icons/ai"
import { FaPaperPlane, FaRegPaperPlane } from "react-icons/fa"
import { CgProfile } from "react-icons/cg";

export const menu=[
    {title: "홈" , icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome> , activeIcon: <AiFillHome className="text-2xl mr-5"></AiFillHome> },
    {title: "검색", icon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch> , activeIcon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>},
    {title: "탐색", icon: <AiOutlineCompass className="text-2xl mr-5"></AiOutlineCompass>, activeIcon: <AiFillCompass className="text-2xl mr-5"></AiFillCompass>},
    {title: "메시지", icon: <FaRegPaperPlane className="text-2xl mr-5"></FaRegPaperPlane> ,activeIcon: <FaPaperPlane className="text-2xl mr-5"></FaPaperPlane>},
    {title: "알림", icon:<AiOutlineHeart className="text-2xl mr-5"></AiOutlineHeart>, activeIcon: <AiFillHeart className="text-2xl mr-5"></AiFillHeart>},
    {title: "만들기", icon: <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>, activeIcon: <AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>},
    {title: "프로필", icon: <CgProfile className="text-2xl mr-5"></CgProfile>, activeIcon: <CgProfile className="text-2xl mr-5"></CgProfile>}
]