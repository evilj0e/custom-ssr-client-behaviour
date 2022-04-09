import { FC, useCallback } from "react";

import Link from "next/link";
import styles from "./styles.module.css";

interface Props {
  title: string;
  slug: string;
  content?: string;
  onCardSelect?: (slug: string) => void;
}

const CardWithContent: FC<Required<Omit<Props, "onCardSelect">>> = ({
  title,
  content,
}) => (
  <div className={styles.card}>
    <h1>{title}</h1>
    <p className={styles.content}>{content}</p>
  </div>
);

export const Card: FC<Props> = ({ title, slug, content, onCardSelect }) => {
  const href = `/card/${slug}`;

  const handleClick: React.MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    // It needs to update location.
    // Shallow option isn't suitable for that purpose, because we need to update path to different route
    // https://nextjs.org/docs/routing/shallow-routing#caveats
    window.history.replaceState({}, "", href);

    onCardSelect?.(slug);
  }, [href, slug, onCardSelect]);

  if (content) {
    return <CardWithContent title={title} slug={slug} content={content} />;
  }

  return (
    <Link href={href} shallow>
      <a className={styles.card} onClick={handleClick}>
        {title}
      </a>
    </Link>
  );
};
