export function Video() {
  return (
    <video width="auto" height="240" loop autoPlay playsInline controls>
      <source src="/website-portfolio.mp4" type="video/mp4" />
      
      Your browser does not support the video tag.
    </video>
  )
}