import React from 'react'
import DataTable from '../components/DataTable'
import Header from '../components/Header'
import '../assets/css/App.css';

const History = () => {
    return(
        <div className="App">
            <header>
                <Header/>
            </header>
            <main className="min-h-screen">
                <DataTable/>
            </main>
            <footer>
                <span className="my-4 py-4 font-bold">
                    Web Sentimen Analisis ©2020 Created Jatmiko
                </span>
            </footer>
        </div>
    )
}

export default History