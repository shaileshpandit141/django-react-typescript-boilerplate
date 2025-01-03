import React, { lazy, ReactElement, Suspense } from 'react'
import { SvgIconProps } from '@mui/material'
import { LazyIconMapType } from './LazyIcon.types'

const iconsMap: LazyIconMapType = {
  signin: lazy(() => import('@mui/icons-material/LoginRounded')),
  signout: lazy(() => import('@mui/icons-material/LogoutRounded')),
  signup: lazy(() => import('@mui/icons-material/AppRegistrationRounded')),
  settings: lazy(() => import('@mui/icons-material/Settings')),
  person: lazy(() => import('@mui/icons-material/PersonRounded')),
  accountCircle: lazy(() => import('@mui/icons-material/AccountCircleRounded')),
  arrowBack: lazy(() => import('@mui/icons-material/ArrowBackIosNewRounded')),
  arrowUp: lazy(() => import('@mui/icons-material/ArrowUpwardRounded')),
  lightModeIcon: lazy(() => import('@mui/icons-material/WbSunnyRounded')),
  darkModeIcon: lazy(() => import('@mui/icons-material/DarkModeRounded')),
  eyeClose: lazy(() => import('@mui/icons-material/RemoveRedEyeRounded')),
  eyeOpen: lazy(() => import('@mui/icons-material/RemoveRedEyeOutlined')),
  circleAppIcon: lazy(() => import('@mui/icons-material/Brightness1Rounded')),
  reTry: lazy(() => import('@mui/icons-material/ReplayRounded')),
  search: lazy(() => import('@mui/icons-material/SearchRounded')),
  info: lazy(() => import('@mui/icons-material/InfoRounded')),
  installDesktop: lazy(() => import('@mui/icons-material/InstallDesktopRounded'))
}

interface LazyIconProps extends SvgIconProps {
  iconName: keyof LazyIconMapType
  fallback?: ReactElement
}

const LazyIcon = ({ iconName, fallback, ...props }: LazyIconProps) => {
  const IconComponent = iconsMap[iconName]

  return (
    <Suspense fallback={fallback}>
      <IconComponent {...props} />
    </Suspense>
  )
}

export { LazyIcon }
