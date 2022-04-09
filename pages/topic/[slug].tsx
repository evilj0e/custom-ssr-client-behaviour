import { useRouter } from "next/router";

import { TopicId } from "../../components/TopicId";

import type { NextPage } from "next";

const TopicPage: NextPage = () => {
  const router = useRouter();
  const { slug = "root" } = router.query;

  return <TopicId slug={slug as string} />;
};

export default TopicPage;
