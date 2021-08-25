import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { Header } from 'antd/lib/layout/layout';
import { compose } from 'redux';

const AppHeader = ({ location }) => {


  const selectedKey = value => {
    if (value === '/') {
      return '1'
    } else if (value === '/search') {
      return '2'
    } else if (value === '/top20') {
      return '3'
    } else
      return ''
  }

  return <div>
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedKey(location.pathname)} >
        <Menu.Item key={1} >
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to='/search'>Search</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to='/top20'>TOP 20</Link>
        </Menu.Item>
      </Menu>
    </Header>
  </div>
}

export default compose(withRouter)(AppHeader)