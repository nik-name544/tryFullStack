import Head from 'next/head'
import c from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import { NavBar } from '../components/Navbar';
import { MainLayout } from '../MainLayout/MainLayout';

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className={c.center}>
          <h1>Hello music штука</h1>
          <h3>Здесь собраны норм трекичи</h3>
        </div>
      </MainLayout>
    </>
  )
}
