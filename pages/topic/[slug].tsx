import { useRouter } from "next/router";

import { Topic } from "../../components/Topic";

import type { NextPage } from "next";

const TopicPage: NextPage = () => {
  const router = useRouter();
  const { slug = "root" } = router.query;

  return <Topic slug={slug as string} />;
};

export default TopicPage;
