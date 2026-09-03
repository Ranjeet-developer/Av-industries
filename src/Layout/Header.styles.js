import styled from "styled-components";

export const HeaderSection = styled.section`
  width: 100%;
  background: #ffffff;

  .container {
    width: 100%;
  }

  .navbar {
    display: flex;
    justify-content: center;
    color: black;
  }

  .navbar ul {
    display: flex;
    gap: 40px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .navbar li {
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 8px;
    
    transition: all 0.3s ease;
  }

  .navbar li:hover {
    background: #f5f5f5;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    border: 1px solid grey;
  }
`;