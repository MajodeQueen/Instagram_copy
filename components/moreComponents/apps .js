import { useState } from "react";
import Active from "./active";
import Expired from "./expired";
import Removed from "./removed";
import Websites from "./websites";

const contbz = [
  {
    name: 'Active',
    state: { active: true },
    id: 'active',
  },
  {
    name: 'Expired',
    state: { expired: true },
    id: 'expired',
  },
  {
    name: 'Removed',
    state: { removed: true },
    id: 'removed',
  },
];
export default function WebPage() {
  const defaultState = {
    active: false,
    expired: false,
    removed: false,
  };
  const [contab, contabState] = useState({
    ...defaultState,
    active: true,
  });

  const TabList = () => {
    if (contab?.active) {
      return <Active/>;
    } else if (contab?.expired) {
      return <Expired />;
    } else if (contab?.removed) {
      return <Removed />;
    }
  };
  const Tabz = (clickedTab) => {
    contabState({ ...defaultState, ...clickedTab });
  };
  return(
    <Websites contab={contab} Tabz={Tabz} contbz={contbz}>
        <TabList/>
    </Websites>
  )
}

