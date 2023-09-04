import React from 'react';
import { Provider } from 'react-redux';

import { persistor, store } from './src/store/store';
import Navigator from './src/navigation/navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { PaperProvider } from 'react-native-paper';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <PaperProvider>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
