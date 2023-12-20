import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {HOME_CARD_HEIGHT, HOME_CARD_WIDTH} from '../../helpers';

const styles = StyleSheet.create({
  root: {
    borderColor: colors.gray,
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    padding: 10,
    height: HOME_CARD_HEIGHT,
  },
  headerView: {
    marginBottom: 10,
  },
  contentStyles: {
    height: HOME_CARD_HEIGHT - 100,
    width: Dimensions.get('screen').width - 70,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: colors.black,
  },
  video: {
    height: 120,
    width: 120,
    borderRadius: 10,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  headerText: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
  },
  imageBtn: {
    marginHorizontal: 5,
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    backgroundColor: colors.black,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
