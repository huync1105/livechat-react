import { MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Input } from 'antd';
import './ShowAppSidebarWidget.scss'
import ShowSidebarUser from './sidebar-user/ShowSidebarUser';

export default function ShowAppSidebarWidget() {

  const users = [1,1,1,1,1,1,1,1];

  return (
    <div className="appSidebar">
      {/* navigation */}
      <nav className="appSidebar__nav">
        <Button icon={<MenuOutlined />} />
        <Input placeholder="Basic usage" />;
      </nav>

      {/* users */}
      <main className='appSidebar__users'>
        <ul>
          {
            users.map(() => (
              <ShowSidebarUser />
            ))
          }
        </ul>
      </main>
    </div>
  )
}
