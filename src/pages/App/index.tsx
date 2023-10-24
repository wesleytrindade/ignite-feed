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
            authorTitle="Web Developer"
            postContent={`<p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href='#'>👉{' '}jane.design/doctorcare</a></p>
            <p>
                <a href='#'>#novoprojeto </a>{' '}
                <a href='#'>#nlw</a>{' '}
                <a href='#'>#rocketseat</a></p>`}
          />

          <Post
            author="Wesley Trindade Guarnieri"
            avatarSrc="http://github.com/wesleytrindade.png"
            authorTitle="Web Developer"
            postContent={`<p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href='#'>👉{' '}jane.design/doctorcare</a></p>
            <p>
                <a href='#'>#novoprojeto </a>{' '}
                <a href='#'>#nlw</a>{' '}
                <a href='#'>#rocketseat</a></p>`}
          />
        </main>
      </div>
    </>
  )
}