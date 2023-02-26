import { Button, Card } from 'antd';
import { Container } from 'react-bootstrap';
import Foter from "../footer/Foter"
import "../shopData/ShopData.css"

const cartData = [
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLy9iWBNPnxyhcHID7Kbto2R7ozCslKZieQ&usqp=CAU" , price:"250", description: 'Description of item 1', unit:"1kg"  },
  {img:"https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4" , price:"250", description: 'Description of item 2', unit:"1kg"  },
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkV3-Il8jYXC6vcOCWuOqhXVZF6w8ryo6PrdB40L2dJGt2Vv-2zE19t2rFEqeHezQdQY&usqp=CAU" , price:"250", description: 'Description of item 3' , unit:"1kg" },
  {img:"https://guardian.ng/wp-content/uploads/2020/02/Fruits-SteemKR.jpg" , price:"250", description: 'Description of item 4', unit:"1kg"  },
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0t-hZzuV9jtuzoMEFh5LL3R8KoezZyBYTw7XWuVRD2pSp4VqLFYztQdk_8uwhFzXICE&usqp=CAU" , price:"250", description: 'Description of item 5', unit:"1kg"  },
];

const carttwoData = [
   {img:"https://media.cntraveler.com/photos/546976f2cbbd2620680d9f2f/master/pass/rare-fruits-tout.jpg" , price:"250", description: 'Description of item 1', unit:"1kg"  },
  {img:"https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494__480.jpg" , price:"250", description: 'Description of item 2', unit:"1kg"  },
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBjqBn-UrTpzS35__DARm8Ohe7q6q-0yT4PB2qwBJJWOLpdhp7K-fu6ic8dYNHNnTjb0&usqp=CAU" , price:"250", description: 'Description of item 3' , unit:"1kg" },
  {img:"https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/best-fruits-1197259281-770x533-1-650x428.jpg" , price:"250", description: 'Description of item 4', unit:"1kg"  },
  {img:"https://www.pritikin.com/wp-content/uploads/2022/09/best-fruit-health-weight-loss.jpg" , price:"250", description: 'Description of item 5', unit:"1kg"  },
]

const cartVegetables = [
  {img:"https://www.onlyfororganic.com/media/catalog/product/cache/1/image/960x/17f82f742ffe127f42dca9de82fb58b1/r/a/radish_white.jpg" , price:"250", description: 'Description of item 1', unit:"1kg"  },
  {img:"https://thumbs.dreamstime.com/b/vegetables-1430407.jpg" , price:"250", description: 'Description of item 2', unit:"1kg"  },
  {img:"https://media.istockphoto.com/id/1205289671/photo/different-multi-colored-healthy-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=mAjIbyPGxOa9m8Fp1q-St_OdfaArRWavCo8ZiJmBmW4=" , price:"250", description: 'Description of item 3' , unit:"1kg" },
  {img:"https://hr.umich.edu/sites/default/files/fruit-veggie-challenge-uhr.jpg" , price:"250", description: 'Description of item 4', unit:"1kg"  },
  {img:"https://c.ndtvimg.com/2020-03/508i2o5g_fruits-veggies_625x300_23_March_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" , price:"250", description: 'Description of item 5', unit:"1kg"  },
];

const carttwoVegetables = [
   {img:"https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6" , price:"250", description: 'Description of item 1', unit:"1kg"  },
  {img:"https://post.healthline.com/wp-content/uploads/2020/08/fruits-and-vegetables-thumb.jpg" , price:"250", description: 'Description of item 2', unit:"1kg"  },
  {img:"https://www.foodandwine.com/thmb/QpxHuBw1ACzW_G9TBNhuOUdxnqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-way-to-store-vegetables-to-keep-them-fresh-as-long-as-possible-FT-BLOG0320-2-d92cc1b173504702ba0bf5cdaec82c8a.jpg" , price:"250", description: 'Description of item 3' , unit:"1kg" },
  {img:"https://thumbs.dreamstime.com/b/healthy-fresh-produce-vegetables-27382614.jpg" , price:"250", description: 'Description of item 4', unit:"1kg"  },
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVD2woCvOVK54cVNVJkH_wOI_oAnj4jgdaDQwT7-wLZa8wOqLUXqiKvSoZ4qSB6KGUwW0&usqp=CAU" , price:"250", description: 'Description of item 5', unit:"1kg"  },
]


const cartMeet = [
  {img:"https://5.imimg.com/data5/AQ/LP/MY-30539992/broiler-chicken-meat-500x500.jpg" , price:"250", description: 'Description of item 1', unit:"1kg" },
  {img:"https://5.imimg.com/data5/ANDROID/Default/2021/5/AT/YZ/RF/63502233/20210518-134928-jpg-500x500.jpg" , price:"250", description: 'Description of item 2', unit:"1kg"  },
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyIQzLSzwx5DYV5SXmdX7Rlvi0b49miBMuhG9iyJ8UN9yY1hKXLFxCtDbOO7-xY9pJOg&usqp=CAU" , price:"250", description: 'Description of item 3', unit:"1kg"  },
  {img:"https://5.imimg.com/data5/XM/PP/MY-44080452/country-chicken-meat-250x250.jpg" , price:"250", description: 'Description of item 4', unit:"1kg"  },
  {img:"https://img.freepik.com/premium-photo/chicken-meat-white-background_181303-1986.jpg?w=2000" , price:"250", description: 'Description of item 5' , unit:"1kg" },
];

const cartMeetTwo = [
   {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloAHTEq81thKEHhHx5z_IuSgIe0cM2jMTcg&usqp=CAU" , price:"250", description: 'Description of item 1', unit:"1kg"  },
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwn0AZyEF8p9qHz7UjmfKRsJ6EDU6M_-WaLjoBIlOPjiVOUhs8AdYuX9U1FRD28hUQuzc&usqp=CAU" , price:"250", description: 'Description of item 2', unit:"1kg"  },
  {img:"https://thumbs.dreamstime.com/b/beef-stewing-steak-15782088.jpg" , price:"250", description: 'Description of item 3' , unit:"1kg" },
  {img:"https://www.shutterstock.com/image-photo/pile-beef-cubes-isolated-on-260nw-1452606740.jpg" , price:"250", description: 'Description of item 4', unit:"1kg"  },
  {img:"https://upload.wikimedia.org/wikipedia/commons/6/60/Standing-rib-roast.jpg" , price:"250", description: 'Description of item 5', unit:"1kg"  },
]

const ShopData = () => {
  return (
    <>
    <div className="mainDiv">
        <h1 className='text-center my-4' style={{color:"#8dc63f"}}>Mix Fruits</h1>
    <div className='div-c' style={{ display: 'flex'}}>
      {carttwoData.map((cart, index) => (
        <Card className='m-card'
          key={index}
        >
          <img className='card-img' src={cart.img} alt="" />
        <div className="tc-c">
        <span className='pr'>Price: {cart.price} <br /> Unit:{cart.unit}</span><br />
        </div>
        </Card>
      ))}
    </div>
    </div>


    <div className="mainDiv">
    <div className='div-c' style={{ display: 'flex'}}>
      {cartData.map((cart, index) => (
        <Card className='m-card'
          key={index}
        >
          <img className='card-img' src={cart.img} alt="" />
        <div className="tc-c">
        <span className='pr'>Price: {cart.price} <br /> Unit:{cart.unit}</span><br />
        </div>
        </Card>
      ))}
    </div>
    </div>


    <div className="mainDiv">
    <h1 className='text-center my-4' style={{color:"#8dc63f"}}>Mix Vegetables</h1>
    <div className='div-c' style={{ display: 'flex'}}>
      {cartVegetables.map((cart, index) => (
        <Card className='m-card'
          key={index}
        >
          <img className='card-img' src={cart.img} alt="" />
        <div className="tc-c">
        <span className='pr'>Price: {cart.price} <br /> Unit:{cart.unit}</span><br />
        </div>
        </Card>
      ))}
    </div>
    </div>


    <div className="mainDiv">
    <div className='div-c' style={{ display: 'flex'}}>
      {carttwoVegetables.map((cart, index) => (
        <Card className='m-card'
          key={index}
        >
          <img className='card-img' src={cart.img} alt="" />
        <div className="tc-c">
        <span className='pr'>Price: {cart.price} <br /> Unit:{cart.unit}</span><br />
        </div>
        </Card>
      ))}
    </div>
    </div>


    <div className="mainDiv">
    <h1 className='text-center my-4' style={{color:"#8dc63f"}}>All Kinds Of Meet</h1>
    <div className='div-c' style={{ display: 'flex'}}>
      {cartMeet.map((cart, index) => (
        <Card className='m-card'
          key={index}
        >
          <img className='card-img' src={cart.img} alt="" />
        <div className="tc-c">
        <span className='pr'>Price: {cart.price} <br /> Unit:{cart.unit}</span><br />
        </div>
        </Card>
      ))}
    </div>
    </div>


    <div className="mainDiv">
    <div className='div-c' style={{ display: 'flex'}}>
      {cartMeetTwo.map((cart, index) => (
        <Card className='m-card'
          key={index}
        >
          <img className='card-img' src={cart.img} alt="" />
        <div className="tc-c">
        <span className='pr'>Price: {cart.price} <br /> Unit:{cart.unit}</span><br />
        </div>
        </Card>
      ))}
    </div>
    </div>
    <Foter/>
    </>
  );
};

export default ShopData;
