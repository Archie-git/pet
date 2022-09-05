import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BaseModal from '../../../../component/BaseModal';
import ThemeContext from '../../../../common/context';
import style from './style.less';

const HomeHeader = () => {
  const context = useContext(ThemeContext);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');
  const handleToggle = () => {
    setVisible(!visible);
  };
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      navigate(`/search?keyword=${search}`);
    }
  };
  const handleNeighbourhoodClick = () => {
    console.log('chile === click =>');
    // const center = new TMap.LatLng(39.984120, 116.307484);
    // console.log('chile =tencent=>', center);
  };
  const handleQuit = () => {
    navigate('/login');
  };
  const cardStyle = {
    width: '30rem',
    height: '15rem',
    marginTop: '10rem',
    backgroundColor: 'white',
  };
  console.log('chile ==== context=>', context);
  return (
    <div className={style.container}>
      <img
        className={style.logo}
        src={require('../../../../asset/png/logo.png').default}
        alt="img"
      />
      <NavLink className={style.link} to="follow">关注</NavLink>
      <NavLink className={style.link} to="planet">星球</NavLink>
      <NavLink className={style.link} to="neighbourhood">附近</NavLink>
      <input
        className={style.search}
        placeholder="搜索"
        onChange={handleChange}
        onKeyDown={handleSearch}
      />
      <div className={style.profile}>
        <img src={require('../../../../asset/png/logo.png').default} alt="img" />
        <span>643995875@qq.com</span>
      </div>
      <NavLink className={style.link} to="notification">消息</NavLink>
      <NavLink className={style.link} to="me#favorite">收藏</NavLink>
      <NavLink className={style.link} to="me#history">历史</NavLink>
      <NavLink className={style.link} to="create">
        <button className={style.create} type="button">创作</button>
      </NavLink>
      {/*<button type="button" onClick={handleToggle}>退出</button>*/}
      {/*<ThemeContext.Consumer>*/}
      {/*  {(value) => (*/}
      {/*    <div>*/}
      {/*      <div>主题: </div>*/}
      {/*      <div>{JSON.stringify(value)}</div>*/}
      {/*      <button type="button" onClick={value.toggle}>切换</button>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</ThemeContext.Consumer>*/}
      <BaseModal visible={visible}>
        <div style={cardStyle}>
          <div>确定退出吗？</div>
          <button type="button" onClick={handleToggle}>取消</button>
          <button type="button" onClick={handleQuit}>确定</button>
        </div>
      </BaseModal>
    </div>
  );
};

export default HomeHeader;
