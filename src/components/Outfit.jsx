import '/src/App.css'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

function Outfit({img,title,desc}) {
    return ( 
        <div className="max-w-sm  ">
    <a href="#">
        <img className="w-full" src={img} alt="" />
    </a>
    <div className="p-5"> 
         <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">KOMBİN</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">AÇIKLAMA KOMBİN</p>
    </div>
</div>
     );
}

export default Outfit;