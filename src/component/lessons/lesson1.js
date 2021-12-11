import React, { useState } from "react";
import "../../styles/lesson1.css";

const Lesson1 = () => {
  const [result, setResult] = useState("");

  const toss = () => {
    console.log("click");
    if (Math.random() < 0.5) {
      setResult("heads");
    } else {
      setResult("tails");
    }
  };
  return (
    <div className='container mt-5'>
      <h1 className='text-center heading'>Introduction to Superposition</h1>
      <p className='text-left description'>
        In this section, we review the concepts of classical and quantum
        superposition. Quantum superposition is the framework for understanding
        all quantum phenomena. As we do not observe quantum phenomena in our
        everyday lives, it may seem confusing at first. However, as unintuitive
        as the quantum world may appear, there are a vast number of experiments
        which conclusively show that the universe really does operate according
        to the law of quantum superposition at the smallest distances accessible
        today. Before going into specific details on quantum superposition, it
        is useful to explain how the term “superposition” is used in different
        contexts in both classical and quantum physics. At the end of the
        chapter, we present the related activities and questions. After gaining
        experience with quantum superposition from working through these
        problems, it will become more intuitive. The more expe- rience you gain
        by advancing through this book, the more quantum superposition will make
        sense.
      </p>
      <h3 className='heading'>Quick Links</h3>
      <a className='link' href='#activity'>
        Activities
      </a>
      <a className='link' href='#quiz'>
        Check your understanding
      </a>
      <hr></hr>
      <h2 className='heading'>1.1 Classical Superposition</h2>
      <p className='description'>
        In classical physics, the concept of superposition is used to describe
        when two physical quantities are added together to make another third
        physical quantity that is entirely different from the original two. An
        example of the “superposition principle” in classical physics is clear
        when working with waves. Two pulses on a string which pass through each
        other will interfere following the principle of superposition as shown
        Fig. 1.1. Noise-canceling headphones use superposition by creating sound
        waves with the same magnitude as the incoming sound wave but completely
        out of
      </p>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <img alt='fig1' src='/images/fig1.png' className='img-fluid' />
        </div>
        <div className='col-12 col-md-6 align-self-center'>
          <p className='description'>
            phase, thereby canceling the sound wave. This destructive
            interference is illustrated in the second figure of Fig. 1.1.
            Another common application of classical superposition is finding the
            total magnitude and direction of quantities such as force, electric
            field, magnetic field, etc. For example, to calculate the total
            electric force F&#8407;<sub>total</sub> on a charge q 2 produced by
            other charges q 1 and q 3 , one would sum the forces produced by
            each individual charge: F&#8407;<sub>total</sub> = F&#8407; 12 +
            F&#8407; 32 . The challenge here is that forces are vectors, so
            vector addition is needed, as shown in Fig. 1.2.
          </p>
        </div>
      </div>
      <hr></hr>
      <h2 className='heading'>1.2 Quantum Superposition</h2>
      <div className='row'>
        <div className='col-12 col-md-6 align-self-center'>
          <p className='description'>
            Quantum superposition is a phenomenon associated with quantum
            systems. Quan- tum systems include small objects such as nuclei,
            electrons, elementary particles, and photons, for which the
            wave-particle duality and other non-classical effects are observed.
            For example, you would normally expect that an object can have an
            arbitrary amount of kinetic energy ranging from 0 to infinity (∞)
            Joules, i.e. a baseball could be at rest or thrown at any speed.
            However, according to quantum mechanics, the ball's energy is
            quantized, meaning it can only have certain values.
          </p>
        </div>
        <div className='col-12 col-md-6'>
          <img alt='fig1' src='/images/fig2.png' className='img-fluid' />
        </div>
      </div>
      <div className='text-center coin-wrapper'>
        <h1>Flip a coin</h1>
        <div id='coin' className={result}>
          <div class='side-a'>
            <h4>TAIL</h4>
          </div>
          <div className='side-b'>
            <h4>HEAD</h4>
          </div>
        </div>
        <button id='btn' onClick={() => toss()}>
          Coin Toss
        </button>
      </div>
      <p className='description text-center'>
        Fig. 1.4 A tossed coin has a 50% chance of landing on heads or tails
      </p>
      <p className='description mt-2'>
        A specific example of energy quantization is when energies can only have
        integer values E = 0, 1, 2, 3, . . ., but not any numbers inbetween.
        This is counterintuitive, as we cannot observe it with our classical
        eyes. The gaps in energy are too small to be seen with the human eye and
        as such can be treated as continuous for classical physics. However, the
        gaps are more pronounced at smaller sizes, as shown in Fig. 1.3. For
        example the hydrogen atom is small enough that quantum effects are
        important, and Bohr needed to quantize the energy levels to successfully
        model its behavior.
        <br />
        One aspect of quantum superposition can be explained using a coin
        analogy. A coin has a 50/50 probability of landing as either heads or
        tails, as shown in Fig. 1.4.
        <br />
        <b>
          <i>Question </i>1: What state is the coin in while it is in the air?
        </b>
        <br /> Is it heads or tails? We can say that the coin is in a
        superposition of both heads and tails. When it lands, it has a definite
        state, either heads or tails. Generally, the word “state” means any
        particular way that a system can possibly be described. For example, the
        coin can be either heads, or tails, or a combination of heads or tails
        while flipped in the air. All of these cases are called states of the
        coin system. While the coin is being flipped it is in a state of
        superposition. When we observe the coin, we are making a measurement
        which destroys the superposition.
        <br /> At any given time, a system can be described as being in a
        particular state. The state is related to its quantized values. For
        example, a tossed coin is either in a heads state or a tails state. An
        electron orbiting a hydrogen atom could be in the ground state or an
        excited state. A quantum system is special because it can be in a
        superposition of these definite states, i.e., both heads and tails
        simultaneously. The outcome of a measurement is to observe some definite
        state with a given probability.
        <br /> In Schrödinger's famous thought experiment, Schrödinger's cat is
        placed in a closed box with a single atom that has some probability of
        emitting deadly radiation at any time. Since radioactive nuclear decay
        is a spontaneous process, it is impossible to predict for certain when
        the nucleus decays. Therefore, you do not know whether the cat is alive
        or dead unless you open and look in the box. (
        <a
          href='https://www.youtube.com/watch?v=uWMTOrux0LM'
          target='_blank'
          rel='noreferrer'
        >
          Watch this video.
        </a>
        ) It can be said that the cat is both alive AND dead with some non-zero
        probability. That is, the cat is in a quantum superposition state until
        you open the box and measure its state. Upon measurement, the cat is
        obviously either alive OR dead and the superposition has collapsed to a
        definite, non-superposition state. Quantum systems can exist in a
        superposition state, and measuring the system will collapse the
        superposition state into one definite classical state. This might be
        hard to understand from a classical point of view, as we usually do not
        see quantum superposition with our human eyes (i.e in macroscopic
        objects). Einstein was really bothered by this feature of quantum
        systems. His friend, Abraham Pais, records: “I recall that during one
        walk, Einstein suddenly stopped, turned to me, and asked whether I
        really believed that the moon exists only when I look at it.”
        <br />
        Quantum systems can exist in a superposition state, and measuring the
        system will collapse the superposition state into one definite classical
        state. This might be hard to understand from a classical point of view,
        as we usually do not see quantum superposition with our human eyes (i.e
        in macroscopic objects). Einstein was really bothered by this feature of
        quantum systems. His friend, Abraham Pais, records: “I recall that
        during one walk, Einstein suddenly stopped, turned to me, and asked
        whether I really believed that the moon exists only when I look at it.”
      </p>
      <hr />
      <h2 className='heading'> 1.3 Big Ideas</h2>
      <ol className='description'>
        <li>
          A particle in a quantum superposition exists as a combination of
          different states at the same time.
        </li>
        <li>
          Each possible state has a given probability of being observed, but
          measurement destroys the superposition because only one definite state
          is seen.
        </li>
      </ol>
      <hr />
      <h2 className='heading text-center'>Now It's Time for an activity</h2>
      <h3 className='heading text-center'>Quantum Tic Tac Toe</h3>
      <p className='description'>
        Quantum Tic-Tac-Toe was developed by Alan Goff in 2004 as a metaphor to
        teach quantum concepts such as superposition, entanglement, and
        measurement collapse. It has been found to be a helpful strategy in
        teaching quantum mechanics to undergraduate students at Purdue,
        especially for students who struggle with grasping the concepts. 2
        Quantum Tic-Tac-Toe resembles the classical Tic-Tac-Toe game in its
        setup and objective of completing three in a row. However, the game uses
        characteristics of quantum systems, so instead of using one marker X or
        O, the players use pairs of Xs and Os, which are traditionally called
        “spooky,” after Einstein's reference to entanglement as “spooky action
        at a distance”. 3 Using indices for each marker's move is important when
        determining the winner of the game. Additionally, we use a color code
        for each player and connect the spooky markers to help students better
        visualize the game process. We also number the squares for future
        reference.
      </p>
      <hr />
      <h3 className='heading'>The Rules</h3>
      <div className='row'>
        <div className='col-12 col-md-6 align-self-center'>
          <ol className='description'>
            <li>
              The X player goes first. We note that keeping indices helps to
              track the game. The markers can be placed in any of the two spaces
              on the game board (Fig. 1).
            </li>
            <li>
              The O player goes next. The markers can be placed in any two
              squares, even ones that are already occupied by other X or O
              markers. Notice in Fig. 2 that the index for the O player also
              starts with 1, representing its first move placing markers in
              squares 1 and 6.
            </li>
            <li>
              Player X goes again and can place their spooky markers at any two
              squares, even ones occupied by other Xs or Os. The game goes on
              until the players create a “cyclic loop” as seen in Fig. 3.
            </li>
            <li>
              Collapsing the quantum state. When a loop is created, the players
              have to collapse their state. There are three options for who
              makes the decision on how the markers will be collapsed. The fair
              choice would be by the player who did not create the cycle (in
              this case, player O). When the markers are forced to collapse,
              only one of the two squares for each move can be chosen, so player
              O can choose either square 4 or 6. Depending on their choice, the
              outcome would be different (Fig. 4). Once the states are
              collapsed, the “spooky markers” change into classical markers and
              they fully occupy the state of one particular square.
            </li>
            <li>
              The next player can place his or her spooky markers in any two
              squares except the ones that are occupied by the collapsed
              markers. The game goes on until another cycle is created and the
              players are forced to collapse the state.
            </li>
            <li>
              Winning the game. In some cases both players will create three in
              a row after collapsing their spooky markers. In this case, the
              player with the smallest sum of indexes wins. For example, in Fig.
              5 player X wins because they have the smaller sum.
            </li>
          </ol>
          <p className='description'>
            <b>Some Other Rules Can Be Added or Modified</b> One of the
            requirements could be that players cannot place both markers in the
            same square like the one shown in Fig. 6. Another way to make the
            collapse more quantum (or more random) is using a coin flip to
            decide which player chooses the collapse. Other modifications may
            include assigning different point values for three in a row, such as
            the winner with lowest sum of the indexes gets 1 point, while the
            other player gets 1/2 point.
          </p>
        </div>
        <div className='col-12 col-md-6'>
          <div className='fig-wrapper'>
            <img alt='fig1' src='/images/fig3.png' className='img-fluid fig' />
            <small className='description d-block'>
              Fig 1. The Quantum Tic-Tac-Toe layout with numbered squares
              (left): one player's move with spooky markers x 1 (right).
            </small>
          </div>
          <div className='fig-wrapper'>
            <img alt='fig1' src='/images/fig4.png' className='img-fluid fig' />
            <small className='description'>
              Fig 2 Example of the second player's move.
            </small>
          </div>
          <div className='fig-wrapper'>
            <img alt='fig1' src='/images/fig5.png' className='img-fluid fig' />
            <small className='description d-block'>
              Fig 3 The cyclic loop is created by the player X. Using lines
              between the spooky markers helps in identifying the loop.
            </small>
          </div>
          <div className='fig-wrapper'>
            <img alt='fig1' src='/images/fig6.png' className='img-fluid fig' />
            <small className='description d-block'>
              Fig 4 The two collapse outcomes due to player O's decision.
            </small>
          </div>
          <div className='fig-wrapper'>
            <img alt='fig1' src='/images/fig7.png' className='img-fluid fig' />
            <small className='description d-block'>
              Fig 5 Player X wins, because the sum of their indexes is 1 + 2 + 3
              = 6. Player O got three in a row, but the sum of their indexes is
              2 + 1 + 4 = 7.
            </small>
          </div>
          <div className='fig-wrapper'>
            <img alt='fig1' src='/images/fig8.png' className='img-fluid fig' />
            <small className='description d-block'>
              Fig 6 A player cannot put both markers in the same square.
            </small>
          </div>
        </div>
      </div>
      <a id='activity' href='/tictactoe' className='text-center link my-5'>
        <h3>Click Here! To play Quantum Tic Tac Toe</h3>
      </a>
    </div>
  );
};

export default Lesson1;
