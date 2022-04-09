import styles from "./styles.module.css";

import { FC, useCallback, useMemo, useState } from "react";

import { Card } from "../Card";

import { CARDS, getCardBySlug } from "../../data/cards";

interface Props {
  slug: string;
}

export const Topic: FC<Props> = ({ slug }) => {
  const href = `/topic/${slug}`;
  const [cardSlug, setCardSlug] = useState<string | undefined>(undefined);
  const currentCard = useMemo(() => getCardBySlug(cardSlug), [cardSlug]);

  const handleCardSelect = useCallback(
    (nextSlug?: string) => {
      setCardSlug(nextSlug === cardSlug || !nextSlug ? undefined : nextSlug);
    },
    [cardSlug]
  );

  const handleCardReset = useCallback(() => {
    setCardSlug(undefined);

    // On close on the client side we have to flush history state to the current topic
    window.history.replaceState({}, "", href);
  }, [href]);

  return (
    <div className={styles.topic}>
      <h1 className={styles.title}>Homemade Hot Dogs</h1>
      <div className={styles.cards}>
        {CARDS.map(({ title, slug }) => (
          <Card
            key={slug}
            title={title}
            slug={slug}
            onCardSelect={handleCardSelect}
          />
        ))}
      </div>
      {cardSlug && currentCard ? (
        <div className={styles.modal} onClick={handleCardReset}>
          <div className={styles.modalContent}>
            <Card
              key={currentCard.slug}
              title={currentCard.title}
              slug={cardSlug}
              content={currentCard.content}
              onCardSelect={handleCardSelect}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
