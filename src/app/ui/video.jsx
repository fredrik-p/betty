export function Video() {
  return (
    <video width="100%" height="100%" autoPlay muted loop style={{ objectFit: 'cover', zIndex: -1, position: 'absolute', height: '100vh' }}>
      <source src="/background-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}