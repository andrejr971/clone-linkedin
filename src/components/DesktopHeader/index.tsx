import React from 'react';

import { Container, ProfileCircle, SearchInput, Wrapper,  LinkedIcon, HomeIcon, NotificationIcon,  CaretDownIcon} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://avatars0.githubusercontent.com/u/49952031?v=4" />
              <span>Eu <CaretDownIcon /></span>
            </button>
          </nav>

        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;