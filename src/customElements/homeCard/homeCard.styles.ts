import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
const styles = StyleSheet.create({
  root: {
    borderColor: colors.gray,
    borderWidth: 1,
    margin: 15,
    borderRadius: 10,
    padding: 10,
  },
  headerView: {
    marginBottom: 10,
  },
  contentStyles: {
    height: 120,
    width: 120,
    borderRadius: 10,
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
});
export default styles;
