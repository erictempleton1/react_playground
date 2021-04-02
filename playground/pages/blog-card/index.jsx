import styles from './blog-card.module.css';
import Image from 'next/image';

const Index = () => (
  <div className={styles.Container}>
    <div className={styles.Card__Grid}>
      <Card
        imgSrc="/desktop_mac.jpg"
        imgAlt="computer"
        titleText="How to make an awesome blog post card for your site"
        contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis. Congue mauris rhoncus aenean vel elit scelerisque mauris. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed."
        metaAuthor="John Jones"
        metaDate="Apr 2, 2021 - 4 min read"
      />
      <Card
        imgSrc="/kitchen.jpg"
        imgAlt="citchen"
        titleText="Remodel your kitchen on a budget"
        contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        metaAuthor="Beth Smith"
        metaDate="Apr 1, 2021 - 8 min read"
      />
      <Card
        imgSrc="/mountain.jpg"
        imgAlt="mountain"
        titleText="The mountains are calling and we should not ignore the call"
        contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis. Congue mauris rhoncus aenean vel elit scelerisque mauris. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed."
        metaAuthor="John Jones"
        metaDate="Mar 31, 2021 - 12 min read"
      />
      <Card
        imgSrc="/podcast.jpg"
        imgAlt="microphones"
        titleText="Podcasting seems like it is a lot of work"
        contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis. Congue mauris rhoncus aenean vel elit scelerisque mauris. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed."
        metaAuthor="John Jones"
        metaDate="Mar 28, 2021 - 7 min read"
      />
    </div>
  </div>
);

const Card = ({ imgSrc, imgAlt, titleText, contentDescription, metaAuthor, metaDate }) => (
  <div className={styles.Card}>
    <a href="#post">
      <Image
        className={styles.Card__Image}
        src={imgSrc}
        alt={imgAlt}
        width={400}
        height={200}
      />
    </a>
    <div className={styles.Card__Content}>
      <a href="#post" className={styles.Content__Title}>
        <div className={styles.Title__Text}>{titleText}</div>
      </a>
      <div className={styles.Content__Description}>{contentDescription}</div>
      <div className={styles.Content__Footer}>
        <a href="#author" className={styles.Footer__Image}></a>
        <div className={styles.Footer__Meta}>
          <a href="#author" className={styles.Meta__Author}>{metaAuthor}</a>
          <div className={styles.Meta__Date}>{metaDate}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Index