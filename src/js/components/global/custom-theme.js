import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.blueGrey400,
    primary2Color: Colors.blueGrey400,
    primary3Color: Colors.blueGrey400,
    accent1Color: Colors.blueGrey700,
    accent2Color: Colors.blueGrey700,
    accent3Color: Colors.blueGrey700,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.blueGrey700,
  }
};
