import {StyleSheet} from 'react-native';

export const stylesGlobal = StyleSheet.create({
  body: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
  },

  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  containerMenu: {
    marginTop: 30,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  menuImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  menuContainerOptions: {
    gap: 10,
    marginVertical: 20,
    marginHorizontal: 20,
  },

  buttonMenu: {
    // backgroundColor: 'red',
    paddingVertical: 10,
  },
});
