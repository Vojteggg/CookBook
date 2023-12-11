'use client'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getDocs,collection, QuerySnapshot} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
// import firebase from '../firebase/initFirebase'

// firebase();

async function fetchDataFromFirestore(){
  const querySnapshot = await getDocs(collection(db, "Przepisy"))

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id:doc.id,...doc.data()});
  });
  return data;
}

export default function Home() {
  const [userData,setUserData] = useState([]);

  useEffect(() =>{
    async function fetchData(){
      const data = await fetchDataFromFirestore();
      setUserData(data);
    }
    fetchData();
  },[] )


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      
        <div>
          {userData.map((user)=> (
            <div key = {user.id} className='mb-4'>
              <p className='text'>{user.Name}</p>
              <p>{user.Pass}</p>
              </div>
          ))}
        </div>
        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}