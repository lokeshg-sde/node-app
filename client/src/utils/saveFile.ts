export default function saveFileToLocalSystem(file: Blob, fileName: string): void {
  const downloadUrl = window.URL.createObjectURL(file)
  const link = document.createElement('a')

  link.setAttribute('href', downloadUrl)
  link.setAttribute('download', fileName)
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setTimeout(() => {
    URL.revokeObjectURL(downloadUrl)
  }, 100)
}
