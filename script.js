* {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1a1a1a; /* Blu sbiadito scuro */
    color: white;
  }
  
  header {
    background-color: #7b3294; /* Viola medio */;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  header h1 {
    margin: 0;
  }
  
  .language-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  /* Switch Toggle */
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background-color: #dadaeb; /* Grigio chiaro */;
    transition: .4s;
    border-radius: 34px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: #f1c40f; /* Oro */;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #7b3294; /* Viola medio */;
  }
  
  input:checked + .slider:before {
    transform: translateX(20px);
  }
  
  nav {
    background-color: #1a1a1a; /* Nero scuro */;
    overflow: hidden;
  }
  
  nav a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
  }
  
  nav a:hover {
    background-color: #f1c40f;
    color: black;
  }
  
  main {
    max-width: 100%;
    margin: auto;
    padding: 20px;
  }
  
  .content {
    padding: 20px;
  }
  
  .card {
    background-color: #ffffff; /* Bianco */;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    color: black;
  }
  
  .character-card {
    background-color: #f8f9fa; /* Grigio chiaro */;
    padding: 15px;
    border-radius: 10px;
    margin-top: 10px;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    font-size: 14px; /* Dimensione font uniforme */
  }
  
  .primary {
    background-color: #7b3294;
    color: white;
  }
  
  .button:hover {
    transform: scale(1.05);
  }
  
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
    background-color: #ffffff;
    margin: 15% auto;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 700px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .close {
    color: black;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    align-self: flex-end;
  }
  
  .close:hover,
  .close:focus {
    color: #7b3294;
    text-decoration: none;
  }
  
  footer {
    background-color: #1a1a1a;
    color: white;
    text-align: center;
    padding: 15px;
  }
