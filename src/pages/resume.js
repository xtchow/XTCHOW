import Link from 'next/link';

const tiny = 'https://tinyurl.com/xtchow0328';
const r0328 = 'https://s3.amazonaws.com/attachments.angel.co/8235783-20ab7dbded9a79037cdf6f50a9d3d6b5.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20230328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230328T200618Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=602091ee35e63af702be5bd95382d935b5f856380dfb22aaeaaed09db995520a';
export default function Resume() {
  return(<>
    <iframe src={r0328} title="resume" loading="lazy" width='100%' height='1000'/>
  </>);
}