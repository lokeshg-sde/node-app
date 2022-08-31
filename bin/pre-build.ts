import { rm } from 'fs'

rm('client/.gitignore', (err) => {
  if (err) {
    console.log('Failed To Remove gitignore file')
    console.log('Message', err)

    process.exit(1)
  }

  console.log('Removed File Successfully')
})
