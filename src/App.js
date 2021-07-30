import './App.css';
import { Layout, Menu, Button} from 'antd';
import { movieAPI } from './api/api';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(3).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Button onClick={movieAPI.getPopular}>getFilms</Button>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Top 20 movies</Footer>
      </Layout>
    </div>
  );
}

export default App;
