import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className='container mt-5 banner'>
      <div className='row'>
        <div className='col-12 col-md-6 align-self-center'>
          <h1 className='heading'>Welcome to the Quantum Computing World!</h1>
          <p className='description'>
            Quantum computing is a growing field at the intersection of physics
            and computer science and here we're to help you out in learning
            Quantum Computing concepts easily using some of the best resources
            and interactive activities.
          </p>
        </div>
        <div className='col-12 col-md-6 align-self-center'>
          <img
            className='img-fluid quantum-img'
            src='/images/quantum.png'
            alt='quantum'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6 mt-4 text-center'>
          <h3 className='heading'>Getting Started </h3>
          <img
            src='/images/starting.svg'
            alt='starting'
            className='img-fluid link-img'
          />
          <a className='link' href='#lessons'>
            New to Quantum Computing? Start Lessons Now!
          </a>
        </div>
        <div className='col-12 col-md-6 mt-4 text-center'>
          <h3 className='heading'>Feedback </h3>
          <img
            src='/images/feedback.svg'
            alt='starting'
            className='img-fluid link-img'
          />
          <a className='link' href='mailto:rajsiddharth21@gmail.com'>
            Have Feedback? Feel free to share at rajsiddharth21@gmail.com
          </a>
        </div>
      </div>
      <div className='lessons mt-5' id='lessons'>
        <h1 className='text-center heading'>Lessons</h1>
        <p className='description text-center'>
          Here are the lessons, Go one by one for better understanding.
        </p>
        <h4 className='heading text-center'>Happy learning!</h4>
      </div>
      <div className='row mt-5'>
        <div className='col-6 col-md-3'>
          <div className='card card-1'>
            <h3 className='card-text'>Introduction to Superposition</h3>
            <a className='card-link mt-auto' href='lesson-1'>
              Get Started &#62;
            </a>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='card card-1'>
            <h3 className='card-text'>What Is a Qubit?</h3>
            <a className='card-link mt-auto' href='lesson-2'>
              Get Started &#62;
            </a>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='card card-1'>
            <h3 className='card-text'>
              Creating Superposition: The Beam Splitter
            </h3>
            <a className='card-link mt-auto' href='lesson-3'>
              Get Started &#62;
            </a>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='card card-1'>
            <h3 className='card-text'>Creating Superposition: Stern-Gerlach</h3>
            <a className='card-link mt-auto' href='lesson-4'>
              Get Started &#62;
            </a>
          </div>
        </div>
      </div>
      <div className='lessons mt-5' id='lessons'>
        <h1 className='text-center heading'>Activities</h1>
        <h4 className='heading text-center'>Happy learning!</h4>
      </div>
      <div className='row'>
        <div className='col-6 col-md-3'>
          <div className='card-2 card'>
            <h3 className='card-2-text'>Quantum Tic Tac Toe</h3>
            <a className='card-2-link mt-auto' href='tictactoe'>
              Let's Play &#62;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
