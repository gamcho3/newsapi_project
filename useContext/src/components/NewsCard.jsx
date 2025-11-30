import styles from "./NewsCard.module.css";

const NewsCard = ({
  source,
  author,
  publishedAt,
  title,
  description,
  url,
  urlToImage,
}) => {
  const { name } = source;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={urlToImage || ""} alt={title} />
        <span className={styles.badge}>{name}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.author}>{author}</span>
          <span>{name}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.timestamp}>{publishedAt}</span>
        <a className={styles.link} href={url} target="_blank">
          기사 읽기
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
