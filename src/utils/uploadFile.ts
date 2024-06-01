export const uploadFile = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFile: (e: File) => void,
  setString: (e: string) => void,
) => {
  const selectedFile = (e.target.files as FileList)[0]

  if (selectedFile !== null) {
    if (selectedFile?.name.match(/^.*\.(jpg|jpeg|png|heic|webp)$/)) {
      setFile(selectedFile)
      setString(URL.createObjectURL(selectedFile))
    }
  }
}
