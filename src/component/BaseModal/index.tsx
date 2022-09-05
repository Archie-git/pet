import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import style from './style.less';

interface Props {
  visible: boolean,
  children: ReactElement,
}

const BaseModal = (props: Props) => {
  return ReactDOM.createPortal(
    <div className={style.container} style={{ visibility: props.visible ? 'visible' : 'hidden' }}>
      {props.children}
    </div>,
    document.getElementsByTagName('body')[0] as unknown as Element,
  );
};

export default BaseModal;
