import * as React from 'react';
import 'react-native-gesture-handler';
import Navigation from './navigation';
import { UserProvider } from './providers/userProvide';


export default function App() {


  return (<UserProvider>

<Navigation />
  </UserProvider>

  );




}


// 

