import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { Sidebar } from "../../components/Sidebar";

import styles from './App.module.scss';
export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Wesley Trindade Guarnieri"
            avatarSrc="http://github.com/wesleytrindade.png"
            authorTitle="Web Developer" />
        </main>
      </div>
    </>
  )
}