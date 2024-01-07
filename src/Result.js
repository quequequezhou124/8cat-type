import {Link} from 'react-router-dom'
import pic1 from './component/pics/heimao.png'
import pic2 from './component/pics/kuangong.png'
import pic3 from './component/pics/jiba.png'
import pic4 from './component/pics/jumao.png'
import pic5 from './component/pics/sanhua.png'
import pic6 from './component/pics/buou.png'
import pic7 from './component/pics/lihua.png'
import pic8 from './component/pics/mianyin.png'
import ResultList from './ResultList'
import './Result.css';
import {useLocation} from "react-router-dom"
const Result = () => {
    const scores=useLocation().state.scores;
    const resultPics=[{pic:pic1, key:1},{pic:pic2, key:2},{pic:pic3, key:3},{pic:pic4, key:4},{pic:pic5, key:5},{pic:pic6, key:6},{pic:pic7, key:7},{pic:pic8, key:8}]
    return ( 
        <div className="result-container">
        <ResultList resultPics={resultPics} scores={scores} />
        <div className="links-container">
            <Link to='/8cat-type' className="retry-link">不不，我想你认错了（返回并重测）</Link>
            <Link to='/homeoflove' className="friends-link">点击看看你的朋友们吧！</Link>
        </div>
    </div>
     );
}
 
export default Result;