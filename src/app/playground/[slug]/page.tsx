import { Container } from "~/components";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <Container>
      <div>My Post: {slug}</div>
    </Container>
  );
}
