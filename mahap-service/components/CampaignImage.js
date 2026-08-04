import Image from 'next/image';
import { isRemoteSrc } from '@/data/visuals';

export default function CampaignImage({
  src,
  alt,
  priority = false,
  className = '',
  fill,
  width,
  height,
  sizes,
  quality = 75,
}) {
  const remote = isRemoteSrc(src);

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        sizes={sizes}
        quality={remote ? undefined : quality}
        unoptimized={remote}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes}
      quality={remote ? undefined : quality}
      unoptimized={remote}
    />
  );
}
