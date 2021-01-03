import {
  StyleSheet,

} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    flexWrap: 'nowrap',
  },
  tinyLogo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  //item:{alignItems: 'center' }
  //,

  textstyle: {
    margin: 4,
    paddingTop: 50,
    alignContent: 'center',
  },
  imageArea: {
    flex: 5,
    backgroundColor: 'green',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
  },
  taniticitextArea: {
    flex: 2,
    backgroundColor: 'green',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  textAreaFiyat: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  item: { width: 100, height: 170, padding: 4, flexDirection: 'column', alignSelf: 'flex-start' },
  itemContainer: {
    height: 190,

    backgroundColor: 'red',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap'

  },
  urunContainer: {
    width: '100%',

    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    backgroundColor: '#123123'

  },
  navigationbar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  sliderboxArea: {
    flex: 1.8,
    backgroundColor: 'purple',
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
  },
  button: { flex: 1, width: '%90', alignSelf: 'center', color: '#FFFFF3' },
  
  DrawerNavigationText: {
    flex: 1,
    backgroundColor: 'green',
    fontSize: 20,
    marginLeft:20

  },
  Icon:{
    fontSize:20,
    color:'orange',
    
  },
  textInput:{paddingLeft:10,height:40},
  textBaşlık:{fontSize:15}

});
