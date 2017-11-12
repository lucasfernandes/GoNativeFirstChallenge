import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

// Styles
import styles from './styles';

// Header & Post
import Header from './components/Header';
import Post from './components/Post';

// Reactotron
import './config/ReactotronConfig';

// Usage
console.tron.log('Usando o REACTOTRON');


export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Lucas Silveira',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 1,
        title: 'Aprendendo bastante de React Native',
        author: 'Lucas Silveira',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Lucas Silveira',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  }
  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          { posts.map((post, index) => <Post key={post.id} post={post} index={index} />) }
        </ScrollView>
      </View>
    );
  }
}

