import Posts from "@/components/profile/posts";
import ProfileComp from "@/components/profile/profileComp";
import Saved from "@/components/profile/saved";
import Tag from "@/components/profile/tag";
import { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineDatabase} from "react-icons/ai"
import { TbBuildingCottage } from "react-icons/tb";

const ptabz = [
  { 
    icon:<AiOutlineDatabase/>,
    name: 'POSTS', 
    state: { posts: true },
    id: 'posts',
  },
  {
    icon:<BsBookmark/>,
    name: 'SAVED',
    state: { saved: true },
    id: 'saved',
  },

  { 
    icon:<TbBuildingCottage/>,
    name: 'TAGGED',
    state: { tagged: true },
    id: 'tagged',
  },
];

export default function ProfilePage() {
  const defaultState = {
    posts: false,
    saved: false,
    tagged: false,
  };

  const [tab, tabState] = useState({
    ...defaultState,
    posts: true,
  });

  const TabList = () => {
    if (tab?.posts) {
      return <Posts/>;
    } else if (tab?.saved) {
      return <Saved />;
    } else if (tab?.tagged) {
      return <Tag />;
    } 
  };

  const Tab = (clickedTab) => {
    tabState({ ...defaultState, ...clickedTab });
  };
  return(
    <ProfileComp tab={tab} Tab={Tab} ptabz={ptabz}>
        <TabList/>
    </ProfileComp>
  )
}
