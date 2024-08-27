import { FaChessPawn } from "react-icons/fa6";
import { FaRegChessPawn } from "react-icons/fa6";
import { TbChessRook } from "react-icons/tb";
import { TbChessRookFilled } from "react-icons/tb";
import { GiChessKnight } from "react-icons/gi";
import { FaChessBishop } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa6";
import { LiaChessKnightSolid } from "react-icons/lia";
import { FaRegChessBishop } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import './App.css';

function App() {
  return (
    <div>
      <div class="row">
        <div class="white"><TbChessRookFilled /></div>
        <div class="black"><GiChessKnight /></div>
        <div class="white"><FaChessBishop /></div>
        <div class="black"><FaChessQueen /></div>
        <div class="white"><FaChessKing /></div>
        <div class="black"><FaChessBishop /></div>
        <div class="white"><GiChessKnight /></div>
        <div class="black"><TbChessRookFilled /></div>
    </div>
    <div class="row">
        <div class="black"><FaChessPawn /></div>
        <div class="white"><FaChessPawn /></div>
        <div class="black"><FaChessPawn /></div>
        <div class="white"><FaChessPawn /></div>
        <div class="black"><FaChessPawn /></div>
        <div class="white"><FaChessPawn /></div>
        <div class="black"><FaChessPawn /></div>
        <div class="white"><FaChessPawn /></div>
    </div>
    <div class="row">
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
   </div>
   <div class="row">
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
</div>
<div class="row">
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
</div>
<div class="row">
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
</div>
<div class="row">
    <div class="white"><FaRegChessPawn /></div>
    <div class="black"><FaRegChessPawn /></div>
    <div class="white"><FaRegChessPawn /></div>
    <div class="black"><FaRegChessPawn /></div>
    <div class="white"><FaRegChessPawn /></div>
    <div class="black"><FaRegChessPawn /></div>
    <div class="white"><FaRegChessPawn /></div>
    <div class="black"><FaRegChessPawn /></div>
</div>
<div class="row">
    <div class="black"><TbChessRook /></div>
    <div class="white"><LiaChessKnightSolid /></div>
    <div class="black"><FaRegChessBishop /></div>
    <div class="white"><FaRegChessQueen /></div>
    <div class="black"><FaRegChessKing /></div>
    <div class="white"><FaRegChessBishop /></div>
    <div class="black"><LiaChessKnightSolid /></div>
    <div class="white"><TbChessRook /></div>
</div>
    </div>
  );
}

export default App;
