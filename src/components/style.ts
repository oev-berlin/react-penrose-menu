import styled from 'styled-components';

export const Wrapper = styled.div`
  :root {
    --white: #fff;
    --blau2: #143cdc;
    --blau3: #5684ea;
    --blau4: #8cbefa;
    --blau5: #cedfea;
  }

  #react-sidebar .sidebar-backdrop {
    cursor: pointer;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1011;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 200ms ease-out;
    -moz-transition: opacity 200ms ease-out;
    -ms-transition: opacity 200ms ease-out;
    -o-transition: opacity 200ms ease-out;
    transition: opacity 200ms ease-out;
    background-color: rgba(58, 59, 61, 0.55);
  }

  #react-sidebar .sidebar-backdrop.show {
    visibility: visible;
    opacity: 1;
  }

  #react-sidebar .sidebar-main {
    width: 100vw;
    height: auto;
    z-index: 1012;
    position: fixed;
    top: 80px;
    left: 0;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12);
    transform: translateX(-100vw);
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  #react-sidebar .sidebar-main.second {
    transform: translateX(70%);
    left: 0;
    transition: all 0.5s ease;
    z-index: 1013;
    visibility: hidden;
  }

  #react-sidebar .sidebar-main.show {
    transform: translateX(0px);
    left: 0;
    transition: 1s;
    visibility: visible;
  }

  #react-sidebar .sidebar-main-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  #react-sidebar .sidebar-header {
    background-color: #f3f3f3;
    font-size: 0.5rem;
    font-family: inherit;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 1rem 0.8rem;
    color: #5e5b5b;
  }

  .back-btn {
    display: flex;
    justify-items: center;
    height: 60px;
    color: white;
    background-color: dodgerblue;
    padding: 5px;
  }

  .back-btn span {
    font-size: 29px;
    margin-left: 3px;
    display: flex;
    align-items: center;
  }

  .back-btn:hover {
    cursor: pointer;
  }

  .back-btn i {
    margin-right: 8px;
  }

  .sidebar-main-content ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .sidebar-main-content ul li {
    padding: 0.5rem 0.8rem;
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: steelblue;
    cursor: pointer;
  }

  /*.sidebar-main-content ul li:hover {
      cursor: pointer;
      background-color: #f3f3f3;
  }*/

  .sidebar-main-content ul li.disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  .sidebar-main-content ul li i {
    margin-right: 8px;
  }

  .sidebar-main-content ul a {
    color: inherit;
    text-decoration: initial;
  }

  .listItem:nth-child(even) {
    background-color: blue;
  }
  .listItem:nth-child(odd) {
    background-color: darkblue;
  }

  .listItem:last-child {
    border-bottom: 5px solid steelblue;
  }

  .section-seprator {
    margin-left: 16px;
    margin-right: 16px;
    /* margin: 0; */
    background-color: #dedfe0;
    box-sizing: content-box;
    height: 0;
    /* margin-top: 21px; */
    /* margin-bottom: 21px; */
    border: 0;
    border-top: 1px solid #e8e9eb;
  }

  .flex-align-center {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media (max-width: 700px) {
    #react-sidebar .sidebar-main {
      top: 73px;
    }
    #react-sidebar .sidebar-backdrop {
      top: 73px;
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  font-size: 35px;
  margin-left: 15px;
`;
