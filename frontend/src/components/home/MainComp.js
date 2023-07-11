import React, { useEffect , useState} from 'react'
import Banner from './Banner'
import "../home/home.css";
import Slide from './Slide';
import { Divider } from '@mui/material';
import { getAllProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";


const Maincomp = () => {

    // const { products } = useSelector(state => state.getproductsdata);
    const [productsList, setProductsList] = useState([]);
    const  products  =
    useSelector((state) => state.AllProducts);
    console.log("Hiii");

    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        setProductsList(products)
    }, [dispatch])

    useEffect(() => {
        if (products?.fulfilled) {
            console.log("true")
        //   setCatgory(products?.allAssetCategory?.fulfilled);
        }
      }, [products?.allAssetCategory]);

    return (
        <>
            <div className="home_section">
                <div className="banner_part">
                    <Banner />
                </div>
                <div className="slide_part">
                    <div className="left_slide">
                        <Slide title="Deal Of The Day" products={productsList} />
                    </div>
                    <div className="right_slide">
                        <h4>Festive latest launches</h4>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                        <a href="#">see more</a>
                    </div>
                </div>

                <Slide title="Today's Deal" products={productsList} />

                <div className="center_img">
                    <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
                </div>

                <Slide title="Best Seller" products={productsList} />
                <Slide title="Upto 80% off" products={productsList} />
            </div>

            <Divider />

        </>
    )
}

export default Maincomp;

{/* {
            products.map((e)=>{
                return (
                    <>
                        <h3>{e.description}</h3>
                    </>
                )
            })
        } */}