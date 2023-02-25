
const [dataImage, setdataImage] = React.useState<any>(null);
        function SetImageSize(path: string) {
            Image.getSize(path, (Width, Height) => {
                setdataImage({
                    p: path,
                    w: Width,
                    h: Height
                });
            })
        }
......
      return(
        <Image
            source={{ uri: dataImage.p }}
            style={{ width: width, height: (dataImage.h / dataImage.w) * width, resizeMode: "contain" }} />
)}
