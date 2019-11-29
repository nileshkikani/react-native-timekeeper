// @flow
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  halfCircle: {
    backgroundColor: '#f00',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    position: 'absolute',
    top: 0,
  },
  innerCircle: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  leftWrap: {
    position: 'absolute',
    top: 0,
  },
  outerBeaterAnimation: {
    left: 0,
    position: 'absolute',
    top: 0,
  },
  outerCircle: {
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
  },
})
