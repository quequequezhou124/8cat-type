import './Home.css'
import donate1 from './component/pics/donatepic1.png'
import donate2 from './component/pics/donate2.png'
import aunt from './component/pics/aunt.png';
import homeoflove from './component/pics/homeoflovepic.png';
import base from './component/pics/base.png';

const Home = () => {
    
    return ( 
        <div className="home">
            <p>网络上流传着这样一句话：“世界破破烂烂，小狗缝缝补补”。
                而在爱之家基地，哪里破破烂烂，就有74岁的陈阿姨缝缝补补。她站在基地蜿蜒曲折的小路，看着基地的屋舍，就像裁缝在看一件衣服。袖口磨破了——赶紧缝补起来；手肘处撕开了——又赶忙缝合上。缝缝补补，一年又一年。
                5000多只流浪猫狗，110亩的基地，难以数清的修缮次数…而这都意味着大量的钱财耗费。
                没有多余的钱请施工队，陈阿姨和工人只能靠自己白天黑夜地忙，日日修补，日日渴盼，日日难捱，日日坚守。带着无奈又沉痛的心情，缝补屋舍、缝补时间、缝补良善。日复一日，年复一年...</p> 
            <h3>你的三十块钱，可能是一只狗狗温饱的一周，一只瘸腿的猫猫重获新生的希望！</h3>
            <div className="image-row">
            <img src={aunt} alt='error'></img> 
            <img src={homeoflove} alt='error'></img> 
            <img src={base} alt='error'></img> 
            </div>
            <div className="image-row">
            <img src={donate1} alt='error'></img> 
            <img src={donate2} alt='error'></img> 
            </div>
        </div>
     );
}
 
export default Home;