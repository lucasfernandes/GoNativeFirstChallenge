import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from './styles';

const Post = ({ post }) => (
  <View style={[styles.container, styles.shadow]}>
    <Text style={[styles.text, styles.title]}>{post.title}</Text>
    <Text style={[styles.text, styles.author]}>{post.author}</Text>
    <View style={styles.textContainer}>
      <Text style={[styles.text, styles.description]}>{post.description}</Text>
    </View>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Post;
