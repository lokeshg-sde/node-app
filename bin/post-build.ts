import { rm, rmdir } from 'fs'

rm('client/.gitignore', (err) => {
  if (err) {
    console.log('Failed To Remove gitignore file')
    console.log('Message', err)

    process.exit(1)
  }

  console.log('Removed File Successfully')
})

rmdir('client/node_modules', (err) => {
  if (err) {
    console.log('Failed To Remove node_modules directory')
    console.log('Message', err)

    process.exit(1)
  }

  console.log('Removed Node Modules Successfully')
})
