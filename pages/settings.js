import Ads from '@/components/moreComponents/Ads';
import Apps from '@/components/moreComponents/Apps ';
import ChangePwd from '@/components/moreComponents/ChangePwd ';
import EditProfile from '@/components/moreComponents/EditProfile';
import EmailNot from '@/components/moreComponents/EmailNot';
import EmailsInsta from '@/components/moreComponents/EmailsInsta';
import Help from '@/components/moreComponents/Help';
import LoginAct from '@/components/moreComponents/LoginAct';
import ManageConts from '@/components/moreComponents/ManageConts';
import Privacy from '@/components/moreComponents/Privacy ';
import PushNot from '@/components/moreComponents/PushNot';
import SettingsComp from '@/components/moreComponents/settingsComp';
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';

const tabz = [
  {
    name: 'Edit profile',
    state: { edit_profile: true },
    id: 'edit_profile',
  },
  {
    name: 'Change password',
    state: { change_password: true },
    id: 'change_password',
  },

  {
    name: 'Apps and websites',
    state: { apps: true },
    id: 'apps',
  },
  {
    name: 'Email notifications',
    state: { email_notifications: true },
    id: 'email_notifications',
  },
  {
    name: 'Push notifications',
    state: { push_notifications: true },
    id: 'push_notifications',
  },
  {
    name: 'Manage contacts',
    state: { manage_contacts: true },
    id: 'manage_contacts',
  },
  {
    name: 'Privacy and security',
    state: { privacy_security: true },
    id: 'privacy_security',
  },
  {
    name: 'Ads',
    state: { ads: true },
    id: 'ads',
  },
  {
    name: 'Login activity',
    state: { login_activity: true },
    id: 'login_activity',
  },
  {
    name: 'Emails from instagram',
    state: { emails_instagram: true },
    id: 'emails_instagram',
  },
  {
    name: 'Help',
    state: { help: true },
    id: 'help',
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USERINFO':
      return { ...state, userData: action.payload };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default function SettingsPage() {
  const defaultState = {
    edit_profile: false,
    change_password: false,
    apps: false,
    email_notifications: false,
    push_notifications: false,
    manage_contacts: false,
    privacy_security: false,
    ads: false,
    login_activity: false,
    emails_instagram: false,
    help: false,
  };

  const [tab, tabState] = useState({
    ...defaultState,
    edit_profile: true,
  });

  const [{ userData }, dispatch] = useReducer(reducer, {
    error: false,
  });

  const getUser = async () => {
    try {
      const { data } = await axios.get('/api/userdata');
      dispatch({ type: 'FETCH_USERINFO', payload: data });
    } catch (err) {
      console.log(err);
      dispatch({ type: 'FETCH_FAIL', payload: err });
    }
  };

  const [reinitializePage, setReinitializePage] = useState(true);

  useEffect(() => {
    if (reinitializePage === true) {
      getUser();
      setReinitializePage(false);
    }
  }, [reinitializePage]);

  const TabList = () => {
    if (tab?.edit_profile) {
      return <EditProfile userData={userData}  />;
    } else if (tab?.change_password) {
      return <ChangePwd />;
    } else if (tab?.apps) {
      return <Apps />;
    } else if (tab?.email_notifications) {
      return <EmailNot />;
    } else if (tab?.push_notifications) {
      return <PushNot />;
    } else if (tab?.manage_contacts) {
      return <ManageConts />;
    } else if (tab?.privacy_security) {
      return <Privacy />;
    } else if (tab?.ads) {
      return <Ads />;
    } else if (tab?.login_activity) {
      return <LoginAct />;
    } else if (tab?.emails_instagram) {
      return <EmailsInsta />;
    } else if (tab?.help) {
      return <Help />;
    }
  };

  const Tab = (clickedTab) => {
    tabState({ ...defaultState, ...clickedTab });
  };

  return (
    <SettingsComp tab={tab} Tab={Tab} tabz={tabz} userData={userData}>
      <TabList />
    </SettingsComp>
  );
}
