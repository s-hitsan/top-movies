import {Menu} from 'antd';
import { Link } from 'react-router-dom';
import { Header } from 'antd/lib/layout/layout';


const AppHeader = () => {
  return (
    <Header>
    <Menu theme="dark" mode="horizontal">
    <Menu.Item>
      <Link to='/'>Home</Link>
    </Menu.Item>
      <Menu.Item>
      <Link to='/search'>Search</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='/top20'>TOP 20</Link>
      </Menu.Item>
    </Menu>
  </Header>
  )
}

export default AppHeader