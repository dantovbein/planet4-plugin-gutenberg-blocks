export const SlideBackground = ({ slide, children }) => (
  <div
    className='background-holder'
    style={{
      backgroundImage: `url(${slide.image_url || ''})`,
      backgroundPosition: `${slide.focal_points?.x * 100}% ${slide.focal_points?.y * 100}%`,
    }}
  >
    {children}
  </div>
);
