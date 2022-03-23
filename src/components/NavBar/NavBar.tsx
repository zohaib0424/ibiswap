import React from 'react';
import ibiswaplogo from '../../assets/Simbolo.png'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SearchBarWrapper from '../common/SearchBar/SearchBarWrapper';
import { HeaderIcon, HeaderItem, HeaderItems, LogoContainer, NavLink, Wrapper } from './NavBar.styles'
import { Context } from '../../context/Context';
import { OPENDRAWER } from '../../constants/MockData';
import PopoverWrapper from '../common/Popover/PopoverWraper';

const NavBar = () => {
  const { state, dispatch } = React.useContext(Context)
  const { open } = state

  const handleWallet = () => {
    dispatch({
      type: OPENDRAWER,
      payload: {
        open: !open
      }
    })
  }
  return (
    <Wrapper>
      <div>
        <NavLink to="/">
          <LogoContainer>
            <img src={ibiswaplogo} height={40} width={40} alt='logo' />
            <div className="logo-text"><span>IBISWAP</span></div>
          </LogoContainer>
        </NavLink>
      </div>
      <SearchBarWrapper title={"Search items , collections , and accounts"} />
      <HeaderItems>
        <NavLink to="/">
          <PopoverWrapper>
            <HeaderItem>Collections</HeaderItem>
          </PopoverWrapper> 
        </NavLink>
        <HeaderItem> Stats </HeaderItem>
        <HeaderItem> Resources </HeaderItem>
        <HeaderItem> Create </HeaderItem>
        <HeaderIcon>
          <AccountCircleOutlinedIcon className='icon' />
        </HeaderIcon>
        <HeaderIcon>
          <AccountBalanceWalletOutlinedIcon className='icon' onClick={handleWallet} />
        </HeaderIcon>
      </HeaderItems>
    </Wrapper>
  )
}

export default NavBar;