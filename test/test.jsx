import { useContext } from 'react';

const UserContext = React.createContext({});

export default UserContext.Provider;

const context = useContext(usercontex);
