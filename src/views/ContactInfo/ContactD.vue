<template>
    <div class="landing-page">
      <header class="header">
        <h2 class="header-title">DAT - ENGINEERING CONSULTANTS IN DUBAI, ABU DHABI, SHARJAH, & INDIA</h2>
      </header>
      <main class="content">
        <h1 class="main-title">Innovative Design Visualization and Execution</h1>
        <p class="description">
          We are committed to delivering top-notch consulting and design services with the priority of integrating clients' requirements whilst adhering to building standards. Every project's standards and purposes are prioritized to maximize the possibility of solutions needed to achieve the highest points of results. As global building consultants, we are committed to providing broad engineering capabilities and versatility to exceed the expectations of our respected clients. At DAT Architecture, we innovate your design ideas! Our collaborative techniques expand the possibilities of distinctive results. Let's talk about your ideas, visualize the conjectures, and achieve the expectations.
        </p>
        <div class="buttons">
          <button class="btn">SEND ENQUIRY</button>
          <button class="btn">BOOK A MEETING</button>
          <button class="btn">SEND WHATSAPP</button>
          <button class="btn">CALL US</button>
        </div>
      </main>
    </div>
  </template>
  
  <style scoped>
  .landing-page {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    background: linear-gradient(to right, #000, #0a0a0a);
    color: #fff;
    font-family: Arial, sans-serif;
  }
  
  .header {
    margin-bottom: 2rem;
  }
  
  .header-title {
    color: #a9a9a9;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  
  .content {
    max-width: 600px;
  }
  
  .main-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .description {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
  
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .btn:hover {
    background-color: #333;
  }
  </style>
  