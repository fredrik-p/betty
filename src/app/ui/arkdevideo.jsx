export function ArkdesVideo() {
    return (
        <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            playsInline
            style={{
                objectFit: "cover",
                zIndex: -1,
                position: "absolute",
                height: "auto",
            }}
        >
            <source src="/arkdes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
