import React from 'react';
import { MobileNav } from './components/mobile-nav';

const navigation = {
  name: 'test',
  menu: [{ name: 'sub', pageSlug: '/', children: [] }],
};
function App() {
  return <MobileNav data={navigation} />;
}

export default App;
