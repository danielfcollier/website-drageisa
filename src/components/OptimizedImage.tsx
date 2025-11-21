interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export const OptimizedImage = ({ src, alt, className = '', loading = 'lazy', fetchPriority = 'auto' }: OptimizedImageProps) => {
  // Extract filename and strip Vite's hash (pattern: -[hash] before extension)
  // Examples: hero-bg-C29Yx6Yw.jpeg -> hero-bg, doctor-photo-1E5vI2wO.jpg -> doctor-photo
  const getBaseFilename = (path: string): string => {
    const filename = path.split('/').pop() || '';
    const nameWithoutExt = filename.split('.')[0];
    // Remove Vite's 8-character hash if present (pattern: -XXXXXXXX at the end)
    return nameWithoutExt.replace(/-[A-Za-z0-9_-]{8}$/, '');
  };

  const filename = getBaseFilename(src);

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`/optimized/${filename}-mobile.webp 768w, /optimized/${filename}-tablet.webp 1024w, /optimized/${filename}-desktop.webp 1920w`}
        sizes="(max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px"
      />
      <source
        type="image/jpeg"
        srcSet={`/optimized/${filename}-mobile.jpg 768w, /optimized/${filename}-tablet.jpg 1024w, /optimized/${filename}-desktop.jpg 1920w`}
        sizes="(max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px"
      />
      <img
        src={`/optimized/${filename}-desktop.webp`}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </picture>
  );
};
