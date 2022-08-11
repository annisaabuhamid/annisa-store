import { Suspense } from "react";
import FeaturedCollections from "../components/FeaturedCollections.server";
import Section from "../components/Section.server";
import { Layout } from "../components/Layout.server";


export default function Home() {
  return (
    <Layout>
      <Suspense>
        <Section />
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
}