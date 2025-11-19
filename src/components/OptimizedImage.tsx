import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const OptimizedImage = ({ src, alt, className = '' }: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  
  useEffect(() => {
    // Extract filename without extension from imported asset path
    const filename = src.split('/').pop()?.split('.')[0] || '';
    
    // Check if optimized version exists
    const checkOptimized = async () => {
      try {
        // Try WebP first
        const webpMobile = `/optimized/${filename}-mobile.webp`;
        const webpTablet = `/optimized/${filename}-tablet.webp`;
        const webpDesktop = `/optimized/${filename}-desktop.webp`;
        
        // Fallback JPEG versions
        const jpgMobile = `/optimized/${filename}-mobile.jpg`;
        const jpgTablet = `/optimized/${filename}-tablet.jpg`;
        const jpgDesktop = `/optimized/${filename}-desktop.jpg`;
        
        // Use optimized images if available
        const response = await fetch(webpMobile, { method: 'HEAD' });
        if (response.ok) {
          // Create srcset for responsive images
          const srcset = `${webpMobile} 768w, ${webpTablet} 1024w, ${webpDesktop} 1920w`;
          const fallbackSrcset = `${jpgMobile} 768w, ${jpgTablet} 1024w, ${jpgDesktop} 1920w`;
          
          setImageSrc(webpDesktop);
          
          // Update with picture element data
          return { srcset, fallbackSrcset };
        }
      } catch (error) {
        // If optimized version doesn't exist, use original
        console.log('Using original image:', filename);
      }
    };
    
    checkOptimized();
  }, [src]);

  const filename = src.split('/').pop()?.split('.')[0] || '';

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
        src={imageSrc}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
};
