import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/caio-vinicius.png',
      name: 'Caio',
      role: 'CTO  @42sp'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal', },
      { type: 'paragraph', content: 'Acabei de terminar um projeto', },
      { type: 'link', content: 'google.com' },
    ],
    publishedAt: new Date('2022-06-10 01:44:12'),
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/caio-vinicius.png",
      name: 'Caio',
      role: 'CTO  @42sp'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal', },
      { type: 'paragraph', content: 'Acabei de terminar um projeto', },
      { type: 'link', content: 'google.com' },
    ],
    publishedAt: new Date('2022-06-10 09:44:12'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

