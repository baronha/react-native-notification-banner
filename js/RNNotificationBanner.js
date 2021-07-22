import React, { PureComponent } from 'react'
import {
  findNodeHandle,
  ViewPropTypes,
  NativeModules,
  Platform,
} from 'react-native'
import PropTypes from 'prop-types'

const { RNNotificationBanner } = NativeModules

class NotificationBanner extends PureComponent {
  static propTypes = {
    ...ViewPropTypes,

    type: PropTypes.number,

    title: PropTypes.string,
    titleSize: PropTypes.number,
    titleColor: PropTypes.string,

    subTitle: PropTypes.string,
    subTitleSize: PropTypes.number,
    subTitleColor: PropTypes.string,

    duration: PropTypes.number,
    enableProgress: PropTypes.bool,
    tintColor: PropTypes.string,

    withIcon: PropTypes.bool,
    icon: PropTypes.object,

    dismissable: PropTypes.bool,
    isSwipeToDismissEnabled: PropTypes.bool,

    onClick: PropTypes.func,
    onHide: PropTypes.func,
  }

  static defaultProps = {
    type: 0,

    title: '',
    titleSize: 0,
    titleColor: '',

    subTitle: '',
    subTitleSize: 0,
    subTitleColor: '',

    duration: 0,
    enableProgress: false,

    tintColor: '',
    withIcon: true,

    dismissable: true,
    isSwipeToDismissEnabled: true,
  }

  static Duration = {
    Short: 0,
    Long: 1,
  }

  static Types = {
    Normal: 0,
    Info: 1,
    Success: 2,
    Warn: 3,
    Error: 4,
  }

  static Show(props) {
    if (!props) props = {}
    if (props.type === undefined)
      props.type = NotificationBanner.defaultProps.type

    if (props.title === undefined)
      props.title = NotificationBanner.defaultProps.title
    if (props.titleSize === undefined)
      props.titleSize = NotificationBanner.defaultProps.titleSize
    if (props.titleColor === undefined)
      props.titleColor = NotificationBanner.defaultProps.titleColor

    if (props.subTitle === undefined)
      props.subTitle = NotificationBanner.defaultProps.subTitle
    if (props.subTitleSize === undefined)
      props.subTitleSize = NotificationBanner.defaultProps.subTitleSize
    if (props.subTitleColor === undefined)
      props.subTitleColor = NotificationBanner.defaultProps.subTitleColor

    if (props.duration === undefined)
      props.duration = NotificationBanner.defaultProps.duration
    if (props.enableProgress === undefined)
      props.enableProgress = NotificationBanner.defaultProps.enableProgress

    if (props.tintColor === undefined)
      props.tintColor = NotificationBanner.defaultProps.tintColor
    if (props.withIcon === undefined)
      props.withIcon = NotificationBanner.defaultProps.withIcon

    if (props.dismissable === undefined) {
      props.dismissable = NotificationBanner.defaultProps.dismissable
    }

    if (props.isSwipeToDismissEnabled === undefined) {
      props.isSwipeToDismissEnabled =
        NotificationBanner.defaultProps.isSwipeToDismissEnabled
    }

    // if (props.withIcon) {
    //   if (props.icon && props.icon.props) {
    //     // let icon = props.icon.props
    //     // let vectorIcon = RNImageHelper.Resolve(icon.family, icon.name)
    //     // props.icon = Object.assign({}, icon, vectorIcon)
    //   }
    // } else {
    props.icon = undefined
    // }

    let _onClick = () => {
      props.onClick && props.onClick()
    }
    let _onHide = () => {
      props.onHide && props.onHide()
    }

    RNNotificationBanner.Show(props, _onClick, _onHide)
  }

  static Dismiss() {
    RNNotificationBanner.Dismiss()
  }

  static successStyle = {
    tintColor: '#4b994f',
  }
  static Success(props) {
    if (!props) props = {}
    if (props.tintColor === undefined)
      props.tintColor = NotificationBanner.successStyle.tintColor
    if (props.icon === undefined)
      props.icon = NotificationBanner.successStyle.icon

    props.type = NotificationBanner.Types.Success

    NotificationBanner.Show(props)
  }

  componentDidMount() {}

  componentDidUpdate() {}

  show() {}

  render() {
    return null
  }
}

export default NotificationBanner
