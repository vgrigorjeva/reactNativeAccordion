import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    // provider can have only one single child component
    return (
        <Provider store={createStore(reducers)}>
            <View styel={{ flex: 1 }}>
                <Header headerText="Tech stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
