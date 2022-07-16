// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

// process.cwd() to get the Current Working Directory of the node.js process
// Entonces va de localhost:3000/ a posts (es por que aue la carpeta teniq aue estar en la raiz del proyecto)
// le puedo poner / antes de post y va a seguir funcionando
// const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData () {
  // // Get file names under /posts
  // const fileNames = fs.readdirSync(postsDirectory)
  // const allPostsData = fileNames.map((fileName) => {
  //   // Remove ".md" from file name to get id
  //   const id = fileName.replace(/\.md$/, '')

  //   // Read markdown file as string
  //   const fullPath = path.join(postsDirectory, fileName)
  //   // Universal Characyer Set Tranformacion Format - 8 bits
  //   const fileContents = fs.readFileSync(fullPath, 'utf8')

  //   // Use gray-matter to parse the post metadata section
  //   const matterResult = matter(fileContents)

  //   // Combine the data with the id
  //   // ...to clone
  //   // ... to update
  //   return {
  //     id,
  //     ...matterResult.data
  //   }
  // })

  // Sort posts by date
  // return allPostsData.sort(({ date: a }, { date: b }) => {
  //   if (a < b) {
  //     return 1
  //   } else if (a > b) {
  //     return -1
  //   } else {
  //     return 0
  //   }
  // })

  // -> este es el ejemplo usando json placholder
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return {
    props: {
      posts
    }
  }
}

// -> aca recupero todos los posibles path que para mi seria por Id
export async function getAllPostIds () {
  const posts = await getSortedPostsData()
  return posts.props.posts.map((e) => ({ params: { id: `${e.id}` } }))
}

// aca hago el llamado a la Api con el id incluido
export async function getPostData (id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
