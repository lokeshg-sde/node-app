import { createTheme } from "@mui/material/styles"

import { colors, globals, breakpoints, typography, boxShadows, borders } from "./base"
import { boxShadow, hexToRgb, linearGradient, pxToRem, rgba } from "./functions"
import sidenav from "./components/sidenav"
import { list, listItem, listItemText } from "./components/list"
import { card, cardContent, cardMedia } from "./components/card"
import { button } from "./components/button" // , root, contained, outlined, buttonText
import iconButton from "./components/iconButton"
import input from "./components/form/input"
import inputLabel from "./components/form/inputLabel"
import inputOutlined from "./components/form/inputOutlined"
import textField from "./components/form/textField"
import { menu, menuItem } from "./components/menu"
import switchButton from "./components/form/switchButton"
import divider from "./components/divider"
import { tableContainer, tableHead, tableCell } from "./components/table"
import linearProgress from "./components/linearProgress"
import breadcrumbs from "./components/breadcrumbs"
import slider from "./components/slider"
import avatar from "./components/avatar"
import tooltip from "./components/tooltip"
import appBar from "./components/appBar"
import { tabs, tab } from "./components/tabs"
import { stepper, step, stepConnector, stepLabel, stepIcon } from "./components/stepper"
import select from "./components/form/select"
import formControlLabel from "./components/form/formControlLabel"
import formLabel from "./components/form/formLabel"
import checkbox from "./components/form/checkbox"
import radio from "./components/form/radio"
import autocomplete from "./components/form/autocomplete"
import container from "./components/container"
import popover from "./components/popover"
import buttonBase from "./components/buttonBase"
import icon from "./components/icon"
import svgIcon from "./components/svgIcon"
import link from "./components/link"
import {
  dialog,
  dialogTitle,
  dialogContent,
  dialogContentText,
  dialogActions,
} from "./components/dialog"

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
})
