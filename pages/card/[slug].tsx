import { useMemo } from "react";
import { useRouter } from "next/router";

import { Card } from "../../components/Card";
import { getCardBySlug } from "../../data/cards";

import type { NextPage } from "next";

const CardPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const card = useMemo(() => getCardBySlug(slug), [slug]);

  if (!card) {
    return null;
  }

  return <Card title={card.title} slug={card.slug} content={card.content} />;
};

export default CardPage;
