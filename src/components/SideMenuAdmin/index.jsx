import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr />
      {listLinks.map(item => (
        <ItemContainer key={item.id} $isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer
        style={{
          position: 'absolute',
          bottom: '-20px'
        }}
      >
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  $isActive: PropTypes.bool,
  path: PropTypes.string
}
