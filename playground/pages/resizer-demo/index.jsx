import styles from './resizer-demo.module.css';
import { Resizable } from 're-resizable';
import { useState } from 'react';

const Index = () => {
  const [state, setState] = useState({ height: 200, width: '100%' });
  return (
    <div className={styles.Container}>
      <Resizable
        className={styles.Resizer}
        defaultSize={{
          width: state.width,
          height: state.height
        }}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        }}
        minWidth={320}
        bounds="parent"
        onResize={(event, direction, ref, data) => console.log(data)}
      >
        {/* <svg className={styles.Right__Arrows}>
          <path d="M26.665 13.333L33.332 20l-6.667 6.667m-13.333 0L6.665 20l6.667-6.667" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg> */}
      </Resizable>
    </div>
  )
}

export default Index;