import React from 'react'
import Header from './components/Header/Header'
import Todo from './components/Todo/Todo'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
return (
<div className="main__container">
    <Header />
    <Todo />
    <Footer />
</div>
)
}

export default App
