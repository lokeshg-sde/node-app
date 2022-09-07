import React, { useState, useMemo } from 'react'
import styled from '@emotion/styled'
import { Menu, MenuItem, IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import type { MenuProps } from '@mui/material'

import { MENU_ITEMS } from './constants'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    elevation={0}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(() => ({
  '& .MuiPaper-root': {
    backgroundColor: '#07f1b1 !important',
    borderRadius: 6,
    marginTop: '1rem',
    maxWidth: '10rem',
    color: 'rgb(55, 65, 81)',
    boxShadow: '0rem 0rem 3rem darkcyan;',
    '& .MuiMenu-list': {
      padding: 0,
    },
    '& .MuiMenuItem-root': {
      color: 'grey',
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: 'grey',
        marginRight: 3,
      },
    },
  },
  '& a': {
    textDecoration: 'none',
    color: '#303030',
    fontWeight: 700,
    width: '100%',
  },
}))

const StyledButton = styled(IconButton)`
  & .MuiSvgIcon-root {
    font-size: 1.5rem;
    color: #07f1b1 !important;
    margin-right: 0.1rem;
  }
`

export default function HeaderMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = useMemo(() => Boolean(anchorEl), [anchorEl])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <StyledButton id="long-button" onClick={handleClick} size="large">
        <MenuIcon />
      </StyledButton>
      <StyledMenu
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorEl={anchorEl}
        id="basic-menu"
        onClose={handleClose}
        open={open}
      >
        {MENU_ITEMS.map(({ href, label }) => (
          <MenuItem key={href} onClick={handleClose}>
            <a href={href}> {label} </a>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  )
}
