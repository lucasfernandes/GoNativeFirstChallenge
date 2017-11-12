import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Helvetica',
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
  shadow: {
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
  },
});
