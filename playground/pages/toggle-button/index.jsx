import styles from './toggle-button.module.css';

const Index = () => {
  return (
    <div className={styles.Container}>
      <label className={styles.Switch}>
        <input className={styles.Switch__Input} type="checkbox" defaultChecked />
        <span className={styles.Slider}></span>
      </label>
    </div>
  );
};

export default Index;

/**
<label class="toggle-button_Switch__v0zyI">
  <input type="checkbox" class="toggle-button_Switch__Input__2_24j" checked="">
  <span class="toggle-button_Slider__1_q5B"></span>
</label>
 */