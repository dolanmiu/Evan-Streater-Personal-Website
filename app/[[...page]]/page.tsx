import { Content, fetchOneEntry } from '@builder.io/sdk-react';

export default async function Page(props: { params: Promise<{ page?: string[] }> }) {
  const params = await props.params;
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    userAttributes: { urlPath: '/' + (params.page?.join('/') || '') },
  });

  return (
    <Content
      content={content}
      model="page"
      apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
    />
  );
}
