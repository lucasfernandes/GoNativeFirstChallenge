import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
  },
  text: {
    fontSize: 12,
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 3,
  },
  author: {
    color: '#999',
    marginBottom: 11,
  },
  textContainer: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 11,
  },
  description: {
    color: '#666',
    lineHeight: 19,
  },
  firstPostDefault: {
    marginTop: 0,
  },
  firstPost: {
    marginTop: 20,
  },
});
